import React from 'react';

export default function AdminPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 to-blue-400">
            <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6 md:p-8">
                <h1 className="text-2xl md:text-3xl font-bold text-center mb-4 text-gray-800">Portfolio Login</h1>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                        <input id="email" type="email" placeholder="Enter your email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                        <input id="password" type="password" placeholder="Enter your password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                    <div>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline" type="button">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
