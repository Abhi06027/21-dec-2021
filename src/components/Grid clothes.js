const Grid    = () => {
    return ( 
<div  >

<div className=" text-black lg:flex  justify-center  items-center   px-7  gap-8  mb-10 " >
<div></div>
<div className="bg-gray-100   rounded-md mt-11 flex justify-center items-center    " > 

<div className=" cursor-pointer  h-64 w-64  flex justify-center items-center  "  > <img className="    "  src=" ./images/Hoodie.png " alt=""/>   
</div>
</div>

<div className="bg-gray-100    rounded-md mt-11 flex justify-center items-center    " > 
<div className=" cursor-pointer h-64 w-64 flex justify-center items-center "  > <img className="w-56  mt-2  "  src="./images/t-shert.png " alt=""/>   
 </div>
</div>

<div className=" bg-gray-100    rounded-md mt-11 flex justify-center items-center    " >
<div className="cursor-pointer h-64 w-64 flex justify-center items-center  "  > <img className="w-56  mt-2  "  src="./images/shorts.png " alt=""/> </div>

</div>


</div>

</div>

     );
}
 
export default Grid  ;