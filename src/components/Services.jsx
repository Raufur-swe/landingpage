import React from 'react'
import assets from '../assets/assets';
import Title from './Title';
import SeviceCard from './SeviceCard';

const Services = () => {
    const serviceData = [
  {
   
    title: "Web Development",
    description: "We build fast, modern and responsive websites using the latest technologies.",
    icon: assets.ads_icon,
  },
  {
    
    title: "UI/UX Design",
    description: "We design clean and user-friendly interfaces that improve user experience.",
    icon: assets.marketing_icon,
  },
  {
    
    title: "Mobile Responsive",
    description: "Our websites are fully responsive and work perfectly on all devices.",
    icon: assets.content_icon,
  },
  {
    
    title: "SEO Optimization",
    description: "We optimize websites to rank higher in search engines and get more traffic.",
    icon: assets.social_icon,
  },
];
  return (
    <div id='services' className=' relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white ' >
        <img src={assets.bgImage2} alt="" className=' absolute -top-110 -left-70 -z-1 dark:hidden ' />
        <Title title="How we can help?" desc="From startegy to execution, we carft digital solution that move your business forward"/>

        <div className=' flex flex-col gap-5 md:grid grid-cols-2 ' >
          {serviceData.map((service , idx)=>(
            <SeviceCard key={idx} service={service} idx={idx} />
          ))}
        </div>
    </div>
  )
}

export default Services