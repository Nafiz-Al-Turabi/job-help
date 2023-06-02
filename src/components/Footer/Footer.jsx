import React from 'react';

const Footer = () => {
    return (
        <div className=' bg-slate-400 text-slate-200 py-32'>
            <div className='grid md:grid-cols-5 gap-8 md:gap-28 px-8 md:px-36 mb-3'>
                <div>
                    <img src="https://i.ibb.co/TrgWR3y/logo.png" alt="" />
                    <p className='mt-3'>This project is basically a job related project. Here you can know the job details and apply for the job.</p>
                    <div className='flex gap-2 mt-3'>
                        <img className='h-8' src="https://i.ibb.co/44hdHHx/twitter-1.png" alt="" />
                        <img className='h-8' src="https://i.ibb.co/PMdMS0h/link.png" alt="" />
                        <img className='h-8' src="https://i.ibb.co/RP1Dxzd/instagram.png" alt="" />
                        <img className='h-8' src="https://i.ibb.co/h1gJ7gC/facebook.png" alt="" />
                    </div>
                </div>
                <div>
                    <h1 className='text-lg font-semibold'>Company</h1>
                    <p className='mt-3 text-slate-300'>About us</p>
                    <p className='mt-3 text-slate-300'>Work</p>
                    <p className='mt-3 text-slate-300'>Latest news</p>
                    <p className='mt-3 text-slate-300'>Career</p>
                </div>
                <div>
                    <h1 className='text-lg font-semibold'>Product</h1>
                    <p className='mt-3 text-slate-300'>Prototype</p>
                    <p className='mt-3 text-slate-300'>Plan & Pricing</p>
                    <p className='mt-3 text-slate-300'>Customer</p>
                    <p className='mt-3 text-slate-300'>Integration</p>
                </div>
                <div>
                    <h1 className='text-lg font-semibold'>Support</h1>
                    <p className='mt-3 text-slate-300'>Help desk</p>
                    <p className='mt-3 text-slate-300'>Sales</p>
                    <p className='mt-3 text-slate-300'>Become a partner</p>
                    <p className='mt-3 text-slate-300'>Developers</p>
                </div>
                <div>
                    <h1 className='text-lg font-semibold'>Contact</h1>
                    <p className='mt-3 text-slate-300'>524 Broadway , NYC</p>
                    <p className='mt-3 text-slate-300'>+1777-978-5570</p>
                </div>
                
            </div>
            <hr  className='w-[82%] mx-auto'/>
            <div className='flex justify-between w-[82%] mx-auto pt-6'>
                <h1>@2023 jobHelp. All Rights Reserved</h1>
                <h1>Powered by CareerHub</h1>
            </div>
        </div>
    );
};

export default Footer;