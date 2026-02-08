import { HiArrowLongRight } from "react-icons/hi2";

import Animation from "../Animation";

const About = () => {
  return (
    <section id="about" className="bg-about pt-10 scroll-mt-20 pb-10">
      <Animation>
        <div className="flex flex-col w-full max-w-7xl mx-auto px-4 sm:grid sm:grid-cols-2 sm:gap-4 sm:items-center sm:px-6 md:gap-8 xl:gap-12  lg:px-12">
          <div className="flex justify-center items-center w-full xl:mt-5">
            <img
              className="w-64 rounded-t-full shadow-sm object-cover xs:w-72 sm:w-64 md:w-80 lg:w-96 xl:w-[450px]"
              src="/images/profile.png"
              alt="Dr. Maya Reynolds Profile"
            />
          </div>
          <div className="flex flex-col justify-center items-center text-center w-full sm:items-start sm:text-left">
            <div className="w-full max-w-lg mb-3 mt-6 sm:max-w-none md:mt-10">
              <div className="overflow-auto h-38 xs:px-5 md:px-0 md:h-50">
                <p className="font-body text-body text-[15px] leading-relaxed xs:text-[17px] sm:text-left sm:text-[17px] md:text-lg xl:text-[21px]">
                  <span className="text-primary underline font-semibold text-lg sm:text-[18px] md:text-xl md:font-bold xl:text-[28px] sm:inline mb-1">
                    Dr. Maya Reynolds
                  </span>{" "}
                  is a dedicated clinical psychologist with over a decade of
                  experience in helping individuals navigate the complexities of
                  the human mind. Her practice is built on the foundation of the
                  "Sanctuary" model, a therapeutic approach that prioritizes
                  emotional safety and holistic healing. Specializing in
                  anxiety, trauma, and burnout, Dr. Maya combines evidence-based
                  clinical techniques with a compassionate, person-centered
                  philosophy. She believes that therapy is not just about
                  solving problems, but about rediscovering one’s innate
                  resilience and inner peace.
                </p>
              </div>
            </div>
            <div className="w-full flex justify-center items-center mb-3 sm:justify-start ">
              <p className="animate-heading font-body text-xl font-semibold text-subHeading xs:text-[20px] md:text-[22px] lg:text-2xl xl:text-[30px]">
                From Santa Monica, California
              </p>
            </div>
            <div className="w-full max-w-lg mb-6 sm:max-w-none">
              <p className="animate-heading text-2xl font-semibold underline font-heading text-primary mb-2 md:text-3xl lg:text-[27px] xl:text-[33px]">
                Specialization:
              </p>
              <p className="animate-heading text-[16px] text-body font-body font-medium px-2 sm:px-0 xs:text-[18px] md:text-[19px] lg:text-[20px] xl:text-[24px] leading-snug">
                Specialized in treating Adults dealing with Anxiety, Stress,
                Trauma, Panic, and Burnout.
              </p>
            </div>
            <div className="animate-heading w-full flex justify-evenly items-center gap-5 xl:flex xl:justify-center">
              <button className="w-full border border-primary cursor-pointer text-primary flex justify-evenly items-center gap-3 text-xl font-body font-bold hover:bg-primary hover:text-white transition-all duration-800 px-5 py-4 xs:justify-center xs:gap-8 sm:text-md sm:py-2 sm:px-4 sm:gap-0.6 md:text-xl md:py-4 lg:w-75 lg:gap-3 xl:text-[25px] xl:font-semibold xl:w-88 xl:ml-10">
                GET IN TOUCH{" "}
                <HiArrowLongRight className="text-3xl text-primary xs:text-[32px] sm:text-[35px] md:text-2xl lg:text-3xl xl:text-[31px]" />
              </button>
            </div>
          </div>
        </div>
      </Animation>
    </section>
  );
};

export default About;
