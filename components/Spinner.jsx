import Loading from './Loading';

const Spinner = () => {
   return (
      <>
      <div className="text-center text-gray-500 py-6">
         <Loading alt="Loading..." className="m-auto h-40" />
      </div>
      </>
   );
};
export default Spinner;
