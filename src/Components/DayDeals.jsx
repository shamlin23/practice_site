import dealSofa from '../assets/deal-sofa.png'

function DayDeals() {
  return (
    <div className="mt-8 w-full flex justify-between flex-wrap">  
    {/* sofa at left -first div as col,div designs in bg with z-index*/}
   
      <div className="ml-12  h-[28rem] w-[28rem] rounded-full border border-teal-200  flex justify-center items-center relative">
      <div className="relative h-72 w-72 bg-green-100 rounded-full border border-none"></div>  
       
          <img src={dealSofa} className='absolute top-18 left-32'></img>
          <div className='absolute left-24 top-25 h-16 w-16 bg-gray-800 rounded-full  text-white text-xs flex text-center items-center'>ONLY Rs.2499/-</div>   
       
      </div>    
      

    <div className='flex flex-col space-y-6' >
        {/* for deals second div */}
    <div className="text-4xl text-center">Deal of the day</div>
    <div className='font-semibold text-center'>Plain Cotton Jersey Fitted Sofa Cover In Grey Color</div>
    <div className='flex justify-between text-gray-500 text-3xl gap-4 flex-wrap'>
      <div>0 DAYS :</div>
      <div>0 HOURS :</div>
      <div>0 MINUTES :</div>
       <div>0 SECONDS </div>
    </div>
    <button type="button" className="bg-orange-500 rounded-full w-1/4 h-12 self-center">BUY NOW</button>
    </div>
    </div>
  )
}

export default DayDeals