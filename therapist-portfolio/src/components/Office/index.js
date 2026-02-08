import { FaLocationDot } from "react-icons/fa6";
import Animation from "../Animation";

const Office = () => {
  return (
    <section
      id="office"
      className="scroll-mt-20  overflow-hidden bg-office pt-5 xs:pt-8"
    >
      <Animation>
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto px-6">
          <h1 className="text-center text-4xl font-heading text-primary font-medium underline decoration-2 mb-5 tracking-wide md:text-[42px] lg:text-[44px] xl:text-[48px] xl:mb-7">
            Office
          </h1>
          <h1 className="uppercase text-[22px] tracking-[0.2rem] text-primary mb-3 font-semibold font-heading xs:text-2xl sm:text-[27px] sm:mb-6 md:text-[29px] md:mb-6 md:tracking-[0.2rem] lg:hidden">
            The Restoration
            <br /> Rooms
          </h1>
          <h1 className="text-2xl text-primary mb-3 font-semibold font-heading hidden min-[425px]:text-[28px] sm:text-[40px] md:text-3xl md:mb-5 md:tracking-none lg:block lg:text-[33px] lg:tracking-[0.2rem] lg:uppercase lg:font-semibold xl:text-[38px] xl:tracking-[0.1rem] xl:mb-8">
            The Restoration Rooms
          </h1>
          <p className="text-lg text-subHeading font-medium max-w-2xl font-body leading-relaxed hidden xs:block xs:mb-5 sm:text-[18px] sm:mb-6 md:mb-7 lg:text-[21px] xl:text-[24px] xl:mb-9">
            Your Stress transforms into clinical safety.
            <br /> Accelerate your recovery from deep burnout.
          </p>
          <p className="text-lg text-subHeading font-medium font-body mb-5 max-w-2xl leading-relaxed hidden md:text-lg">
            Your Stress transforms into clinical safety. Accelerate your
            recovery from deep burnout.
          </p>
        </div>
        <div className="px-5">
          <div className="flex flex-col justify-center items-center gap-5 mb-8 xs:mb-10">
            <div className="animate-heading bg-white flex flex-col items-center shadow-lg px-2 py-3 pb-5 rounded-2xl min-[576px]:w-[85%] md:w-[100%] md:flex md:flex-row md:justify-evenly md:items-center md:gap-4 md:shadow-md lg:w-[88%] lg:px-5 xl:w-[80%]">
              <h1 className="animate-heading font-body text-body text-xl font-bold underline mb-1 md:hidden">
                Room: 1
              </h1>
              <div className="rounded-lg w-full p-2 xs:w-[70%] sm:w-[80%] md:w-1/2 md:h-full">
                <h1 className="animate-heading font-body text-body text-xl font-bold underline text-center mb-1 hidden md:block xl:text-2xl">
                  Room: 1
                </h1>
                <img
                  className="rounded-lg w-full h-full"
                  src="/images/office1.jpeg"
                  alt="Office Room"
                />
              </div>
              <div className="w-full h-46 overflow-auto scrollbar md:w-full md:flex md:justify-center md:items-center md:px-3 md:py-2 md:pt-22 lg:pt-6 xl:h-60">
                <p className="font-body text-center text-body text-[16px] xs:text-[17px] leading-relaxed text-justify leading-[25px] font-medium px-2 xs:text-[16px] xs:px-4 sm:text-[17px] md:text-[17px] lg:text-[17px] xl:text-[22px]">
                  This quiet environment silences external noise to anchor your
                  physical senses. A stable atmosphere helps you remain present
                  during the deep work of therapy. This intentional atmosphere
                  allows a patient to feel that their recovery has already begun
                  the moment they sit down, as the space itself supports the
                  transition from exhaustion to renewal. This focused quiet
                  allows your mind to finally settle and begin the path to
                  restoration.
                </p>
              </div>
            </div>
            <div className="animate-heading bg-white flex flex-col justify-center items-center shadow-lg w-full rounded-2xl px-2 py-3 pb-5 min-[576px]:w-[85%] md:w-[100%] md:flex md:flex-row md:justify-center md:items-center md:gap-2 md:shadow-md lg:w-[88%] lg:px-5 xl:w-[80%]">
              <h1 className="animate-heading font-body text-body text-xl font-bold underline mb-1 md:hidden">
                Room: 2
              </h1>
              <div className="w-full h-46 bg-white overflow-scroll scrollbar order-2 md:w-full md:flex md:items-center md:justify-evenly md:px-3 md:pt-26 md:py-2 md:pt-10 lg:pt-15 md:gap-5 xl:h-56">
                <p className="font-body text-center px-2 text-body text-[16px] leading-relaxed text-justify leading-[25px] font-medium xs:text-[17px] xs:text-[16px] xs:px-4 sm:text-[17px] md:text-[17px] lg:text-[17px] xl:text-[22px]">
                  This second office space is strategically designed to move a
                  patient from a state of high-stress "survival mode" into a
                  phase of deep, restorative healing. By utilizing biophilic
                  design the integration of natural light, greenery, and organic
                  wood textures—the room acts as a silent co-therapist that
                  naturally lowers cortisol levels. Ultimately, this room serves
                  as a physical sanctuary where the mind is finally given the
                  permission and the perfect conditions to settle and thrive.
                </p>
              </div>
              <div className="bg-white rounded-lg p-3 xs:w-[70%] sm:w-[80%] md:w-1/2 md:order-2">
                <h1 className="animate-heading font-body text-body text-xl font-bold underline mb-1 text-center hidden md:block xl:text-2xl">
                  Room: 2
                </h1>
                <img
                  className="rounded-lg w-full h-full"
                  src="/images/office2.jpeg"
                  alt="Office Room"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="h-30 text-center flex flex-col items-center justify-center py-10">
          <div className="flex flex-col justify-center items-center w-full xs:flex xs:flex-row xs:items-center xs:justify-center xs:mb-2">
            <h1 className="animate-heading flex flex-row items-center justify-evenly w-full xs:w-40 sm:w-45 md:w-50 lg:w-55 xl:w-60">
              <span className="text-primary text-2xl font-heading font-semibold flex justify-center items-center mb-2 xs:mb-0 sm:text-[28px] md:text-3xl lg:text-[33px] xl:text-4xl ">
                <FaLocationDot className="text-primary mr-2 xs:text-2xl md:text-3xl" />{" "}
                Address :
              </span>
            </h1>
            <span className="animate-heading text-xl font-medium font-body text-body sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[28px]">
              123th Street 45 W,
            </span>
          </div>
          <h1 className="animate-heading text-xl font-medium font-body text-body xs:text-2xl xs:mt-0 sm:text-[23px] md:text-[24px] lg:text-[26px] xl:text-[28px]">
            Santa Monica, CA 90401
          </h1>
        </div>
      </Animation>
    </section>
  );
};

export default Office;
