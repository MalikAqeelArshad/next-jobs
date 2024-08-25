import { Suspense } from 'react';
import { appUrl } from '@/app/config';
import JobListing from './JobListing';
import Spinner from './Spinner';

const JobListings = async ({ isHome = false }) => {

   const data = await fetch(`${appUrl()}/api/jobs${isHome ? '?take=3' : ''}`);
   const jobs = await data.json() || [];

   return (
      <section className='bg-blue-50 px-4 py-10'>
         <div className='container-xl lg:container m-auto'>
            <h2 className='text-3xl font-bold text-zing-900 mb-6 text-center'>
            {isHome ? 'Recent Jobs' : 'Browse Jobs'}
            </h2>
            <Suspense fallback={<Spinner />}>
               <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative'>
               {jobs.map((job) => (<JobListing key={job._id} job={job} />))}
               </div>
            </Suspense>
         </div>
      </section>
   );
};

export default JobListings;
