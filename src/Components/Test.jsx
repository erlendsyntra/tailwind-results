import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

const db = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
);

const Test = () => {
  const [myData, setMyData] = useState([]);

  const getResults = async () => {
    const { data } = await db.from("results").select();
    console.log(data);
  };
  useEffect(() => {
    getResults();
  }, []);
  return <div>Test</div>;
};
export default Test;
