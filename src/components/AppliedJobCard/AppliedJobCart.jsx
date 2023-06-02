import React from 'react';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';


const AppliedJobCart = ({ singleJob }) => {
    const { company_logo, company_name, job_title, fulltime_or_parttime, remote_or_onsite, location, salary,id } = singleJob;
    return (
        <div className='md:flex justify-between items-center border w-[82%] mx-auto p-5 rounded-lg'>
            <div className='grid md:grid-cols-2 gap-5 items-center'>
                <div className='bg-slate-200 p-20 rounded-lg'>
                    <img className='h-10 w-32' src={company_logo} alt="" />
                </div>
                <div>
                    <h1 className='text-2xl font-semibold'>{job_title}</h1>
                    <p className='text-slate-400 my-4'>{company_name}</p>
                    <button className='text-transparent bg-clip-text bg-gradient-to-r to-cyan-300 from-cyan-500 font-bold px-5 py-2 mr-3 border-2 border-cyan-300 rounded-lg'>{remote_or_onsite}</button>
                    <button className='text-transparent bg-clip-text bg-gradient-to-r to-cyan-300 from-cyan-500 font-bold px-5 py-2 mr-3 border-2 border-cyan-300 rounded-lg'>{fulltime_or_parttime}</button>
                    <div>
                        <p className='text-xl text-slate-400 mr-6 flex items-center'><MapPinIcon className="h-6 w-6 text-slate-400" /> {location}</p>
                        <p className='text-xl text-slate-400 flex items-center'><CurrencyDollarIcon className="h-6 w-6 text-slate-400" /> {salary}</p>
                    </div>
                </div>
            </div>
            <div>
                <p><Link to={`/jobDetails/${id}`} className='btn-primary font-bold'>View Details</Link></p>
            </div>
        </div>
    );
};

export default AppliedJobCart;