import { appUrl } from '@/app/config';
import AddEditJob from '@/components/AddEditJob';

const Job = async ({ params: { id } }) => {
   const apiUrl = `${appUrl()}/api/jobs/${id}`;
   const data = await fetch(apiUrl);
   const job = await data.json() || {};

   return <AddEditJob job={job} method="PUT" />;
}

export default Job;