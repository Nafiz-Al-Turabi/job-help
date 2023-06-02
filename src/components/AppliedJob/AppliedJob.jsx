import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredCart } from '../utilities/FakeDB';
import AppliedJobCart from '../AppliedJobCard/AppliedJobCart';
const AppliedJob = () => {
    const jobData = useLoaderData()
    let newJobArray = []
    const saveData = getStoredCart()
    for (const id in saveData) {
        const foundJob = jobData.find(job => job.id == id)
        if (foundJob) {
            newJobArray.push(foundJob)
        }
    }
    return (
        <div>
            <div className='relative'>
                <h1 className='absolute inset-x-0 top-14 text-center text-4xl font-bold'>Applied Jobs</h1>
                <img className='hidden xl:block' src="https://i.ibb.co/tJ3GkJg/Vector.png" alt="" />
                <img className='hidden xl:block absolute -top-20 right-0 z-[-1]' src="https://i.ibb.co/VBHkjZk/Vector-1.png" alt="" />
            </div>
            <hr className='hidden xl:block' />
            <div className='grid gap-5 my-32'>
                {
                    newJobArray.map(singleJob => <AppliedJobCart key={singleJob.id} singleJob={singleJob}></AppliedJobCart>)
                }
            </div>
        </div>
    );
};

export default AppliedJob;