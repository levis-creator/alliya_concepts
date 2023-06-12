const ImageComponent = ({img}) => {
  return (
    <div className="md:max-h-max w-full bg-black md:w-2/5 p-0">
      <div
        className=" h-80 relative   md:h-full md:overflow-auto w-full">
        <div
          className="bg-purple-900 absolute top-0 bottom-0 right-0 left-0 bg-opacity-60"></div>
        <img src={img} alt="" className=" h-full w-full object-cover"/>
      </div>
    </div>
  );
};

export default ImageComponent;
