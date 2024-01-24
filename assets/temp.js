return (
  <>
    <div className="bg-pro-white rounded-rb-3xl md:w-1/2 md:h-128 h-112 shadow-2xl rounded-3xl md:px-10 px-5">
      <h1 className="font-medium md:text-2xl text-xl pt-9">Summary</h1>
      <ul className="md:text-xl space-y-5 pt-8 font-extrabold">
        {results.map(({ id, text, liColor, textColor, score }) => {
          return (
            <SummaryItem
              key={id}
              text={text}
              liColor={liColor}
              textColor={textColor}
              score={score}
            />
          );
        })}
      </ul>
      <a
        href="#"
        className="bg-pro-dark-grayblue text-pro-white text-center md:mt-10 mt-5 text-xl font-extrabold w-full py-4 inline-block rounded-full"
      >
        Continue
      </a>
    </div>
  </>
);
