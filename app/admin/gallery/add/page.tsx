"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function AddGalleryImage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
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

      const uploadData = await uploadRes.json();

      if (!uploadRes.ok) {
        throw new Error(uploadData?.error || "Image upload failed");
      }

      /* ---------- CREATE GALLERY ITEM ---------- */
      const galleryData = {
        title,
        imageUrl: uploadData.secure_url,
      };

      const res = await fetch("/api/gallery", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(galleryData),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result?.error || "Failed to create gallery item");
      }

      router.push("/admin/gallery");
    } catch (err: any) {
      console.error(err);
      alert(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-12 flex items-center justify-center">
      <div className="w-full max-w-2xl">
        <div className="mb-8">
          <Link
            href="/admin/gallery"
            className="text-sm font-semibold text-gray-400 hover:text-gray-600 transition"
          >
            ← Back to Gallery
          </Link>
        </div>

        <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-gray-200/50 p-6 md:p-14 border border-gray-100">
          <div className="mb-10 text-center">
            <h1 className="text-3xl font-bold text-gray-800 tracking-tight">
              Add New Image
            </h1>
            <p className="text-gray-500 mt-2">
              Upload a new photo to the clinic gallery.
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
                <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-lg ring-4 ring-white">
                  <Image src={preview} alt="Preview" fill className="object-contain" />
                </div>
              ) : (
                <p className="text-gray-600 font-medium">
                  Click to upload photo
                </p>
              )}
            </div>

            {/* TITLE */}
            <div>
              <input
                placeholder="Image Title (Optional)"
                className="w-full bg-gray-50 border border-transparent px-5 py-4 rounded-xl font-medium outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all text-gray-800"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
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
              {loading ? "Uploading..." : "Add to Gallery"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
