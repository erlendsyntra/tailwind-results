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
          {results.map(({ text, liColor, textColor, score }) => {
            return (
              <SummaryItem
                text={text}
                liColor={liColor}
                textColor={textColor}
                score={score}
              />
            );
          })}
          {/* <SummaryItem
            text="Reaction"
            liColor="bg-pro-light-red/10"
            textColor="text-pro-light-red"
            score="80"
          />
          <SummaryItem
            text="Memory"
            liColor="bg-pro-orange-yellow/10"
            textColor="text-pro-orange-yellow"
            score="92"
          />
          <SummaryItem
            text="Verbal"
            liColor="bg-pro-green-teal/10"
            textColor="text-pro-green-teal"
            score="61"
          />
          <SummaryItem
            text="Visual"
            liColor="bg-pro-cobalt-blue/10"
            textColor="text-pro-cobalt-blue"
            score="72"
          /> */}
        </ul>
        <a
          href="#"
          className="bg-pro-dark-grayblue text-pro-white text-center md:mt-10 text-xl font-extrabold w-full py-4 inline-block rounded-full"
        >
          Continue
        </a>
      </div>
    </>
  );
};
export default Summary;
