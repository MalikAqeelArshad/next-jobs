import { headers } from 'next/headers';

export const appUrl = () => {
   const host = headers().get('host');
   const protocol = headers().get('x-forwarded-proto');
   // console.log('appUrl', `${protocol}://${host}`);
   return `${protocol}://${host}`;
}
