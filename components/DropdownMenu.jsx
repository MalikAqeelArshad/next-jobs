const DropdownMenu = () => {
	const preventDefault = (e) => e.preventDefault();

	return (
		<div className='flex mx-2'>
			<div className='group relative inline-block text-left'>
				<button
					className='p-2 rounded-md'>
					<b className="text-xl/none">&#8942;</b>
				</button>
				<div className="hidden group-hover:block overflow-hidden origin-top-right absolute right-0 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 animate-fadeIn">
					<p className='block px-4 py-2 border-b'>view more jobs demos</p>
               <a
						href='https://vue-mongodb.vercel.app' target="_blank"
						className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>
						<img className="inline-block h-5 mb-1 mr-1" src="/assets/icons/vue.svg" alt="Vue" /> Vue
					</a>
					<a
						href='https://react-mongodb.vercel.app' target="_blank"
						className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>
						<img className="inline-block h-5 mb-1 mr-1" src="/assets/icons/react.svg" alt="React" /> React
					</a>
					<a
						href='https://nuxtjs-mongodb.vercel.app' target="_blank"
						className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>
						<img className="inline-block h-5 mb-1 mr-1" src="/assets/icons/nuxt.svg" alt="Nuxt" /> Nuxt
					</a>
					<a
						href='' onClick={preventDefault} disabled
						className='block px-4 py-2 text-gray-300 pointer-events-none'>
						<img className="inline-block h-5 mb-1 mr-1" src="/assets/icons/next.svg" alt="Next" /> Next
					</a>
				</div>
			</div>
		</div>
	);
};
export default DropdownMenu;