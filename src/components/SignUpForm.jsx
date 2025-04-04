import React, { useState } from "react";
import '../index.css';

const SignUpForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        githubRepo: "",
        domain: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted", formData);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-600 to-indigo-800 p-6">
            <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-md flex flex-col items-center text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Sign Up</h2>
                <form onSubmit={handleSubmit} className="w-full">
                    {Object.keys(formData).map((key) => (
                        <div className="mb-6 text-left" key={key}>
                            <label className="block text-gray-700 text-sm font-semibold mb-2 capitalize">{key.replace(/([A-Z])/g, ' $1')}</label>
                            <input
                                type={key === "password" ? "password" : "text"}
                                name={key}
                                value={formData[key]}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 shadow-sm"
                                required
                            />
                        </div>
                    ))}
                    <button type="submit" className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition font-semibold text-lg shadow-md">
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignUpForm;
