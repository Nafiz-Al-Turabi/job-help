import React from 'react';

const CategoryCard = ({category}) => {
    const {logo,name,jobs_available}=category;
    return (
        <div className='bg-[#c4ffff2a] h-60 p-11  rounded-lg'>
            <img className='bg-cyan-100 p-3 rounded-lg mb-8' src={logo} alt="" />
            <h1 className='text-lg font-semibold mb-2 '>{name}</h1>
            <p className='text-slate-400'>{jobs_available}</p>
        </div>
    );
};

export default CategoryCard;
