import { HiArrowLongRight } from "react-icons/hi2";
import Animation from "../Animation";

const Connect = () => {
  return (
    <section className="h-full py-12 flex justify-center items-center bg-[#889e9e]">
      <Animation>
        <div className="h-full flex flex-col justify-center items-center sm:w-120 xl:w-160">
          <h1 className="text-slate-100 font-heading text-2xl xs:text-[28px] lg:text-[32px] xl:text-[38px] font-bold mb-10">
            Get Started Today
          </h1>
          <p className="text-center px-3 text-slate-100 font-body text-lg font-medium mb-12 sm:text-[19px] xl:mb-12 xl:text-[22px]">
            Ready to take the first step towards a happier, healthier you?
            Contact me to book your first session. I look forward to starting
            this therapeutic journey with you.
          </p>
          <button className="border border-slate-100 cursor-pointer text-white flex justify-evenly items-center gap-3 text-lg font-body font-semibold hover:bg-white hover:text-[#889e9e] transition-all duration-800 px-5 py-3 xs:justify-center xs:gap-8 sm:text-md sm:py-2 sm:px-4 sm:gap-0.3 sm:justify-center md:text-xl md:py-3 lg:w-60 lg:gap-3xl:text-[25px] xl:font-semibold xl:w-75">
            GET IN TOUCH{" "}
            <HiArrowLongRight className="text-xl text-slate-100 hover:text-[#889e9e] xs:text-[32px] sm:text-[35px] md:text-2xl lg:text-3xl xl:text-[31px]" />
          </button>
        </div>
      </Animation>
    </section>
  );
};

export default Connect;
