
import React from 'react';

const Timeline = () => {
    return (
        <div className='flex justify-center'>
            <div className='relative'>
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l border-gray-200 dark:border-gray-700"></div>
                <ol className="relative">
                    <li className="mb-10 flex justify-between items-center w-full">
                        <div className="w-5/12"></div>
                        <div className="w-5/12 pr-8 text-left">
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gray-200 rounded-full border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 ">February 2022</time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white gradient1">Application UI code in Tailwind CSS</h3>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
                        </div>
                    </li>
                    <li className="mb-10 flex justify-between items-center w-full text-right">
                        <div className="w-5/12 pl-8">
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gray-200 rounded-full border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2022</time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white gradient1">Marketing UI design in Figma</h3>
                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
                        </div>
                        <div className="w-5/12"></div>
                    </li>
                    <li className="flex justify-between items-center w-full">
                        <div className="w-5/12"></div>
                        <div className="w-5/12 pr-8 text-left">
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gray-200 rounded-full border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2022</time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white gradient1">E-Commerce UI code in Tailwind CSS</h3>
                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
                        </div>
                    </li>
                </ol>
            </div>
        </div>
    );
};

export default Timeline;
