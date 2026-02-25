"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

interface IGallery {
  _id: string;
  imageUrl: string;
  title?: string;
  order: number;
}

export default function AdminGallery() {
  const [images, setImages] = useState<IGallery[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const dragIndex = useRef<number | null>(null);
  const dragOverIndex = useRef<number | null>(null);

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

  /* ── Drag handlers ── */
  const onDragStart = (index: number) => {
    dragIndex.current = index;
  };

  const onDragEnter = (index: number) => {
    dragOverIndex.current = index;
    if (dragIndex.current === null || dragIndex.current === index) return;
    const updated = [...images];
    const [moved] = updated.splice(dragIndex.current, 1);
    updated.splice(index, 0, moved);
    dragIndex.current = index;
    setImages(updated);
  };

  const onDragEnd = async () => {
    dragIndex.current = null;
    dragOverIndex.current = null;
    setSaving(true);
    setSaved(false);
    try {
      await fetch("/api/gallery/reorder", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ids: images.map((img) => img._id) }),
      });
      setSaved(true);
      setTimeout(() => setSaved(false), 2500);
    } catch (e) {
      console.error("Reorder failed", e);
    } finally {
      setSaving(false);
    }
  };

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
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 tracking-tight">
              Gallery Dashboard
            </h1>
            <p className="text-gray-500 mt-2 text-lg">
              Manage your clinic&apos;s gallery images.{" "}
              <span className="text-blue-500 font-medium">Drag rows to reorder.</span>
            </p>
          </div>
          <div className="flex items-center gap-3">
            {saving && (
              <span className="text-sm text-gray-400 animate-pulse">Saving order…</span>
            )}
            {saved && (
              <span className="text-sm text-green-500 font-medium">✓ Order saved</span>
            )}
            <Link
              href="/admin/gallery/add"
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-2xl font-semibold shadow-lg shadow-blue-200 hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              + Add Image
            </Link>
          </div>
        </div>

        {/* Drag hint banner */}
        <div className="flex items-center gap-2 mb-4 px-1 text-sm text-gray-400">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
          </svg>
          Drag the ⠿ handle on any row to reorder the display sequence
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-[2.5rem] shadow-xl shadow-gray-100/50 border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-50/50 border-b border-gray-100">
                <tr>
                  <th className="p-6 w-10" />
                  <th className="p-6 text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Image
                  </th>
                  <th className="p-6 text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="p-6 text-xs font-bold text-gray-400 uppercase tracking-wider text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {images.length === 0 ? (
                  <tr>
                    <td
                      colSpan={4}
                      className="p-12 text-center text-gray-400 font-medium"
                    >
                      No images found. Start by adding one.
                    </td>
                  </tr>
                ) : (
                  images.map((img, index) => (
                    <tr
                      key={img._id}
                      draggable
                      onDragStart={() => onDragStart(index)}
                      onDragEnter={() => onDragEnter(index)}
                      onDragEnd={onDragEnd}
                      onDragOver={(e) => e.preventDefault()}
                      className="group hover:bg-blue-50/30 transition-colors duration-200 cursor-grab active:cursor-grabbing active:bg-blue-50 active:shadow-inner"
                    >
                      {/* Drag handle */}
                      <td className="pl-6 pr-2 text-gray-300 group-hover:text-blue-300 select-none text-lg">
                        ⠿
                      </td>

                      {/* Thumbnail */}
                      <td className="p-6 pl-3">
                        <div className="relative w-24 h-16 rounded-lg overflow-hidden shadow-sm ring-4 ring-white">
                          <Image
                            src={img.imageUrl}
                            alt={img.title || "Gallery Image"}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </td>

                      {/* Title */}
                      <td className="p-6 font-semibold text-gray-800 text-lg">
                        {img.title || "-"}
                      </td>

                      {/* Actions */}
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
