"use client";

import { useEffect, useState, use } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function EditDentist({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const resolvedParams = use(params);
  const [form, setForm] = useState({
    name: "",
    specialization: "",
    experience: "",
    description: "",
    contact: "",
    imageUrl: "",
  });
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetch(`/api/dentists/${resolvedParams.id}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setForm(data);
          setPreview(data.imageUrl);
        } else {
          alert("Dentist not found");
          router.push("/admin/dentists");
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [resolvedParams.id, router]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      let imageUrl = form.imageUrl;

      // 1. Upload new image if selected
      if (image) {
        const formData = new FormData();
        formData.append("file", image);
        
        const uploadRes = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });
        const uploadData = await uploadRes.json();
        
        if (!uploadRes.ok) throw new Error("Image upload failed");
        imageUrl = uploadData.secure_url;
      }

      // 2. Update Dentist
      const dentistData = {
        ...form,
        imageUrl,
      };

      const res = await fetch(`/api/dentists/${resolvedParams.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dentistData),
      });

      if (res.ok) {
        router.push("/admin/dentists");
      } else {
        alert("Failed to update dentist");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return (
     <div className="min-h-screen flex items-center justify-center bg-gray-50 text-gray-500">
        Loading...
      </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12 flex items-center justify-center font-sans">
      <div className="w-full max-w-3xl">
        <div className="mb-8">
            <Link href="/admin/dentists" className="text-sm font-semibold text-gray-400 hover:text-gray-600 transition">
                ← Back to Dashboard
            </Link>
        </div>

        <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-gray-200/50 p-10 md:p-14 border border-gray-100">
           <div className="mb-10 text-center">
             <h1 className="text-3xl font-bold text-gray-800 tracking-tight">Edit Profile</h1>
             <p className="text-gray-500 mt-2">Update the details for {form.name}</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            
             {/* Image Upload Section */}
            <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-gray-200 rounded-3xl bg-gray-50 hover:bg-blue-50/50 transition-colors group cursor-pointer relative">
               <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              />
              {preview ? (
                <div className="relative w-32 h-32 rounded-full shadow-lg ring-4 ring-white overflow-hidden">
                    <Image src={preview} alt="Preview" fill className="object-cover" />
                </div>
              ) : (
                  <div className="text-center">
                      <p className="font-medium text-gray-600">Upload new photo</p>
                  </div>
              )}
                <div className="mt-4 px-4 py-2 bg-white rounded-full text-xs font-bold text-gray-500 shadow-sm border border-gray-100 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    Change Photo
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
                    <input
                        required
                        className="w-full bg-gray-50 border border-transparent focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 rounded-xl px-5 py-4 outline-none transition-all font-medium text-gray-800 placeholder:text-gray-400"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Specialization</label>
                    <input
                        required
                        className="w-full bg-gray-50 border border-transparent focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 rounded-xl px-5 py-4 outline-none transition-all font-medium text-gray-800 placeholder:text-gray-400"
                        value={form.specialization}
                        onChange={(e) => setForm({ ...form, specialization: e.target.value })}
                    />
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Experience</label>
                    <input
                        required
                        className="w-full bg-gray-50 border border-transparent focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 rounded-xl px-5 py-4 outline-none transition-all font-medium text-gray-800 placeholder:text-gray-400"
                        value={form.experience}
                        onChange={(e) => setForm({ ...form, experience: e.target.value })}
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Contact</label>
                    <input
                        className="w-full bg-gray-50 border border-transparent focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 rounded-xl px-5 py-4 outline-none transition-all font-medium text-gray-800 placeholder:text-gray-400"
                        value={form.contact}
                        onChange={(e) => setForm({ ...form, contact: e.target.value })}
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Description</label>
                <textarea
                    required
                    rows={4}
                    className="w-full bg-gray-50 border border-transparent focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 rounded-xl px-5 py-4 outline-none transition-all font-medium text-gray-800 placeholder:text-gray-400 resize-none"
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                />
            </div>

            <button
              type="submit"
              disabled={saving}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-4 rounded-xl font-bold text-lg shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {saving ? "Saving Changes..." : "Update Profile"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
