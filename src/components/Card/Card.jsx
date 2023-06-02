import React from 'react';
import { MapPinIcon,CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const Card = ({job}) => {
    const {id,company_logo,job_title,company_name,location,salary,remote_or_onsite,fulltime_or_parttime}=job;
    return (
        <div className='border border-slate-200 rounded-lg p-8'>
            <img src={company_logo} alt="" />
            <h1 className='text-2xl font-semibold mt-8'>{job_title}</h1>
            <h3 className='text-xl text-slate-400 mb-4'>{company_name}</h3>
            <button className='text-transparent bg-clip-text bg-gradient-to-r to-cyan-300 from-cyan-500 font-bold px-5 py-2 mr-3 border-2 border-cyan-300 rounded-lg'>{remote_or_onsite}</button>
            <button className='text-transparent bg-clip-text bg-gradient-to-r to-cyan-300 from-cyan-500 font-bold px-5 py-2 mr-3 border-2 border-cyan-300 rounded-lg'>{fulltime_or_parttime}</button>
            <div className='md:flex my-4'>
                <p className='text-xl text-slate-400 mr-6 flex items-center'><MapPinIcon className="h-6 w-6 text-slate-400" /> {location}</p>
                <p className='text-xl text-slate-400 flex items-center'><CurrencyDollarIcon className="h-6 w-6 text-slate-400" /> {salary}</p>
            </div>
            <p><Link to={`/jobDetails/${id}`} className='btn-primary font-bold'>View Details</Link></p>
        </div>
    );
};

export default Card;