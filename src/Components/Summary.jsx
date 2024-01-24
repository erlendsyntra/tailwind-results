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
    // .order("created_at", { ascending: false });
    console.log(data);
    setResults(data);
  };

  useEffect(() => {
    getResults();
  }, []);

  return (
    <>
      <div className="bg-pro-white rounded-rb-3xl md:w-1/2 h-128 shadow-2xl rounded-3xl px-10">
        <h1 className="font-medium text-2xl pt-9">Summary</h1>
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
          className="bg-pro-dark-grayblue text-pro-white text-center md:mt-10 text-xl 
          font-extrabold w-full py-4 inline-block rounded-full hover:text-pro-pale-blue/60 
          hover:hover:bg-gradient-to-b from-pro-light-slate-blue to-pro-light-royal-blue transition-all"
        >
          Continue
        </a>
      </div>
    </>
  );
};
export default Summary;
