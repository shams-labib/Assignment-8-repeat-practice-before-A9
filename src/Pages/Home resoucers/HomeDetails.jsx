import React from 'react';
import dowLoads from '../../assets/icon-downloads.png'
import star from '../../assets/icon-ratings.png'
import { Link } from 'react-router';

const HomeDetails = ({card}) => {

     const {image, title, ratingAvg, downloads, id} = card;

    return (
       <Link to={`/category/${id}`}>
         <div className="card bg-base-100 shadow-sm  transform transition-transform duration-300 hover:-translate-y-5 cursor-pointer">
  <figure className="px-3 py-3 ">
    <img
      src={image}
      alt="Shoes"
      className="rounded-xl md:h-[300px] h-[200px] object-cover w-full" />
  </figure>
  <div className="p-3">
   <h1 className='text-xl font-semibold'>{title}</h1>
   <div className='flex justify-between mt-3'>
     <h3 className='flex items-center justify-center] bg-[#F1F5E8] rounded-md px-3 py-1 text-green-500'><span><img className='h-[16px] w-[16px] mr-2' src={dowLoads} alt="" /></span>{downloads}M</h3>
     <h3 className='flex items-center justify-center] bg-[#F1F5E8] rounded-md px-3 py-1 text-green-500'><span><img className='h-[16px] w-[16px] mr-2' src={star} alt="" /></span>{ratingAvg}</h3>
   </div>
  </div>
</div>
       </Link>
    );
};

export default HomeDetails;