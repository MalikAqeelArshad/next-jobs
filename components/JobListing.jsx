'use client';
import Link from 'next/link';
import { useState } from 'react';

const JobListing = ({ job }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  let description = job.description;

  if (!showFullDescription) {
    description = description.substring(0, 90) + '...';
  }

  return (
    <div className='bg-white rounded-xl shadow-md'>
      <div className={ showFullDescription ? 'bg-white rounded-xl shadow-md p-4 sm:absolute w-full z-10 left-0' : 'p-4' }>
        <div className='mb-6'>
          <div className='text-gray-600 my-2'>{job.type}</div>
          <h3 className='text-xl font-bold'>{job.title}</h3>
        </div>

        <div className='mb-5'>{description}</div>

        <button
          onClick={() => setShowFullDescription((prevState) => !prevState)}
          className='text-slate-500 mb-5 hover:text-slate-600'
        >
          {showFullDescription ? 'Less' : 'More'}
        </button>

        <h3 className='text-slate-500 mb-2'>{job.salary} / Year</h3>

        <div className='border border-gray-100 mb-5'></div>

        <div className='flex flex-col lg:flex-row justify-between'>
          <div className='text-amber-700 mb-3'>
            <img src="/assets/icons/map.svg" alt="map" className="inline-block" width={24} />
            {job.location}
          </div>
          <Link
            href={`/jobs/${job._id}`}
            className='h-[36px] border border-black hover:bg-black hover:text-white px-4 py-2 rounded-lg text-center text-sm'
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobListing;