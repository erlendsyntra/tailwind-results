import IconReaction from "./IconReaction";
import SummaryItem from "./SummaryItem";
import supabaseContext from "../data/SupabaseProvider";
import { useContext, useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const db = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
);

const Summary = () => {
  const supabase = useContext(supabaseContext);
  const [results, setResults] = useState([]);
  const getResults = async () => {
    // const { data } = await supabase.from("results").select();
    const { data } = await db.from("results").select();
    setResults(data);
  };

  useEffect(() => {
    getResults();
  }, []);
  return (
    <>
      <div className="bg-pro-white rounded-rb-3xl md:w-1/2 md:h-128 h-112 shadow-2xl rounded-3xl md:px-10 px-5">
        <h1 className="font-medium md:text-2xl text-lg md:pt-9 pt-6">
          Summary
        </h1>
        <ul className="md:text-xl space-y-5 md:pt-8 pt-7 font-extrabold">
          {results.map(({ id, text, liColor, textColor, score }) => {
            return (
              <SummaryItem
                key={id}
                id={id}
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
          className="bg-pro-dark-grayblue text-pro-white text-center md:mt-10 mt-6 text-xl font-extrabold w-full py-4 inline-block rounded-full"
        >
          Continue
        </a>
      </div>
    </>
  );
};
export default Summary;
