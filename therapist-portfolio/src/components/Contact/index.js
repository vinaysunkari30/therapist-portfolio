const Contact = () => {
  return (
    <section id="contact" className="h-[100%] py-5 bg-[#f2f6f7] scroll-mt-20">
      <h1 className="text-[27px] underline decoration-2 text-primary font-heading font-semibold text-center sm:text-[30px] lg:text-[33px] sm:py-2 xl:text-[38px]">Contact</h1>
      <div className="lg:py-5 xl:py-10 sm:flex justify-between lg:w-justify-between xl:justify-between items-center">
        <div className="py-5 flex flex-col justify-evenly md:justify-start md:items-start px-5 md:text-left lg:px-10 xl:px-15">
          <h1 className="text-[20px] text-center text-primary font-heading font-semibold mb-6 sm:text-[21px] lg:text-[24px] xl:text-[29px]">
            Dr. Maya Reynolds, PsyD
          </h1>
          <p className="text-lg text-center text-body font-body font-medium mb-6 lg:text-xl xl:text-[23px] md:text-left">
            123th Street 45 W<br /> Santa Monica, CA 90401
          </p>
          <p className="text-lg text-center text-body font-body font-medium underline mb-1 lg:text-xl md:text-left">
            email@example.com
          </p>
          <p className="text-lg text-center text-body font-body font-medium underline mb-6 lg:text-xl md:text-left">
            (555) 555-5555
          </p>
        </div>
        <div className="justify-evenly items-start py-4 sm:w-75 sm:h-65 md:w-80 lg:w-100 xl:w-150 sm:flex md:justify-between md:px-5 lg:px-8 xl:px-15">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-primary font-heading text-xl mb-5 font-semibold xs:text-[24px] xl:text-[30px]">
              Hours
            </h1>
            <p className="text-body font-body text-lg mb-1 font-medium xl:text-[22px] ">
              Monday - Friday
            </p>
            <p className="text-body font-body text-lg mb-8 font-medium xl:text-[22px]">
              10am - 6pm
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-primary font-heading text-xl mb-6 font-semibold xs:text-[24px] xl:text-[30px]">
              Find
            </h1>
            <div className="flex flex-col justify-center items-center gap-2">
              <a
                href="#home"
                className="text-body text-lg font-body underline xl:text-[22px]"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-body text-lg font-body underline xl:text-[22px]"
              >
                About
              </a>
              <a
                href="#office"
                className="text-body text-lg font-body underline xl:text-[22px]"
              >
                Office
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
