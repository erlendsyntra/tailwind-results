const Result = () => {
  return (
    <>
      {/* bg-gradient-to-b from-pro-light-slate-blue to-pro-light-royal-blue */}
      <div className="bg-gradient-to-b from-pro-light-slate-blue to-pro-light-royal-blue text-center rounded-3xl md:w-1/2 h-128 shadow-2xl">
        <p className="font-medium text-pro-light-lavender text-2xl pt-9">
          Your Result
        </p>
        <div className="bg-gradient-to-b from-pro-violet-blue to-pro-persian-blue rounded-full md:w-52 md:h-52 md:mt-10 mx-auto">
          <p className="text-7xl font-extrabold text-pro-white pt-14">76</p>
          <p className="text-pro-pale-blue">of 100</p>
        </div>
        <p className="text-pro-white md:text-2xl font-bold md:pt-8">Great</p>
        <p className="text-pro-pale-blue/90 m-auto w-64 md:pt-6 md:leading-snug">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </>
  );
};
export default Result;
