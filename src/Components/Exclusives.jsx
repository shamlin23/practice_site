import bed from '../assets/bed.jpg'
import cusion from '../assets/cus.jpg'
import chair from '../assets/chair.png'
import sofa from '../assets/sofa.png'

function Exclusives(){
    return(
        <div className="flex flex-col items-center mt-12">
           <div className='text-4xl font-normal mt-12 mb-20 '>Exclusives For You</div>
           <div className="flex flex-wrap w-full relative">
            {/* //ask doubt-common p-2, */}
                <img src={bed} className='brightness-50 w-1/2 h-96 p-2 '></img>
                <div className='text-white font-semibold text-3xl  absolute top-40 left-64'>BEDDING</div>
                <img src={cusion} className='brightness-50 w-1/2 h-96 p-2'></img>
                {/* <div className='text-white absolute top-20 left-64'>CUSION</div> */}
                <img src={chair} className='brightness-50 w-1/2 h-96 p-2'></img>
                {/* <div className='text-white absolute top-20 left-64'>CHAIR COVERING</div> */}
                <img src={sofa} className='brightness-50 w-1/2 h-96 p-2'></img>
                {/* <div className='text-white absolute top-20 left-64'>SOFA</div> */}
           </div>
           
        </div>
    )
}

export default Exclusives