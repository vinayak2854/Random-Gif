import Spinner from "./Spinner";
import useGif from "../hooks/useGif";
import { useState } from "react";

const Tag = () => {
  const [tag, setTag] = useState("car");
  const { gif, loading, fetchData } = useGif(tag);

  return (
    <div className='w-full sm:w-3/4 md:w-1/2 bg-blue-500 rounded-lg border border-black
    flex flex-col items-center gap-y-5 mt-4 p-4'>
      <h1 className='text-xl sm:text-2xl underline uppercase font-bold'>Random {tag} Gif</h1>
      {loading ? <Spinner /> : <img src={gif} alt='' className="w-full h-auto" />}
      <input
        className=' text-lg py-2 rounded-lg mb-3 text-center shadow-md shadow-black'
        onChange={(event) => setTag(event.target.value)}
        value={tag}
      />
      <button onClick={() => fetchData(tag)} className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-4 shadow-md shadow-black">
        Generate
      </button>
    </div>
  );
}

export default Tag;
