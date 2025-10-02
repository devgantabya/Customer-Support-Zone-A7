import React from 'react';
import bgImg from '../assets/vector1.png';

const Overview = ({progresscount, resolvedcount}) => {
    return (
        <div className='flex justify-between items-center gap-5 w-full py-5 md:py-20 px-4 md:px-0 container mx-auto'>
            <div className='text-white rounded-md bg-gradient-to-br from-[#632EE3] to-[#9F62F2] p-4 flex flex-col gap-2 justify-center items-center w-1/2 md:p-15 relative'>
             <img src={bgImg} alt="Left pattern" className="absolute left-0 inset-0 object-contain"/>
             <img src={bgImg} alt="Right pattern" className="absolute right-0 object-contain scale-x-[-1]"/>
                <h2 className='text-2xl'>In-Progress</h2>
                <p className='text-4xl md:text-6xl font-semibold'>{progresscount}</p>   
            </div>
            <div className='text-white rounded-md bg-gradient-to-r from-[#54CF68] to-[#00827A] p-4 flex flex-col gap-2 justify-center items-center w-1/2 md:p-15 relative'>
            <img src={bgImg} alt="Left pattern" className="absolute left-0 inset-0 object-contain"/>
             <img src={bgImg} alt="Right pattern" className="absolute right-0 object-contain scale-x-[-1]"/>
                <h2 className='text-2xl'>Resolved</h2>
                <p className='text-4xl md:text-6xl font-semibold'>{resolvedcount}</p>   
            </div>
            
        </div>
    );
};

export default Overview;