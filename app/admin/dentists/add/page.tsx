"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function AddDentist() {
  const router = useRouter();

  const MAX_WORDS = 200;

  const countWords = (text: string) =>
    text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  const [form, setForm] = useState({
    name: "",
    specialization: "",
    experience: "",
    description: "",
    contact: "",
  });

  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submit started");
    if (!image) {
      alert("Please upload an image");
      return;
    }

    setLoading(true);

    try {
      /* ---------- IMAGE UPLOAD ---------- */
      const formData = new FormData();
      formData.append("file", image);

      const uploadRes = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const uploadText = await uploadRes.text();
      console.log("Upload response text:", uploadText);
      let uploadData;

      try {
        uploadData = JSON.parse(uploadText);
      } catch {
        console.error("UPLOAD API RETURNED NON-JSON:", uploadText);
        throw new Error("Upload API error");
      }

      if (!uploadRes.ok) {
        throw new Error(uploadData?.error || "Image upload failed");
      }

      /* ---------- CREATE DENTIST ---------- */
      const dentistData = {
        ...form,
        imageUrl: uploadData.secure_url,
      };

      const res = await fetch("/api/dentists", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dentistData),
      });

      const resultText = await res.text();
      console.log("Dentist response text:", resultText);
      let result;

      try {
        result = JSON.parse(resultText);
      } catch {
        console.error("DENTIST API RETURNED NON-JSON:", resultText);
        throw new Error("Dentist API error");
      }

      if (!res.ok) {
        throw new Error(result?.error || "Failed to create dentist");
      }

      router.push("/admin/dentists");
    } catch (err: any) {
      console.error(err);
      alert(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-12 flex items-center justify-center">
      <div className="w-full max-w-3xl">
        <div className="mb-8">
          <Link
            href="/admin/dentists"
            className="text-sm font-semibold text-gray-400 hover:text-gray-600 transition"
          >
            ← Back to Dashboard
          </Link>
        </div>

        <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-gray-200/50 p-6 md:p-14 border border-gray-100">
          <div className="mb-10 text-center">
            <h1 className="text-3xl font-bold text-gray-800 tracking-tight">
              Add Specialist
            </h1>
            <p className="text-gray-500 mt-2">
              Enter the details of the new team member.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">

            {/* IMAGE UPLOAD */}
            <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-gray-200 rounded-3xl bg-gray-50 hover:bg-blue-50/50 transition relative cursor-pointer">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              />
              {preview ? (
                <div className="relative w-32 h-32 rounded-full overflow-hidden shadow-lg ring-4 ring-white">
                  <Image src={preview} alt="Preview" fill className="object-cover" />
                </div>
              ) : (
                <p className="text-gray-600 font-medium">
                  Click to upload profile photo
                </p>
              )}
            </div>

            {/* BASIC INFO */}
            <div className="grid md:grid-cols-2 gap-6">
              <input
                required
                placeholder="Full Name"
                className="w-full bg-gray-50 border border-transparent px-5 py-4 rounded-xl font-medium outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all text-gray-800"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              <input
                required
                placeholder="Specialization"
                className="w-full bg-gray-50 border border-transparent px-5 py-4 rounded-xl font-medium outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all text-gray-800"
                value={form.specialization}
                onChange={(e) =>
                  setForm({ ...form, specialization: e.target.value })
                }
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <input
                required
                placeholder="Experience (e.g. 12 Years)"
                className="w-full bg-gray-50 border border-transparent px-5 py-4 rounded-xl font-medium outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all text-gray-800"
                value={form.experience}
                onChange={(e) =>
                  setForm({ ...form, experience: e.target.value })
                }
              />
              <input
                placeholder="Contact (Optional)"
                className="w-full bg-gray-50 border border-transparent px-5 py-4 rounded-xl font-medium outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all text-gray-800"
                value={form.contact}
                onChange={(e) =>
                  setForm({ ...form, contact: e.target.value })
                }
              />
            </div>

            {/* DESCRIPTION — 200 WORD LIMIT */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-1">
                Description & Bio
              </label>

              <textarea
                required
                rows={5}
                placeholder="Brief description (max 200 words)"
                className="w-full bg-gray-50 border border-transparent
                  focus:bg-white focus:border-blue-500
                  focus:ring-4 focus:ring-blue-500/10
                  rounded-xl px-5 py-4 outline-none transition-all
                  font-medium text-gray-800 resize-none"
                value={form.description}
                onChange={(e) => {
                  const text = e.target.value;
                  if (countWords(text) <= MAX_WORDS) {
                    setForm({ ...form, description: text });
                  }
                }}
              />

              <p
                className={`text-sm text-right ${countWords(form.description) >= 180
                    ? "text-red-500"
                    : "text-gray-400"
                  }`}
              >
                {countWords(form.description)} / {MAX_WORDS} words
              </p>
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-500
                text-white py-4 rounded-xl font-bold text-lg
                shadow-xl shadow-blue-500/30 hover:scale-[1.02]
                transition-all disabled:opacity-50"
            >
              {loading ? "Creating Profile..." : "Create Specialist Profile"}
            </button>
          </form>
        </div>
      </div>


    </div>
  );
}
