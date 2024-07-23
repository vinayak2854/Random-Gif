// import React, { useState } from 'react'
// import axios from 'axios';
// import { useEffect } from 'react';
// import Spinner from './Spinner';
// import useGif from '../hooks/useGif';


// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

// const Random = () => {


//   const {gif, loading, fetchData} = useGif();


//   return (
//     <div className='w-1/2  bg-green-500 rounded-lg border border-black
//     flex flex-col items-center gap-y-5 mt-[15px]'>

//       <h1 className='mt-[15px] text-2xl underline uppercase font-bold'> A Random Gif</h1>

//     {
//         loading ? (<Spinner/>) : (<img src= {gif} width="450" />)
//     }

      

//       <button onClick={() => fetchData()}
//       className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]">

//        Generate

//       </button>

//     </div>
//   )
// }

// export default Random
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const Random = () => {
  const { gif, loading, fetchData } = useGif();

  return (
    <div className='w-full sm:w-3/4 md:w-1/2 bg-green-500 rounded-lg border border-black
    flex flex-col items-center gap-y-5 mt-4 p-4'>
      <h1 className='text-xl sm:text-2xl underline uppercase font-bold'>A Random Gif</h1>
      {loading ? <Spinner /> : <img src={gif} alt='' className="w-full h-auto" />}
      <button onClick={fetchData} className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-4 shadow-md shadow-black">
        Generate
      </button>
    </div>
  );
}

export default Random;

