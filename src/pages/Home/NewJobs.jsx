// import { div } from 'motion/react-client';
import React, { useEffect, useState } from 'react';
import JobsCards from '../shared/JobsCards';

const NewJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/jobs")
            .then(res => res.json())
            .then(data => setJobs(data))
            .catch(err => console.log(err));
    }, []);

    return(
        
        <div className='grid grid-cols-3 gap-6'>
            {
                jobs.map(job => <JobsCards key={job._id} job={job}></JobsCards>)
            }
        </div>
    );
};

export default NewJobs;
