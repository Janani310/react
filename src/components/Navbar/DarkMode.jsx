import React from 'react';
import lightButton from '../../assets/light-mode 1.png';
import DarkButton from '../../assets/dark-mode 2.png';
const DarkMode = () => {
  const [theme,setTheme]=React.useState("dark");
  return (
    <div className='relative'>
      <img onClick={()=> setTheme(theme ==="dark" ? "light" :"dark")}
      src={lightButton} 
      alt='' 
      className={'w-12 cursor-pointer absolute right-0 z-10 $ {theme=== "dark" ? "opacity-0" : "opacity-100}'}/>
      <img 
      src={DarkButton} 
      alt='' 
      className={'w-12 cursor-pointer ${theme ==="dark" ? "opacity-0" : "opacity-100}'}/>
    </div>
   
  );
}

export default DarkMode;
