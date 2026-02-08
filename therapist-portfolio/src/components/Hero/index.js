import { HiArrowLongRight } from "react-icons/hi2";
import Animation from "../Animation";

const Hero = () => {
  return (
    <section id="home" className="bg-secondary pt-10 pb-10 scroll-mt-20">
      <Animation>
        <div className="flex flex-col gap-4 sm:grid sm:gap-0 sm:grid-cols-2 sm:items-center md:gap-3">
          <div className="w-full flex justify-center items-center xl:mt-5">
            <img
              className="rounded-t-full shadow-sm w-64 xs:w-80 sm:w-55 md:w-80 lg:w-100 xl:w-[450px]"
              src="/images/profile.png"
              alt="profile"
            />
          </div>
          <div className="sm:py-4 lg:h-100 lg:flex lg:flex-col lg:justify-start lg:items-start xl:h-140">
            <h1 className="animate-heading text-center text-3xl font-heading font-medium text-primary mb-4 leading-tight sm:text-[26px] md:text-4xl lg:text-[38px] lg:ml-8 xl:text-[48px] xl:mb-8">
              Dr. Maya Reynolds,
              <br /> Psychologist
            </h1>
            <div className="w-full flex justify-center items-center lg:justify-start xl:w-130">
              <p className="animate-heading text-center font-body text-lg font-semiblod text-subHeading hidden mb-6 xs:block sm:text-[17px] md:text-[19px] lg:text-xl lg:ml-8 xl:text-[26px] xl:mb-10 xl:ml-10">
                Therapy for Anxiety, Trauma & Burnout
                <br /> in Santa Monica, CA.
              </p>
              <p className="animate-heading text-center font-body text-lg font-semiblod text-subHeading mb-6 xs:hidden ">
                Therapy for Anxiety, Trauma & Burnout in Santa Monica, CA.
              </p>
            </div>
            <div className="animate-heading w-full flex justify-center items-center xl:flex xl:justify-center xl:w-120">
              <button className="border border-primary cursor-pointer text-primary flex items-center gap-3 text-xl font-body font-bold hover:bg-primary hover:text-white transition-all duration-800 px-5 py-4 sm:text-md sm:py-2 sm:px-4 sm:gap-0.6 md:text-xl md:py-4 lg:mr-22 xl:mr-0 lg:w-75 lg:gap-3 xl:text-[25px] xl:font-semibold xl:w-88">
                Schedule Your Session{" "}
                <HiArrowLongRight className="text-4xl sm:text-[35px] md:text-2xl lg:text-3xl xl:text-[31px]" />
              </button>
            </div>
          </div>
        </div>
      </Animation>
    </section>
  );
};

export default Hero;
