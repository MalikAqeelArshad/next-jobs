const Hero = ({
  title = 'Become a Next Dev',
  subtitle = 'Find the Next job that fits your skill set',
}) => {
  return (
    <section className='bg-gray-100 py-10'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center'>
        <div className='text-center'>
          <h1 className='text-3xl font-extrabold sm:text-4xl md:text-5xl'>
            {title}
          </h1>
          <p className='my-4 text-xl'>{subtitle}</p>
        </div>
      </div>
    </section>
  );
};
export default Hero;
