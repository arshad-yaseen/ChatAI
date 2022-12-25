import React from 'react'

function Hero() {
  return (
    <div className=" hero">
        <div className='flex flex-col  items-center  w-full lg:h-[500px]  lg:pt-8 pt-16 ' >
        <h1 className='lg:text-7xl text-3xl font-extrabold text-center' >Instant answers <br /> at your fingertips.</h1>
        <div className="lg:w-[80%] w-full h-full flex lg:flex-row flex-col items-center justify-center  mt-4">

            <div className="lg:w-[33%] w-[90%] h-full flex flex-col items-center  lg:px-6">
            <span className="mt-8 text-2xl"><ion-icon name="aperture-outline"></ion-icon></span>
                <h1 className='text-2xl font-medium mb-2' >Examples</h1>

                <div onClick={(e)=> {document.getElementById("prompt_input").value = e.target.innerText;}} className="w-full h-20 border border-white hover:border-slate-300  bg-slate-50 mt-4 rounded-lg cursor-pointer flex items-center justify-center text-center px-6">Explain quantum computing in simple terms</div>

                <div onClick={(e)=> {document.getElementById("prompt_input").value = e.target.innerText;}}  className="w-full h-20 border border-white hover:border-slate-300  bg-slate-50 mt-4 rounded-lg cursor-pointer flex items-center justify-center text-center px-6">Got any creative ideas for a 10 year old's birthday?</div>

            </div>

            <div className="lg:w-[33%] w-[90%] h-full flex flex-col items-center  lg:px-6">
            <span className="mt-8 text-2xl"><ion-icon name="flash-outline"></ion-icon></span>
                <h1 className='text-2xl font-medium mb-2' >Capabilities</h1>

                <div className="w-full h-20 border border-white  bg-slate-50 mt-4 rounded-lg  flex items-center justify-center text-center px-6">Remembers what user said earlier in the conversation</div>

                <div className="w-full h-20 border border-white  bg-slate-50 mt-4 rounded-lg  flex items-center justify-center text-center px-6">Trained to decline inappropriate requests</div>

            </div>

            <div className="lg:w-[33%] w-[90%] h-full flex flex-col items-center  lg:px-6">
            <span className="mt-8 text-2xl"><ion-icon name="alert-circle-outline"></ion-icon></span>
                <h1 className='text-2xl font-medium mb-2' >Limitations</h1>

                <div className="w-full h-20 border border-white  bg-slate-50 mt-4 rounded-lg  flex items-center justify-center text-center px-6">May occasionally generate incorrect information</div>

                <div className="w-full h-20 border border-white  bg-slate-50 mt-4 rounded-lg  flex items-center justify-center text-center px-6">Limited knowledge of world and events after 2021</div>

            </div>

        </div>
    </div>
    </div>
  )
}

export default Hero