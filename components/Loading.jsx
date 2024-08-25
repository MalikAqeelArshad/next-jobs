const Loading = (props) => {
   return <img src="/spinner.svg" {...props} className={`inline-block mx-1 ${props.className || ''}`} />;
};
export default Loading;
