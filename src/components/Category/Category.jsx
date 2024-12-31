import React from 'react';
import pick1 from "../../assets/category/earphone.png";
import pick2 from "../../assets/category/watch.png";
import pick3 from "../../assets/category/macbook.png";
import Button from '../Shared/Button';

const Category = () => {
  return (
    <div className='py-8'>
      <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-2
        lg:grid-cols-4 gap-8'>
          {/*first col*/}
          <div className='py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end'>
            <div>
              <div className='md-4'>
                <p className='md-[2px] text-gray-400'>Enjoy</p>
                <p className='text-2xl font-semibold md-[2px]'>with</p>
                <p className='text-4xl xl:text-5xl font-bold opacity-20 md-2'>Earphone</p>
                <Button 
                text="Browse"
                bgColor={"bg-primary"}
                textColor={"text-white"}/>
              </div>
            </div>
            <img
              src={pick1}
              alt="Earphone"
             className="w-[240px] absolute bottom-0"
            />
          </div>

          {/*second col*/}
          <div className='py-10 pl-5 bg-gradient-to-br from-brandYellow/90
           to-brandkYellow/70 text-white rounded-3xl relative h-[320px]
           flex items-end'>
            <div>
              <div className='md-4'>
                <p className='md-[2px] text-white-500'>Enjoy</p>
                <p className='text-2xl font-semibold md-[2px]'>with</p>
                <p className='text-4xl xl:text-5xl font-bold opacity-60 md-2'>Gadget</p>
                <Button 
                text="Browse"
                bgColor={"bg-white"}
                textColor={"text-brandYellow"}/>
              </div>
            </div>
            <img
              src={pick2}
              alt="Earphone"
             className="w-[320px] absolute -top-0 lg:top-[40px]"
            />
          </div>

          {/*third col*/}
          <div className=' col-span-2 py-10 pl-5 bg-gradient-to-br from-primary/90
           to-primary/70 text-white rounded-3xl relative h-[320px]
           flex items-end'>
            <div>
              <div className='space-y-3 md-4'>
                <p className='md-[2px] text-white-500'>Enjoy</p>
                <p className='text-2xl font-semibold md-[2px]'>with</p>
                <p className='text-4xl xl:text-5xl font-bold opacity-60 md-2'>Laptop</p>
                <Button 
                text="Browse"
                bgColor={"bg-white"}
                textColor={"text-primary"}/>
              </div>
            </div>
            <img
              src={pick3}
              alt="laptop"
             className="w-[320px] absolute top-1/2 -translate-y-1/2 -right-0 "
            />
          </div>


        </div>
        </div>
       
    </div>
   
  );
}

export default Category;
