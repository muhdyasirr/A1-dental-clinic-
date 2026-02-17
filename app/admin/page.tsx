import Link from "next/link";

export default function AdminDashboard() {
  return (
    <div className="p-6 md:p-10">
      <div className="max-w-4xl mx-auto">
        {/* WELCOME */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Welcome Back, Admin!
          </h1>
          <p className="text-gray-500 text-lg">
            Manage your clinic's digital presence with ease.
          </p>
        </div>

        {/* QUICK ACTIONS GRID */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* MANAGE DOCTORS */}
          <Link href="/admin/dentists" className="group block bg-white border border-gray-100 p-8 rounded-3xl shadow-xl shadow-gray-200/40 hover:shadow-2xl hover:shadow-blue-200/50 transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Manage Doctors</h3>
            <p className="text-gray-500">View, add, or remove specialists from your team.</p>
          </Link>

          {/* MANAGE GALLERY */}
          <Link href="/admin/gallery" className="group block bg-white border border-gray-100 p-8 rounded-3xl shadow-xl shadow-gray-200/40 hover:shadow-2xl hover:shadow-purple-200/50 transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Manage Gallery</h3>
            <p className="text-gray-500">Update clinic photos and showcase your facilities.</p>
          </Link>

        </div>
      </div>
    </div>
  );
}
