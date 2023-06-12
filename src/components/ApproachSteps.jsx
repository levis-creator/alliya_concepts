import ImageComponent from "./ImageComponent";

const ApproachSteps = ({ data }) => {
  return (
    <div className="flex flex-col h-fit md:flex-row ">
      <div className=" flex flex-col gap-8 p-7 py-9">
        <div className="space-y-5 ">
          <h4 className="text-2xl font-bold md:text-6xl md:w-3/5">{data.title}</h4>
          <h5 className="font-bold text-3xl text-purple-800">Step 1 </h5>
          <p className=" text-2xl leading-relaxed text-gray-800 md:text-3xl md:w-3/5">
            {data.steps.step1}
          </p>
          <h5 className="font-bold text-3xl text-purple-800">Step 2 </h5>
          <p className=" text-2xl leading-relaxed  text-gray-800 md:text-3xl md:w-3/5">
            {data.steps.step2}
          </p>
          <h5 className="font-bold text-3xl text-purple-800">Step 3 </h5>
          <p className="text-2xl leading-relaxed text-gray-800 md:text-3xl md:w-3/5">
            {data.steps.step3}{" "}
          </p>
        </div>
      </div>
      <ImageComponent img={data.image} />
    </div>
  );
};

export default ApproachSteps;
