"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface IGallery {
  _id: string;
  imageUrl: string;
  title?: string;
}

export default function AdminGallery() {
  const [images, setImages] = useState<IGallery[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchGallery = async () => {
    try {
      const res = await fetch("/api/gallery");
      const data = await res.json();
      if (Array.isArray(data)) {
        setImages(data);
      }
    } catch (error) {
      console.error("Failed to fetch gallery", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this image?")) return;

    try {
      const res = await fetch(`/api/gallery/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setImages(images.filter((img) => img._id !== id));
      } else {
        alert("Failed to delete");
      }
    } catch (error) {
      console.error("Failed to delete", error);
    }
  };

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 text-gray-500">
        Loading gallery...
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-12 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 tracking-tight">
              Gallery Dashboard
            </h1>
            <p className="text-gray-500 mt-2 text-lg">
              Manage your clinic's gallery images.
            </p>
          </div>
          <Link
            href="/admin/gallery/add"
            className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-2xl font-semibold shadow-lg shadow-blue-200 hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            + Add Image
          </Link>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-[2.5rem] shadow-xl shadow-gray-100/50 border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-50/50 border-b border-gray-100">
                <tr>
                  <th className="p-8 text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Image
                  </th>
                  <th className="p-8 text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="p-8 text-xs font-bold text-gray-400 uppercase tracking-wider text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {images.length === 0 ? (
                  <tr>
                    <td
                      colSpan={3}
                      className="p-12 text-center text-gray-400 font-medium"
                    >
                      No images found. Start by adding one.
                    </td>
                  </tr>
                ) : (
                  images.map((img) => (
                    <tr
                      key={img._id}
                      className="group hover:bg-blue-50/30 transition-colors duration-200"
                    >
                      <td className="p-6 pl-8">
                        <div className="relative w-24 h-16 rounded-lg overflow-hidden shadow-sm ring-4 ring-white">
                          <Image
                            src={img.imageUrl}
                            alt={img.title || "Gallery Image"}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </td>
                      <td className="p-6 font-semibold text-gray-800 text-lg">
                        {img.title || "-"}
                      </td>
                      <td className="p-6 pr-8 text-right">
                        <div className="flex items-center justify-end gap-3 opacity-80 group-hover:opacity-100 transition-opacity">
                          <button
                            onClick={() => handleDelete(img._id)}
                            className="px-5 py-2 rounded-xl bg-rose-50 text-rose-600 font-medium hover:bg-rose-100 hover:text-rose-700 transition"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link href="/admin" className="text-gray-400 hover:text-gray-600 text-sm font-medium transition">
            ← Back to Admin Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
