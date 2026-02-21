"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

interface IDentist {
  _id: string;
  name: string;
  specialization: string;
  imageUrl: string;
  order: number;
}

export default function AdminDentists() {
  const [dentists, setDentists] = useState<IDentist[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const dragIndex = useRef<number | null>(null);
  const dragOverIndex = useRef<number | null>(null);

  const fetchDentists = async () => {
    try {
      const res = await fetch("/api/dentists");
      const data = await res.json();
      if (Array.isArray(data)) setDentists(data);
    } catch (error) {
      console.error("Failed to fetch dentists", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchDentists(); }, []);

  /* ── Drag handlers ── */
  const onDragStart = (index: number) => {
    dragIndex.current = index;
  };

  const onDragEnter = (index: number) => {
    dragOverIndex.current = index;
    if (dragIndex.current === null || dragIndex.current === index) return;
    const updated = [...dentists];
    const [moved] = updated.splice(dragIndex.current, 1);
    updated.splice(index, 0, moved);
    dragIndex.current = index;
    setDentists(updated);
  };

  const onDragEnd = async () => {
    dragIndex.current = null;
    dragOverIndex.current = null;
    setSaving(true);
    setSaved(false);
    try {
      await fetch("/api/dentists/reorder", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ids: dentists.map((d) => d._id) }),
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
    if (!confirm("Are you sure you want to delete this specialist?")) return;
    try {
      const res = await fetch(`/api/dentists/${id}`, { method: "DELETE" });
      if (res.ok) setDentists(dentists.filter((d) => d._id !== id));
      else alert("Failed to delete");
    } catch (error) {
      console.error("Failed to delete", error);
    }
  };

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 text-gray-500">
        Loading specialists...
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-12 font-sans">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 tracking-tight">Dashboard</h1>
            <p className="text-gray-500 mt-2 text-lg">
              Manage your clinic&apos;s specialists. <span className="text-blue-500 font-medium">Drag rows to reorder.</span>
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
              href="/admin/dentists/add"
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-2xl font-semibold shadow-lg shadow-blue-200 hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              + Add Specialist
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

        {/* Table Card */}
        <div className="bg-white rounded-[2.5rem] shadow-xl shadow-gray-100/50 border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-50/50 border-b border-gray-100">
                <tr>
                  <th className="p-6 w-10" />
                  <th className="p-6 text-xs font-bold text-gray-400 uppercase tracking-wider">Profile</th>
                  <th className="p-6 text-xs font-bold text-gray-400 uppercase tracking-wider">Name</th>
                  <th className="p-6 text-xs font-bold text-gray-400 uppercase tracking-wider">Specialization</th>
                  <th className="p-6 text-xs font-bold text-gray-400 uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {dentists.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="p-12 text-center text-gray-400 font-medium">
                      No specialists found. Start by adding one.
                    </td>
                  </tr>
                ) : (
                  dentists.map((doc, index) => (
                    <tr
                      key={doc._id}
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

                      {/* Photo */}
                      <td className="p-6 pl-3">
                        <div className="relative w-16 h-16 rounded-2xl overflow-hidden shadow-sm ring-4 ring-white">
                          <Image src={doc.imageUrl} alt={doc.name} fill className="object-cover" />
                        </div>
                      </td>

                      {/* Name */}
                      <td className="p-6 font-semibold text-gray-800 text-lg">
                        {doc.name}
                      </td>

                      {/* Specialization */}
                      <td className="p-6">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-medium">
                          {doc.specialization}
                        </span>
                      </td>

                      {/* Actions */}
                      <td className="p-6 pr-8 text-right">
                        <div className="flex items-center justify-end gap-3 opacity-80 group-hover:opacity-100 transition-opacity">
                          <Link
                            href={`/admin/dentists/edit/${doc._id}`}
                            className="px-5 py-2 rounded-xl bg-gray-100 text-gray-600 font-medium hover:bg-blue-100 hover:text-blue-700 transition"
                          >
                            Edit
                          </Link>
                          <button
                            onClick={() => handleDelete(doc._id)}
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
          <Link href="/" className="text-gray-400 hover:text-gray-600 text-sm font-medium transition">
            ← Back to Main Site
          </Link>
        </div>
      </div>
    </div>
  );
}
