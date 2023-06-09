import img from "../assets/undraw_building_re_xfcm.svg"
const Underdevelopment = () => {
  return (
    <div className="flex flex-col gap-5 items-center justify-center  w-full mt-10">
        <img src={img} alt="" className="w-3/4"/>
        <div className="text-3xl text-center font-semibold">
            Oops! Site still under development
        </div>
    </div>
  )
}

export default Underdevelopment