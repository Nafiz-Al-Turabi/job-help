import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../Card/Card';
import CategoryCard from '../CategoryCard/CategoryCard';

const Home = () => {
    const jobs = useLoaderData()
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('category.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    const [showAll, setShowAll] = useState(false);

    const handleShowAll = () => {
        setShowAll(true);
    }
    return (
        <div>
            <div className='md:flex justify-between items-center  w-[82%] mx-auto mt-6'>
                <div className='md:pr-[130px]'>
                    <h1 className=' font-bold  md:text-8xl text-4xl'>One Step Closer To Your <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r to-cyan-300 from-cyan-500">Dream Job</span></h1>
                    <p className='my-6 text-slate-400 text-lg md:pr-40'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish</p>
                    <button className='btn-primary text-lg'>Get Started</button>
                </div>
                <img className='md:h-[700px]  hidden xl:block' src="https://i.ibb.co/dD8PPKN/model.png" alt="" />
            </div>
            <div className='mt-32'>
                <div className='text-center'>
                    <h1 className='text-3xl md:text-5xl font-semibold mb-4'>Job Category List</h1>
                    <p className='text-slate-400'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className='grid md:grid-cols-4 my-8 gap-6 w-[82%] mx-auto'>
                    {
                        categories.map(category => <CategoryCard key={category.id} category={category}></CategoryCard>)
                    }
                </div>
            </div>
            <div className='mt-32'>
                <div className='text-center'>
                    <h1 className='text-3xl md:text-5xl font-semibold mb-4'>Featured Jobs</h1>
                    <p className='text-slate-400'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className='grid md:grid-cols-2 gap-4 w-[82%] mx-auto my-8'>
                    {
                        (showAll ? jobs : jobs.slice(0, 4)).map(job => (
                            <Card
                                key={job.id}
                                job={job}
                            ></Card>
                        ))
                    }
                </div>
                <div className='text-center my-6'>
                    {!showAll && (
                        <button className='btn-primary ' onClick={handleShowAll}>Show All</button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Home;