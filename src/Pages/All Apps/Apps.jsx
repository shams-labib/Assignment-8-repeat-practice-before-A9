import React from 'react';
import useFetchData from '../../UseContetxt/useContext';
import Loading from '../../Loading/Loading';
import HomeDetails from '../Home resoucers/HomeDetails';

const Apps = () => {

    const {data, loading} = useFetchData();


    return (
        <div>
          <div className='text-center mt-7 space-y-1'>
             <h1 className='text-5xl font-semibold'>Our All Applications</h1>
           <p>Explore All Apps on the Market developed by us. We code for Millions</p>
          </div>
          <div className=' max-w-10/12 mx-auto flex justify-between items-center'>
            <p className='text-lg font-bold'>({data.length})Apps Found</p>
             
             <div>
                <label className="input ">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input className='w-[220px] ' type="search" required placeholder="Search" />
</label>
             </div>
          </div>

          <div>
            {
                loading ? <Loading></Loading> : <div className='max-w-10/12 mx-auto grid grid-cols-4 gap-8'>
                  {
                    data.map(card => <HomeDetails card={card}></HomeDetails>)
                  }
                </div>
            }
          </div>
        </div>
    );
};

export default Apps;