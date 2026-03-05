import React from 'react'

const SeviceCard = ({service , idx}) => {
  return (
    <div className=' flex items-center gap-10 p-8 border border-gray-300 hover:p-7.5 hover:m-0.5 transition-all rounded-[10px] bg-white dark:bg-gray-900 dark:border-gray-700/50 z-10'>
        <div className=' bg-gray-100 dark:bg-gray-700 rounded-full '>
            <img src={service.icon} alt="" className=' max-w-24 bg-white dark:bg-gray-900 rounded-full m-2' />
        </div>
        <div className='flex-1' >
            <h3 className='font-bold' >{service.title}</h3>
            <p className='text-sm mt-2' >{service.description}</p>
        </div>
       
    </div>
  )
}

export default SeviceCard
