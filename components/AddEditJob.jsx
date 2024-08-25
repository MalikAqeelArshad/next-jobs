'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import Loading from './Loading';

const AddEditJob = ({ job, method = 'POST' }) => {
   const router = useRouter();
   const [isDisabled, setIsDisabled] = useState(false);
   const [form, setForm] = useState(job ?? {
      type: 'Full-Time',
      title: '',
      description: '',
      salary: 'Under 50K AED',
      location: '',
      company: {
         name: '',
         description: '',
         contactEmail: '',
         contactPhone: '',
      },
   });

   const handleInput = (e) => {
      const { name, value } = e.target;
      if (name.includes('company_')) {
         const fieldName = name.replace('company_', '');
         setForm({ ...form, company: { ...form.company, [fieldName] : value } });
      } else {
         setForm({ ...form, [name]: value });
      }
   }

   const handleSubmit = (e) => {
      e.preventDefault();
      const formData = JSON.stringify({
         title: form.title,
         type: form.type,
         location: form.location,
         description: form.description,
         salary: form.salary,
         company: {
            name: form.company.name,
            description: form.company.description,
            contactEmail: form.company.contactEmail,
            contactPhone: form.company.contactPhone,
         },
      });
      setIsDisabled(true);
      method == 'PUT' ? editJob(formData) : addJob(formData);
      router.refresh(); // refresh layout after add/edit page
   }

   const addJob = async (formData) => {
      try {
         const res = await fetch(`/api/jobs`, { method: method, body: formData });
         if(res.status != 201) return toast.error(`${res.status}: ${res.statusText}`);
         toast.success('Job added successfully');
         router.push(`/jobs`);
      } catch (e) {
         toast.error('Job was not added');
      } finally {
         setIsDisabled(false);
      }
   }

   const editJob = async (formData) => {
      try {
         await fetch(`/api/jobs/${job._id}`, { method: method, body: formData });
         toast.success('Job updated successfully');
         router.push(`/jobs/${job._id}`);
      } catch (e) {
         toast.error('Job was not updated');
      } finally {
         setIsDisabled(false);
      }
   }

   return (
      <>
      <section className="bg-indigo-50">
         <div className="container m-auto max-w-2xl py-16">
            <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
               <form onSubmit={handleSubmit}>
                  <h2 className="text-3xl text-center font-semibold mb-6">
                     { method == 'PUT' ? 'Update' : 'Add' } Job
                  </h2>

                  <div className="mb-4">
                     <label
                        htmlFor="type"
                        className="block text-gray-700 font-bold mb-2"
                     >
                        Job Type
                     </label>
                     <select
                        id="type"
                        name="type"
                        className="border rounded w-full py-2 px-3"
                        required
                        value={form?.type} onChange={handleInput}
                     >
                        <option value="Full-Time">Full-Time</option>
                        <option value="Part-Time">Part-Time</option>
                        <option value="Remote">Remote</option>
                        <option value="Internship">Internship</option>
                     </select>
                  </div>

                  <div className="mb-4">
                     <label className="block text-gray-700 font-bold mb-2">
                        Job Listing Name
                     </label>
                     <input
                        type="text"
                        id="title"
                        name="title"
                        className="border rounded w-full py-2 px-3 mb-2"
                        placeholder="eg. Full Stack Developer In Dubai"
                        required
                        value={form?.title} onChange={handleInput}
                     />
                  </div>
                  <div className="mb-4">
                     <label
                        htmlFor="description"
                        className="block text-gray-700 font-bold mb-2"
                     >
                        Description
                     </label>
                     <textarea
                        id="description"
                        name="description"
                        className="border rounded w-full py-2 px-3"
                        rows="4"
                        placeholder="Add any job duties, expectations, requirements, etc"
                        value={form?.description} onChange={handleInput}
                     ></textarea>
                  </div>

                  <div className="mb-4">
                     <label
                        htmlFor="type"
                        className="block text-gray-700 font-bold mb-2"
                     >
                        Salary
                     </label>
                     <select
                        id="salary"
                        name="salary"
                        className="border rounded w-full py-2 px-3"
                        required
                        value={form?.salary} onChange={handleInput}
                     >
                        <option value="Under 50K AED">Under 50K AED</option>
                        <option value="50K - 60K AED">50K - 60K AED</option>
                        <option value="60K - 70K AED">60K - 70K AED</option>
                        <option value="70K - 80K AED">70K - 80K AED</option>
                        <option value="80K - 90K AED">80K - 90K AED</option>
                        <option value="90K - 100K AED">90K - 100K AED</option>
                        <option value="100K - 125K AED">100K - 125K AED</option>
                        <option value="125K - 150K AED">125K - 150K AED</option>
                        <option value="150K - 175K AED">150K - 175K AED</option>
                        <option value="175K - 200K AED">175K - 200K AED</option>
                        <option value="Over 200K AED">Over 200K AED</option>
                     </select>
                  </div>

                  <div className="mb-4">
                     <label className="block text-gray-700 font-bold mb-2">
                        Location
                     </label>
                     <input
                        type="text"
                        id="location"
                        name="location"
                        className="border rounded w-full py-2 px-3 mb-2"
                        placeholder="Company Location"
                        required
                        value={form?.location} onChange={handleInput}
                     />
                  </div>

                  <h3 className="text-2xl mb-5">Company Info</h3>

                  <div className="mb-4">
                     <label
                        htmlFor="company_name"
                        className="block text-gray-700 font-bold mb-2"
                     >
                        Company Name
                     </label>
                     <input
                        type="text"
                        id="company_name"
                        name="company_name"
                        className="border rounded w-full py-2 px-3"
                        placeholder="Company Name"
                        value={form?.company?.name} onChange={handleInput}
                     />
                  </div>

                  <div className="mb-4">
                     <label
                        htmlFor="company_description"
                        className="block text-gray-700 font-bold mb-2"
                     >
                        Company Description
                     </label>
                     <textarea
                        id="company_description"
                        name="company_description"
                        className="border rounded w-full py-2 px-3"
                        rows="4"
                        placeholder="What does your company do?"
                        value={form?.company?.description} onChange={handleInput}
                     ></textarea>
                  </div>

                  <div className="mb-4">
                     <label
                        htmlFor="company_contactEmail"
                        className="block text-gray-700 font-bold mb-2"
                     >
                        Contact Email
                     </label>
                     <input
                        type="email"
                        id="company_contactEmail"
                        name="company_contactEmail"
                        className="border rounded w-full py-2 px-3"
                        placeholder="Email address for applicants"
                        required
                        value={form?.company?.contactEmail} onChange={handleInput}
                     />
                  </div>
                  <div className="mb-4">
                     <label
                        htmlFor="company_contactPhone"
                        className="block text-gray-700 font-bold mb-2"
                     >
                        Contact Phone
                     </label>
                     <input
                        type="tel"
                        id="company_contactPhone"
                        name="company_contactPhone"
                        className="border rounded w-full py-2 px-3"
                        placeholder="Optional phone for applicants"
                        value={form?.company?.contactPhone} onChange={handleInput}
                     />
                  </div>

                  <div>
                     <button
                        className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                        type="submit" disabled={isDisabled}
                     >
                        { isDisabled && <Loading /> }
                        { method == 'PUT' ? 'Update' : 'Add' } Job
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </section>
      </>
   )
}

export default AddEditJob;