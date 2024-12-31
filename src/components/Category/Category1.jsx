import React from 'react';
import pick4 from "../../assets/category/gaming.png";
import pick5 from "../../assets/category/vr1.png";
import pick6 from "../../assets/category/speaker.png";
import Button from '../Shared/Button';

const Category1 = () => {
  return (
    <div className='py-8'>
      <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-2
        lg:grid-cols-4 gap-8'>
          {/*first col*/} <div className=' col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-300/90
           to-gray-100 text-white rounded-3xl relative h-[320px]
           flex items-end'>
            <div>
              <div className='space-y-3 md-4'>
                <p className='md-[2px] text-white-500'>Enjoy</p>
                <p className='text-2xl font-semibold md-[2px]'>with</p>
                <p className='text-4xl xl:text-5xl font-bold opacity-60 md-2'>Laptop</p>
                <Button 
                text="Browse"
                bgColor={"bg-primary"}
                textColor={"text-white"}/>
              </div>
            </div>
            <img
              src={pick4}
              alt="laptop"
             className="w-[320px] absolute top-1/2 -translate-y-1/2 -right-0 "
            />
          </div>


          
          

          {/*second col*/}
          <div className='py-10 pl-5 bg-gradient-to-br from-brandGreen/90
           to-brandGreen/70 text-white rounded-3xl relative h-[320px]
           flex item-end'>
            <div>
              <div className='md-4'>
                <p className='md-[2px] text-white-500'>Enjoy</p>
                <p className='text-2xl font-semibold md-[2px]'>with</p>
                <p className='text-4xl xl:text-5xl font-bold opacity-60 md-2'>Gadget</p>
                <Button 
                text="Browse"
                bgColor={"bg-white"}
                textColor={"text-brandGreen"}/>
              </div>
            </div>
            <img
              src={pick5}
              alt="Earphone"
             className="w-[220px] absolute bottom-0"
            />
          </div>

          {/*third col*/}
          <div className='py-10 pl-5 bg-gradient-to-br from-brandBlue/90 to-brandBlue/70 text-white rounded-3xl relative h-[320px] flex items-start'>
            <div>
              <div className='md-4'>
                <p className='md-[2px] text-gray-400'>Enjoy</p>
                <p className='text-2xl font-semibold md-[2px]'>with</p>
                <p className='text-4xl xl:text-5xl font-bold opacity-20 md-2'>Earphone</p>
                <Button 
                text="Browse"
                bgColor={"bg-white"}
                textColor={"text-brandBlue"}/>
              </div>
            </div>
            <img
              src={pick6}
              alt="Earphone"
             className="w-[240px] absolute bottom-0 right-0"
            />
          </div>


        </div>
        </div>
       
    </div>
   
  );
}

export default Category1;
