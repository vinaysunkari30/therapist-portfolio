import Animation from "../Animation";

const services = [
  {
    id: 1,
    name: "Anxiety",
    image: "/images/anxiety.jpg",
    description: `Anxiety keeps your mind racing and your body on high alert Dr. Maya helps you quiet the 'what-ifs' and find a true sense
                  of peace. Using simple, proven methods, you will learn to calm
                  your nervous system and handle stress with ease.`,
  },
  {
    id: 2,
    name: "Stress",
    image: "/images/stress.png",
    description: `Life can sometimes feel like too much to handle, leaving you
                  tired and overwhelmed. Dr. Maya helps you slow down and find
                  your balance again through simple ways to relax your mind and
                  body. You will learn to manage daily tasks without the heavy
                  weight of constant pressure.`,
  },
  {
    id: 3,
    name: "Trauma",
    image: "/images/trauma.png",
    description: `Sometimes, painful things from the past stay with us for a
                  long time. These memories can make the world feel scary or
                  unsafe. She provides a quiet, safe place to help you heal from
                  these old hurts. She moves at your pace, making sure you
                  always feel comfortable and supported.`,
  },
  {
    id: 4,
    name: "Burnout",
    image: "/images/burnout.png",
    description: `Burnout is more than just being tired; it is feeling like your
                  'battery' is completely empty. You might feel like you have no
                  energy left for work, family, or even the things you used to
                  love. She helps you stop the cycle of exhaustion and find your
                  spark again. She works with you to set healthy boundaries and
                  learn how to say 'no' without feeling guilty.`,
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="scroll-mt-20 pt-8 bg-services pb-10 overflow-hidden xs:pt-8 xl:pt-10"
    >
      <Animation>
        <div>
          <h1 className="text-center text-[30px] font-heading text-primary font-medium underline decoration-2 mb-3 sm:text-[35px] md:text-[38px] lg:text-[40px] lg:mb-4 xl:text-[46px]">
            Services
          </h1>
          <h1 className="text-center animate-heading leading-tight text-[21px] text-primary font-medium font-heading mb-4 xs:text-[27px] sm:text-[30px] sm:mb-6 md:text-[32px] md:mb-4 lg:hidden">
            Ways we can Connect
          </h1>
          <h1 className="text-center animate-heading text-2xl text-primary mb-3 font-medium font-heading hidden min-[425px]:text-[28px] sm:text-[40px] md:text-3xl md:mb-5 lg:block lg:text-[35px] lg:mb-7 xl:text-[39px]">
            Ways we can Connect
          </h1>
          <div className="flex flex-col justify-center items-center justify-evenly items-center gap-6 mb-8 sm:flex-row sm:gap-0 md:justify-center md:gap-10">
            <div className="flex flex-col justify-center items-center shadow-md bg-white rounded-lg pb-2">
              <div className="animate-heading bg-white rounded-lg p-3 w-58 min-[375px]:w-60 min-[425px]:w-65 xs:w-68 sm:w-70 lg:w-75 xl:w-82">
                <img
                  className="rounded-lg w-full h-full"
                  src="/images/office2.jpeg"
                  alt="Office"
                />
              </div>
              <h1 className="animate-heading text-lg tracking-wide text-subHeading font-body font-medium xl:text-[24px]">
                In-Person Sanctuary
              </h1>
              <a href='#office' className="my-2 rounded-sm text-[19px] text-body cursor-pointer font-body px-3 py-2 hover:bg-primary border-primary border hover:text-white transition-all duration-800">
                Explore Office
              </a>
            </div>
            <div className="flex flex-col justify-center items-center shadow-md bg-white rounded-lg pb-2">
              <div className="animate-heading bg-white rounded-lg p-3 w-58 h-46 min-[375px]:w-60 min-[375px]:h-48 min-[425px]:w-65 min-[425px]:h-53 xs:w-68 sm:w-70 sm:h-54 lg:w-75 lg:h-58 xl:w-82 xl:h-62">
                <img
                  className="rounded-lg w-full h-full"
                  src="/images/session.png"
                  alt="Session"
                />
              </div>
              <h1 className="animate-heading text-lg tracking-wide text-subHeading font-body font-medium xl:text-[24px]">
                Virtual Sanctuary
              </h1>
              <button className="my-2 rounded-sm text-[19px] text-body cursor-pointer font-body px-3 py-2 hover:bg-primary border-primary border hover:text-white transition-all duration-800">
                Schedule Session
              </button>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-center underline font-heading font-bold text-[21px] text-primary tracking-wide mb-2 xs:mb-5 xs:text-[26px] sm:text-[28px] md:text-[28px] xl:text-[35px]">
            Clinical Specializations
          </h1>
          <div className="grid grid-cols-1 px-5 gap-4 xs:flex xs:flex-col xs:justify-center xs:items-center sm:grid sm:grid-cols-2 md:grid-cols-2 md:px-7 lg:grid-cols-3 xl:grid-cols-3">
            {services.map((service) => {
              return (
                <div key={service.id} className="border border-primary px-3 py-5 bg-slate-100 xs:px-5 xs:w-[80%] sm:w-full md:px-3 md:py-4">
                  <h1 className="text-primary font-heading font-semibold text-[20px] underline decoration-2 tracking-wide mb-1 md:ml-2 lg:text-[22px] xl:text-[25px]">
                    {service.name}
                  </h1>
                  <div className="flex justify-center items-center py-4">
                    <img
                      className="rounded-full w-[80%] h-full mb-2 xs:w-[80%] sm:w-[85%] md:w-[75%] lg:w-[78%]"
                      src={service.image}
                      alt={service.name}
                    />
                  </div>
                  <div className="overflow-auto h-40 scrollbar px-2 md:px-2 md:px-4">
                    <p className="w-full text-justify text-[17px] font-body font-medium text-body xl:text-[20px]">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}           
          </div>
        </div>
      </Animation>
    </section>
  );
};

export default Services;
