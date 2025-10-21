import React from 'react';
import { useParams } from 'react-router';
import useFetchData from '../UseContetxt/useContext';
import Loading from '../Loading/Loading';

const ViewDetails = () => {

    const {id} = useParams();
    const pasreId = parseInt(id);
    
    const {data}= useFetchData();
    
    const findingData = data.find(item => item.id === pasreId);
    console.log(findingData)
    if(!findingData){
        return <Loading></Loading>
    }

    return (
        <div>
           <img src={findingData.image} alt="" />
           
        </div>
    );
};

export default ViewDetails;