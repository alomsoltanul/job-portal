import React from 'react';

import { Link } from "react-router-dom";
import { Pencil, Trash2, ArrowRight } from "lucide-react";

const JobsCards = ({ job }) => {

    return (
        // <div>
        //     <div className="border p-4 rounded-lg shadow-md flex gap-4 items-start">

        //         {/* Company Logo */}
        //         <img
        //             src={job.company_logo}
        //             alt="logo"
        //             className="w-16 h-16 object-cover rounded"
        //         />

        //         <div className="flex-1">
        //             {/* Title */}
        //             <h2 className="text-xl font-bold">{job.title}</h2>

        //             {/* Company */}
        //             <p className="text-gray-600 font-medium">{job.company}</p>

        //             {/* Location + Type */}
        //             <p className="text-gray-500">
        //                 📍 {job.location} &nbsp; | &nbsp; 🏢 {job.jobType}
        //             </p>

        //             {/* Salary */}
        //             <p className="text-gray-700 mt-1">
        //                 💰 {job.salaryRange.min} – {job.salaryRange.max} {job.salaryRange.currency.toUpperCase()}
        //             </p>

        //             {/* Deadline */}
        //             <p className="text-red-500 text-sm mt-1">
        //                 ⏳ Apply before: {job.applicationDeadline}
        //             </p>

        //             {/* Actions */}
        //             <div className="flex gap-3 mt-4">

        //                 {/* View Details */}
        //                 <Link
        //                     to={`/jobs/${job._id}`}
        //                     className="px-3 py-1 bg-blue-600 text-white rounded"
        //                 >
        //                     View
        //                 </Link>

        //                 {/* Edit */}
        //                 <Link
        //                     to={`/jobs/edit/${job._id}`}
        //                     className="px-3 py-1 bg-yellow-500 text-white rounded"
        //                 >
        //                     Edit
        //                 </Link>

        //                 {/* Delete */}
        //                 <button
        //                     onClick={() => onDelete(job._id)}
        //                     className="px-3 py-1 bg-red-600 text-white rounded"
        //                 >
        //                     Delete
        //                 </button>

        //             </div>
        //         </div>
        //     </div>
        // </div>
         <div className="
            bg-white/80 backdrop-blur-xl 
            border border-gray-200 shadow-xl 
            rounded-2xl p-6 flex items-start gap-6 
            hover:shadow-2xl hover:-translate-y-1 
            transition-all duration-300
        ">
            
            {/* Logo */}
            <div className="flex-shrink-0">
                <img 
                    src={job.company_logo} 
                    alt="logo" 
                    className="w-16 h-16 rounded-xl object-cover shadow-md"
                />
            </div>

            <div className="flex-1">
                
                {/* Job Title */}
                <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
                    {job.title}
                </h2>

                {/* Company */}
                <p className="text-gray-600 mt-1 text-lg">{job.company}</p>

                {/* Tags */}
                <div className="flex gap-2 mt-3 flex-wrap">
                    <span className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-full">
                        📍 {job.location}
                    </span>
                    <span className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full">
                        🏢 {job.jobType}
                    </span>
                    <span className="px-3 py-1 text-sm bg-purple-100 text-purple-700 rounded-full">
                        💰 {job.salaryRange.min}–{job.salaryRange.max} {job.salaryRange.currency.toUpperCase()}
                    </span>
                </div>

                {/* Deadline */}
                <p className="mt-3 text-sm text-red-600 font-medium">
                    ⏳ Apply before: {job.applicationDeadline}
                </p>

                {/* Buttons */}
                <div className="flex items-center gap-4 mt-5">

                    {/* View Button */}
                    <Link
                        to={`/jobs/${job._id}`}
                        className="
                            flex items-center gap-2 px-4 py-2 
                            rounded-xl bg-blue-600 text-white 
                            hover:bg-blue-700 transition-all
                        "
                    >
                        View <ArrowRight size={18} />
                    </Link>

                    {/* Edit Button */}
                    <Link
                        to={`/jobs/edit/${job._id}`}
                        className="
                            flex items-center gap-2 px-4 py-2 
                            rounded-xl bg-yellow-500 text-white 
                            hover:bg-yellow-600 transition-all
                        "
                    >
                        <Pencil size={18} />
                        Edit
                    </Link>

                    {/* Delete Button */}
                    <button
                        onClick={() => onDelete(job._id)}
                        className="
                            flex items-center gap-2 px-4 py-2 
                            rounded-xl bg-red-600 text-white 
                            hover:bg-red-700 transition-all
                        "
                    >
                        <Trash2 size={18} />
                        Delete
                    </button>

                </div>
            </div>
        </div>
    );
};

export default JobsCards;