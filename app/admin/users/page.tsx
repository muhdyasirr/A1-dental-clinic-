"use client";

import { useState, useEffect } from "react";

interface User {
    _id: string;
    name: string;
    email: string;
    createdAt: string;
}

export default function ManageUsers() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);

    // Form State
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [formError, setFormError] = useState("");
    const [success, setSuccess] = useState("");

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const res = await fetch("/api/admin/users");
            const data = await res.json();
            if (Array.isArray(data)) {
                setUsers(data);
            }
        } catch (err) {
            console.error("Failed to fetch users");
        } finally {
            setLoading(false);
        }
    };

    const handleCreateUser = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormError("");
        setSuccess("");

        try {
            const res = await fetch("/api/admin/users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password }),
            });

            const data = await res.json();

            if (res.ok) {
                setSuccess("User created successfully!");
                setName("");
                setEmail("");
                setPassword("");
                fetchUsers(); // Refresh list
            } else {
                setFormError(data.error || "Failed to create user");
            }
        } catch (err) {
            setFormError("Something went wrong");
        }
    };

    return (
        <div className="p-4 md:p-10">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Manage Users</h1>

                <div className="grid lg:grid-cols-2 gap-12">

                    {/* CREATE USER FORM */}
                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50 h-fit">
                        <h2 className="text-xl font-bold mb-6 text-gray-800">Add New Admin</h2>

                        {formError && <div className="text-red-500 bg-red-50 p-3 rounded-xl mb-4 text-sm">{formError}</div>}
                        {success && <div className="text-green-500 bg-green-50 p-3 rounded-xl mb-4 text-sm">{success}</div>}

                        <form onSubmit={handleCreateUser} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                <input
                                    type="text"
                                    className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 outline-none focus:bg-white focus:border-blue-500 transition-all font-medium"
                                    placeholder="Admin Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 outline-none focus:bg-white focus:border-blue-500 transition-all font-medium"
                                    placeholder="admin@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                                <input
                                    type="password"
                                    className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 outline-none focus:bg-white focus:border-blue-500 transition-all font-medium"
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white font-semibold py-3.5 rounded-xl hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/20 transition-all"
                            >
                                Create User
                            </button>
                        </form>
                    </div>

                    {/* USER LIST */}
                    <div>
                        <h2 className="text-xl font-bold mb-6 text-gray-800">Existing Users</h2>
                        {loading ? (
                            <p>Loading users...</p>
                        ) : (
                            <div className="space-y-4">
                                {users.map((user) => (
                                    <div key={user._id} className="bg-white p-5 rounded-2xl border border-gray-100 flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                                            {user.name.charAt(0).toUpperCase()}
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">{user.name}</h4>
                                            <p className="text-sm text-gray-500">{user.email}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
}
