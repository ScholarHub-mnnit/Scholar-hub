import React from 'react';

const Input = React.forwardRef(({ label, placeholder, type = "text",
    className='',
    ...props }, ref) => {
    return (
        <div className='mb-2 w-full flex justify-between items-end'>
            <label htmlFor={label} className="block text-gray-900 dark:text-gray-400 text-md font-bold mb-2 text-nowrap">
                {label}:
            </label>
            <input 
                ref={ref} 
                className={` shadow dark:border-neutral-800 border border-gray-300 rounded py-2 px-3 text-black dark:text-gray-200 dark:bg-gray-950 leading-tight outline-none w-1/2 ${className}`}
                id={label} 
                type={type} 
                placeholder={placeholder} 
                {...props}
            />
        </div>
    );
});

export default Input;
