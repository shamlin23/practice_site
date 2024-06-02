
function DealZone() {
  return (
    <div className="flex flex-col flex-wrap items-center mt-4 ">
        <div className="text-3xl font-bold mb-12">Deal Zone</div>
        <div className="flex flex-row justify-around w-full">
            <div className="flex flex-col p-4 bg-blue-300 rounded-full w-72 h-72 justify-center items-center font-extrabold text-5xl"> <span>MIN</span><span> 50%</span><span> OFF</span></div>
            <div className="flex flex-col p-4 bg-red-100 rounded-full w-72 h-72 justify-center items-center font-extrabold text-5xl"> <span>HALF</span><span> PRICE</span><span> STORE</span></div>
            <div className="flex flex-col p-4 bg-orange-400 rounded-full w-72 h-72 justify-center items-center font-extrabold text-5xl"> <span>UNDER</span><span> RS.699</span></div>
            <div className="flex flex-col p-4 bg-green-200 rounded-full w-72 h-72 justify-center items-center font-extrabold text-5xl"> <span>MIN</span><span> RS.899</span></div>
        </div>
    </div>
  )
}

export default DealZone