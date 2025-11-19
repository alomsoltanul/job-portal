// import React from 'react';
import { Link } from "react-router-dom";
import { useLoaderData } from 'react-router';
import { CalendarDays, MapPin, Briefcase, Mail, User, ArrowLeft } from "lucide-react";
const JobDetailed = () => {
    const job = useLoaderData();

    // console.log(jobDetailes);
    return (
        <div className="min-h-screen bg-neutral-50 py-12 px-4">
            <div className="max-w-5xl mx-auto">
                {/* HEADER CARD */}
                <div className="bg-white shadow-lg rounded-2xl p-8 border border-neutral-200">
                    <div className="flex items-start gap-6">
                        <img
                            src={job.company_logo}
                            alt={job.company}
                            className="w-24 h-24 rounded-xl object-cover border"
                        />

                        <div className="flex-1">
                            <h1 className="text-3xl font-semibold text-neutral-900">
                                {job.title}
                            </h1>
                            <p className="text-neutral-600 text-sm mt-1">
                                {job.company} • {job.location}
                            </p>

                            <div className="flex gap-3 mt-4 flex-wrap">
                                <span className="px-3 py-1 rounded-full bg-neutral-100 text-neutral-700 text-sm">
                                    {job.jobType}
                                </span>
                                <span className="px-3 py-1 rounded-full bg-neutral-100 text-neutral-700 text-sm">
                                    {job.category}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* APPLY BUTTON */}
                    <div className="mt-6 flex gap-4">
                        <Link
                            to={`/apply-jobs/${job._id}`}
                            className="px-6 py-3 bg-black text-white rounded-xl hover:bg-neutral-900 transition">
                            Apply Now
                        </Link>
                        <Link
                            to="/"
                            className="px-6 py-3 bg-neutral-200 rounded-xl hover:bg-neutral-300 transition"
                        >
                            Back to Jobs
                        </Link>
                    </div>
                </div>

                {/* DETAILS SECTION */}
                <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* LEFT CONTENT */}
                    <div className="lg:col-span-2 space-y-8">

                        {/* Description */}
                        <section className="bg-white shadow-md p-8 rounded-2xl border border-neutral-200">
                            <h2 className="text-xl font-semibold mb-4 text-neutral-900">
                                Job Description
                            </h2>
                            <p className="text-neutral-700 leading-relaxed">
                                {job.description}
                            </p>
                        </section>

                        {/* Requirements */}
                        <section className="bg-white shadow-md p-8 rounded-2xl border border-neutral-200">
                            <h2 className="text-xl font-semibold mb-4 text-neutral-900">
                                Requirements
                            </h2>
                            <ul className="list-disc list-inside space-y-2 text-neutral-700">
                                {job.requirements.map((req) => (
                                    <li key={req}>{req}</li>
                                ))}
                            </ul>
                        </section>

                        {/* Responsibilities */}
                        <section className="bg-white shadow-md p-8 rounded-2xl border border-neutral-200">
                            <h2 className="text-xl font-semibold mb-4 text-neutral-900">
                                Responsibilities
                            </h2>
                            <ul className="list-disc list-inside space-y-2 text-neutral-700">
                                {job.responsibilities.map((res) => (
                                    <li key={res}>{res}</li>
                                ))}
                            </ul>
                        </section>

                    </div>

                    {/* RIGHT SIDEBAR */}
                    <div className="space-y-8">

                        {/* Salary */}
                        <section className="bg-white shadow-md p-8 rounded-2xl border border-neutral-200">
                            <h2 className="text-xl font-semibold mb-4 text-neutral-900">
                                Salary
                            </h2>
                            <p className="text-neutral-800 font-medium">
                                {job.salaryRange.min.toLocaleString()} –{" "}
                                {job.salaryRange.max.toLocaleString()} {job.salaryRange.currency.toUpperCase()}
                            </p>
                        </section>

                        {/* Deadline */}
                        <section className="bg-white shadow-md p-8 rounded-2xl border border-neutral-200">
                            <h2 className="text-xl font-semibold mb-4 text-neutral-900">
                                Application Deadline
                            </h2>
                            <p className="text-neutral-700">{job.applicationDeadline}</p>
                        </section>

                        {/* HR INFO */}
                        <section className="bg-white shadow-md p-8 rounded-2xl border border-neutral-200">
                            <h2 className="text-xl font-semibold mb-4 text-neutral-900">
                                Contact HR
                            </h2>
                            <p className="text-neutral-800">{job.hr_name}</p>
                            <p className="text-neutral-600 text-sm">{job.hr_email}</p>
                        </section>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetailed;