'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import Loading from '@/components/Loading';

const Button = ({ job, title }) => {
   const router = useRouter();
   const [isDisabled, setIsDisabled] = useState(false);

   const onDeleteClick = async (e) => {
      if (job?.id) return e.preventDefault();

      if (!window.confirm('Are you sure you want to delete this listing?')) return;

      setIsDisabled(true);
      try {
         const res = await fetch(`/api/jobs/${job._id}`, { method: 'DELETE' });
         if(!res.ok) return toast.error(`${res.status}: ${res.statusText}`);
         toast.success('Job deleted successfully');
         router.push(`/jobs`); router.refresh();
      } catch (e) {
         toast.error('Job was not deleted');
      } finally {
         setIsDisabled(false);
      }
   };

   return (
      <button
         disabled={Boolean(job?.id) || isDisabled}
         onClick={onDeleteClick}
         className={`${job?.id ? 'bg-red-200':'bg-red-500 hover:bg-red-600'} text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block`}
      >
         { isDisabled && <Loading /> } {title}
      </button>
   )
}

export default Button;