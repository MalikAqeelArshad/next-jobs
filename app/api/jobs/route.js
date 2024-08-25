const apiUrl = process.env.NEXT_API_URL;
// default headers
const headers = {
   'Content-Type': 'application/json',
   'x-database': process.env.NEXT_MONGO_DB
};

export const dynamic = 'force-dynamic';

export async function GET(req) {
   // get query params from url
   const searchParams = req.nextUrl?.searchParams;
   const take = Number(searchParams?.get('take'));

   const jobsApi = `${apiUrl}/jobs${take ? `?take=${take}` : ''}`;
   const result = await fetch(jobsApi, { headers });
   const data = await result.json();

   return Response.json(data, { status: result.status });
}

export async function POST(req) {
   const form = await req.json();

   const result = await fetch(`${apiUrl}/jobs`, {
      headers,
      method: req.method,
      body: JSON.stringify(form)
   });
   const data = await result.json();

   return Response.json(data, { status: result.status });
}