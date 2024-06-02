import sofa from '../assets/hp20-01.png'

function Hero() {
  return (
    <div className="bg-[#fcf5f2] h-1/4 flex items-center flex-col relative">
        <div className="text-3xl font-sans mt-10">
            Tranform Your Furniture <br></br>with  <span className="font-bold">The New Covers </span>
       </div>
       <div className="mt-4 text-xs bg-orange-500 rounded-full p-2 px-4 font-bold text-white">GET 50% OFF NOW</div>
       <div className='absolute top-48 right-4 self-end mr-80 bg-emerald-600 flex flex-col justify-center items-center rounded-full w-20 h-20 p-6 font-bold text-white text-xs'><div>50% </div><div>OFF</div></div>
    <img src={sofa} className='h-auto w-3/5'></img>
       
    </div>
  )
}

export default Hero