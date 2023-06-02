import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='relative'>
                <h1 className='absolute hidden xl:block inset-x-0 top-14 text-center text-4xl font-bold'>Blog</h1>
                <img className='hidden xl:block' src="https://i.ibb.co/tJ3GkJg/Vector.png" alt="" />
                <img className='hidden xl:block absolute -top-20 right-0 z-[-1]' src="https://i.ibb.co/VBHkjZk/Vector-1.png" alt="" />
            </div>
            <hr className='hidden xl:block' />
            <div className='w-[82%] mx-auto my-6 md:my-32'>
                <div className='mb-8'>
                    <h1 className='text-2xl font-semibold mb-6'>1. When should you use context API?</h1>
                    <p className='text-slate-500 text-justify'>Using Context APIs in your React when you need to share data, functions, or settings across components, avoid prop drilling, manage global state, provide theming or localization settings, manage dynamic configuration, or promote code reusability should It is important to evaluate the use of the Context API carefully and consider other options depending on the specific requirements and complexity of your application.</p>
                </div>
                <div className='mb-8'>
                    <h1 className='text-2xl font-semibold mb-6'>2. What is a custom hook?</h1>
                    <p className='text-slate-500 text-justify'>A  custom hook in React is a reusable JavaScript function that encapsulates logic for state management or side-effect handling, follows a naming convention of starting with "use", and can be used in multiple components for code reuse and improved maintainability.</p>
                </div>
                <div className='mb-8'>
                    <h1 className='text-2xl font-semibold mb-6'>3. What is useRef?</h1>
                    <p className='text-slate-500 text-justify'>useRef is a React hook that provides a way to create and maintain mutable references to values or DOM elements without causing re-renders, often used for accessing DOM elements, managing focus, or storing mutable values.</p>
                </div>
                <div className='mb-8'>
                    <h1 className='text-2xl font-semibold mb-6'>4. What is useMemo?</h1>
                    <p className='text-slate-500 text-justify'>useMemo is a React hook that caches the result of a computation and only recomputes it when dependencies change, allowing for performance optimization by avoiding unnecessary computations during renders.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;