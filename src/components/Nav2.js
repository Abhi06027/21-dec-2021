import React, {} from 'react'


const Nav2 = () => {
   return (
        <header>
        <div className="  h-20 bg-white flex justify-around text-xl lg:xl  w-full text-black   " >
         
         <div className='flex justify-between gap-10 items-center ' >
         <div className="  font-bold text-4xl lg:4xl  ">
         
        
         <div className="   "   >   Estore.    </div> 
          </div>
        </div>

         <ul className="  gap-10 items-center cursor-pointer text-lg hidden lg:flex   "   >
          <li className="   "   >  Home    </li>  
          <li className="   "   > Category      </li>  
          <li className="   "   >   Latest      </li>  
          <li className="   "   >  Blog    </li>  
          <li className="   "   >  Pages    </li>  
          <li className="   "   >  Contact    </li>  
         </ul>  



          <div className='flex items-center  gap-5  ' >
         <div className="  text-xs flex items-center   " >
         <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-4 ml-36 hidden lg:flex  font-bold   absolute    " fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
           </svg>
          
        <input className="  hidden lg:flex   text-xs py-3 pl-4 w-44 border border-gray-300   rounded-full  " type="text" placeholder="Search product" />         
          
          </div>
        
        
        <div className="  justify-center items-center  cursor-pointer  hidden lg:flex    "   >
        <div className=" flex justify-center items-center   bg-white border border-gray-300   h-8 w-8  rounded-full   "    >
         
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4  " fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
   </svg>  

   </div>
   </div> 
   <div className=" flex justify-center items-center    "   >
        <div className=" flex justify-center items-center cursor-pointer    bg-white border border-gray-300   lg:h-8 lg:w-8 h-12 w-12  rounded-full   "    >
         
        <svg xmlns="http://www.w3.org/2000/svg" class="lg:h-4 lg:w-4 h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
</svg>

                
           
           
   </div>
   </div> 

   <div className="  lg:hidden     "   >
        <div className=" flex justify-center items-center cursor-pointer lg:h-8 lg:w-8 h-20 w-12   "    >
         
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6  " fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
</svg>

   </div>
   </div> 
  
 <div className="  justify-center items-center hidden lg:flex   "   >
        <div className=" flex justify-center items-center cursor-pointer   bg-blue-700 text-white  rounded-full py-2 px-5 hover:bg-red-500 "    >
         
        <div className=" ">  Sign In     </div>  

   </div>
   </div> 
          
          </div>
          
 
          </div> 
          <div className=' h-80 w-2/4  bg-red-700  text-white  lg:hidden font-bold hidden    ' >
<ul className=" text-lg flex flex-col   "   >
 <li className="  hover:bg-white hover:text-red-700 py-2 px-10 "   >  Home    </li>  
 <li className=" hover:bg-white hover:text-red-700 py-2 px-10 "   > Category      </li>  
 <li className=" hover:bg-white  hover:text-red-700 py-2 px-10 "   >   Latest      </li>  
 <li className=" hover:bg-white hover:text-red-700  py-2 px-10 "   >  Blog    </li>  
 <li className=" hover:bg-white hover:text-red-700 py-2 px-10  "   >  Pages    </li>  
 <li className=" hover:bg-white hover:text-red-700 py-2 px-10 "   >  Contact    </li>  
</ul>  



</div>  
          </header>

        
    )
}












export default Nav2






