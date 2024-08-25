const apiUrl = process.env.NEXT_API_URL;
// default headers
const headers = {
   'Content-Type': 'application/json',
   'x-database': process.env.NEXT_MONGO_DB
};


export async function GET(req, { params: { id } }) {

   const result = await fetch(`${apiUrl}/jobs/${id}`, { headers });
   const data = await result.json();

   return Response.json(data, { status: result.status });
}

export async function PUT(req, { params }) {
   const { id } = params;
   const form = await req.json();

   const result = await fetch(`${apiUrl}/jobs/${id}`, {
      headers,
      method: req.method,
      body: JSON.stringify(form)
   });
   const data = await result.json();

   return Response.json(data, { status: result.status });
}

export async function DELETE(req, { params: { id } }) {

   const result = await fetch(`${apiUrl}/jobs/${id}`, {
      headers,
      method: req.method
   });
   const data = await result.json();

   return Response.json(data, { status: result.status });
}