const Result = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-pro-light-slate-blue to-pro-light-royal-blue text-center md:rounded-3xl md:w-1/2 rounded-b-3xl md:h-128 h-88 shadow-2xl">
        <p className="font-medium text-pro-light-lavender md:text-2xl md:pt-9 pt-6 text-xl">
          Your Result
        </p>
        <div className="bg-gradient-to-b from-pro-violet-blue to-pro-persian-blue rounded-full md:w-52 md:h-52 md:mt-10 w-36 h-36 mt-5 mx-auto">
          <p className="md:text-7xl font-extrabold text-pro-white md:pt-14 pt-8 text-5xl">
            76
          </p>
          <p className="md:text-pro-pale-blue md:mt-0 text-pro-pale-blue/40 mt-1">
            of 100
          </p>
        </div>
        <p className="text-pro-white md:text-3xl font-bold md:pt-6 pt-4 text-2xl">
          Great
        </p>
        <p className="text-pro-pale-blue/90 m-auto md:w-64 md:pt-3 md:leading-snug w-72">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </>
  );
};
export default Result;
