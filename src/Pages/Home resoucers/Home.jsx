import React from 'react';
import useFetchData from '../../UseContetxt/useContext';
import HomeDetails from './HomeDetails';
import Loading from '../../Loading/Loading';

const Home = () => {

    const {data, loading, error} = useFetchData();
    const appsData = data.slice(0,8)

    return (
        <div>
            <div className='text-center space-y-1'>
                <h1 className='text-center text-4xl font-bold mt-10'>Trending apps</h1>
            <p>Explore All Trending Apps on the Market developed by us</p>

            <div className='grid md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-8 mt-10 pb-10 p-8 md:p-0 lg:p-0 max-w-10/12 mx-auto'>
                { loading ? <Loading></Loading> :
                appsData.map(card => <HomeDetails card={card} key={card.id}></HomeDetails>)
            }
            </div>
            </div>
        </div>
    );
};

export default Home;