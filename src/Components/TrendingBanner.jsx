

function TrendingBanner() {
  return (
    <div>
         <div className="mt-8 bg-sky-600 text-white h-48 text-5xl font-semibold flex items-center justify-center">#TOP TRENDING </div>

         {/* map n display products in one templated designed div  */}
         <div className="flex items-center flex-col mt-3">
        <div className="text-3xl font-bold">Top Category</div>
        <div className="flex pt-5 flex-wrap w-full p-2 justify-between gap-3">
            <div className="bg-blue-600 h-48 w-72 "></div>
            <div className="bg-blue-600 h-48 w-72 "></div>
            <div className="bg-blue-600 h-48 w-72 "></div>
            <div className="bg-blue-600 h-48 w-72 "></div>     

             <div className="bg-blue-600 h-48 w-72 "></div>
            <div className="bg-blue-600 h-48 w-72 "></div>
            <div className="bg-blue-600 h-48 w-72 "></div>
            <div className="bg-blue-600 h-48 w-72 "></div>   
             <div className="bg-blue-600 h-48 w-72 "></div>
            <div className="bg-blue-600 h-48 w-72 "></div>
            <div className="bg-blue-600 h-48 w-72 "></div>
            <div className="bg-blue-600 h-48 w-72 "></div>          
              
        </div>
        
    </div>
    </div>
   
  )
}

export default TrendingBanner