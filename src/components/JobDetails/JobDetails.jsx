import React, { useEffect, useState } from 'react';
import { CalendarDaysIcon, CurrencyDollarIcon, PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useLoaderData, useParams } from 'react-router-dom';
import { addToDb } from '../utilities/FakeDB';


const JobDetails = () => {
    const { id } = useParams()
    const [job, setJob] = useState({})

    useEffect(() => {
        fetch('/jobs.json')
            .then(res => res.json())
            .then(data => {
                const job1 = data.find(detail => detail.id == id)
                if (job1) {
                    setJob(job1)
                }
            })
    }, []);
    const { job_description, job_responsibility, educational_requirements, experiences, salary, job_title, phone, email, location, } = job;

    const applyJobHandler = (id) => {
        addToDb(id)
    }
    return (
        <div>
            <div className='relative'>
                <h1 className='absolute hidden xl:block inset-x-0 top-14 text-center text-4xl font-bold'>Job Details</h1>
                <img className='hidden xl:block' src="https://i.ibb.co/tJ3GkJg/Vector.png" alt="" />
                <img className='hidden xl:block absolute -top-20 right-0 z-[-1]' src="https://i.ibb.co/VBHkjZk/Vector-1.png" alt="" />
            </div>
            <hr className='hidden xl:block' />
            <div className='grid md:grid-cols-3 gap-6 w-[82%] mx-auto my-6 md:my-32'>
                <div className='md:col-span-2'>
                    <p className='text-slate-500 text-justify mb-5' ><span className='text-slate-950 font-bold'>Job Description:</span> {job_description}</p>
                    <p className='text-slate-500 text-justify mb-5'><span className='text-slate-950 font-bold'>Job Responsibility:</span> {job_responsibility}</p>
                    <h1 className='text-slate-950 font-bold'>Educational Requirements:</h1>
                    <p className='text-slate-500 text-justify mb-5'>{educational_requirements}</p>
                    <h1 className='text-slate-950 font-bold'>Experiences:</h1>
                    <p className='text-slate-500 text-justify mb-5'>{experiences
                    }</p>
                </div>
                <div>
                    <div className='bg-[#c4ffff44] p-8 rounded-lg'>
                        <h1 className='text-xl font-bold mb-6'>Job Details</h1>
                        <hr />
                        <p className='text-base text-slate-900 font-semibold my-3 mr-6 flex items-center'><CurrencyDollarIcon className="h-4 w-4 text-slate-400" />Salary: {salary}</p>
                        <p className='text-base text-slate-900 font-semibold my-3 mr-6 flex items-center'><CalendarDaysIcon className="h-4 w-4 text-slate-400" />Job Title: {job_title}</p>
                        <h1 className='text-xl font-bold mb-6'>Contact Information</h1>
                        <hr />
                        <p className='text-base text-slate-900 font-semibold my-3 mr-6 flex items-center'><PhoneIcon className="h-4 w-4 text-slate-400" />Phone: {phone}</p>
                        <p className='text-base text-slate-900 font-semibold my-3 mr-6 flex items-center'><EnvelopeIcon className="h-4 w-4 text-slate-400" />Email: {email}</p>
                        <p className='text-base text-slate-900 font-semibold my-3 mr-6 flex items-center'><MapPinIcon className="h-4 w-4 text-slate-400" />Address: {location}</p>
                    </div>
                    <button onClick={() => applyJobHandler(job.id)} className='btn-primary w-[100%] mt-6 font-bold text-xl'>Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;