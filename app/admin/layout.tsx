"use client";

import { ReactNode, useEffect, useState } from 'react';
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function AdminLayout({ children }: { children: ReactNode }) {
  const { isAuthenticated, loading } = useAuth();
  const router = useRouter();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!isAuthenticated) return null;

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-900 font-sans relative">

      {/* MOBILE HEADER & TOGGLE */}
      <div className="lg:hidden absolute top-0 left-0 w-full bg-white p-4 border-b border-gray-100 flex items-center justify-between z-20">
        <h2 className="text-lg font-bold text-gray-800">A1 Admin</h2>
        <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="p-2 text-gray-600">
          {isSidebarOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* OVERLAY for Mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* SIDEBAR */}
      <aside
        className={`
          fixed lg:static top-0 left-0 h-full w-72 
          bg-white border-r border-gray-100 shadow-xl shadow-gray-200/50 
          z-40 transition-transform duration-300
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        <div className="p-8 border-b border-gray-50">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            A1 Admin
          </h2>
          <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider font-semibold">Dashboard</p>
        </div>

        <nav className="flex-1 p-6 space-y-2 overflow-y-auto">
          <Link href="/admin/dentists" onClick={() => setSidebarOpen(false)} className="flex items-center gap-3 px-4 py-3.5 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-2xl transition-all duration-200 font-medium group">
            <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-blue-500 transition-colors"></span>
            Doctors
          </Link>
          <Link href="/admin/gallery" onClick={() => setSidebarOpen(false)} className="flex items-center gap-3 px-4 py-3.5 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-2xl transition-all duration-200 font-medium group">
            <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-blue-500 transition-colors"></span>
            Gallery
          </Link>
          <Link href="/admin/users" onClick={() => setSidebarOpen(false)} className="flex items-center gap-3 px-4 py-3.5 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-2xl transition-all duration-200 font-medium group">
            <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-blue-500 transition-colors"></span>
            Users
          </Link>
        </nav>

        <div className="p-6 border-t border-gray-50">
          <div className="flex items-center gap-3 px-4 py-3 text-sm text-gray-400">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            System Online
          </div>
        </div>
      </aside>

      <main className="flex-1 pt-14 lg:pt-0">
        {children}
      </main>
    </div>
  );
}
