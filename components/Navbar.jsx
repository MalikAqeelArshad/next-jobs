'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import DropdownMenu from './DropdownMenu';

const Navbar = () => {
   const pathname = usePathname();
   const linkClass = (href) => `${pathname == href ? 'bg-black text-white' : ''} hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`;

  return (
    <nav className='bg-white border-b sticky top-0 z-50'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='flex h-20 items-center justify-between'>
          <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
            <Link className='flex flex-shrink-0 items-center mr-4' href='/'>
              <img className='h-10 w-auto' src="/next.svg" alt='Next Jobs' />
              <span className='hidden sm:block text-2xl font-bold ml-2'>
                Next Jobs
              </span>
            </Link>
            <div className='sm:ml-auto'>
              <div className='flex space-x-2'>
                <Link href='/' className={linkClass('/')}>
                  Home
                </Link>
                <Link href='/jobs' className={linkClass('/jobs')}>
                  Jobs
                </Link>
                <Link href='/jobs/add' className={linkClass('/jobs/add')}>
                  Add Job
                </Link>
                <DropdownMenu />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
