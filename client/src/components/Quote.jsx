import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Quote() {
    const [quote,setQuote]=useState(null);
    const fetchQuote=async()=>{
        const res=await axios.get('https://qapi.vercel.app/api/random');
        if(res){
            setQuote(res?.data);
        }
    }
    useEffect(()=>{
        fetchQuote();
    },[])
  return (
    <>
    {quote && <div className='my-3 rounded-md bg-slate-50 dark:bg-neutral-900 dark:text-gray-300 text-center font-serif border w-fit mx-auto px-4 py-2'>
        <i className='pt-2 '>{quote?.quote}</i>
        <b className=''>~ {quote?.author}</b>
    </div>}
    </>
  )
}

export default Quote