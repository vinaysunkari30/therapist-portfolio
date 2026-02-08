

const Footer = () => {
  return (
    <section className="py-5 bg-teal-200/20">
      <div className="w-full text-center leading-relaxed flex flex-col justify-center items-center mb-4 sm:flex md:flex-row md:justify-center md:items-center sm:gap-1 md:gap-4">
        <div className="gap-4 sm:flex">
          <p className="cursor-pointer underline text-gray-800 text-md font-medium xl:text-xl">
            Privacy & Cookies Policy
          </p>
          <p className="cursor-pointer underline text-gray-800 text-md font-medium xl:text-xl">
            Good Faith Estimate
          </p>
        </div>
        <div className="gap-3 sm:flex">
          <p className="cursor-pointer underline text-gray-800 text-md font-medium xl:text-xl">
            Website Terms & Conditions
          </p>
          <p className="cursor-pointer underline text-gray-800 text-md font-medium xl:text-xl">
            Disclamer
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-2 mb-3 sm:flex-row xl:text-xl">
        <p className="text-subHeading font-body text-md md:text-[17px">
          Website Template Credits:{" "}
        </p>
        <p className="underline cusor-pointer text-primary text-md md:text-[17px] xl:text-xl">
          Go Bloom Creative
        </p>
      </div>
      <div className="px-5">
        <p className="text-center font-body text-body text-md md:text-[17px] xl:text-xl">
          All Rights Reserved © 2024 Your Business Name Here, LLC.
        </p>
      </div>
    </section>
  );
};

export default Footer;
