import ImageComponent from "./ImageComponent";

const ApproachSteps = ({ data }) => {
  return (
    <div className="flex flex-col h-fit md:flex-row ">
      <div className=" flex flex-col gap-8 p-7 py-9 flex-1">
        <div className="space-y-5 ">
          <h4 className="text-2xl font-bold md:text-6xl md:w-3/5">{data.serviceName}</h4>
          <h5 className="font-bold text-3xl text-purple-800">Step 1 </h5>
          <p className=" text-2xl leading-relaxed text-gray-800 md:text-3xl md:w-3/5">
            {data.step1}
          </p>
          <h5 className="font-bold text-3xl text-purple-800">Step 2 </h5>
          <p className=" text-2xl leading-relaxed  text-gray-800 md:text-3xl md:w-3/5">
            {data.step2}
          </p>
          <h5 className="font-bold text-3xl text-purple-800">Step 3 </h5>
          <p className="text-2xl leading-relaxed text-gray-800 md:text-3xl md:w-3/5">
            {data.step3}{" "}
          </p>
        </div>
      </div>
      <ImageComponent img={data.serviceImage.fields.file.url} />
    </div>
  );
};

export default ApproachSteps;
