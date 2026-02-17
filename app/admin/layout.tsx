"use client";

import { ReactNode, useEffect } from 'react';
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function AdminLayout({ children }: { children: ReactNode }) {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return null; // Or a loading spinner
  }

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-900 font-sans">
      <aside className="w-72 bg-white border-r border-gray-100 shadow-xl shadow-gray-200/50 z-10 flex flex-col">
        <div className="p-8 border-b border-gray-50">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            A1 Admin
          </h2>
          <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider font-semibold">Dashboard</p>
        </div>

        <nav className="flex-1 p-6 space-y-2 overflow-y-auto">
          <a href="/admin/dentists" className="flex items-center gap-3 px-4 py-3.5 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-2xl transition-all duration-200 font-medium group">
            <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-blue-500 transition-colors"></span>
            Doctors
          </a>
          <a href="/admin/gallery" className="flex items-center gap-3 px-4 py-3.5 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-2xl transition-all duration-200 font-medium group">
            <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-blue-500 transition-colors"></span>
            Gallery
          </a>
        </nav>

        <div className="p-6 border-t border-gray-50">
          <div className="flex items-center gap-3 px-4 py-3 text-sm text-gray-400">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            System Online
          </div>
        </div>
      </aside>
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}
