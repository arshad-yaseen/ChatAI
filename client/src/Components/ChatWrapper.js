import React from 'react'

function ChatWrapper() {



  return (
        <div className="chat-wrapper hidden"> 
        <div id='chat_main_wrapper' className='chat-main-wrapper flex items-center justify-center lg:mt-6  w-full lg:h-[550px] overflow-scroll pb-44   lg:pt-8 pt-16 ' >
            <div id='chat-container' className=" flex flex-col  items-center lg:w-[60%] w-[70%] h-full relative">
                  
                {/* <div className="w-full relative rounded-lg my-2 bg-slate-100  flex items-center py-4 px-6 lg:ml-0 ml-8">
                <div className="w-10 h-10  text-black  flex items-center justify-center rounded-lg absolute top-0 -left-12 text-2xl "><ion-icon name="person"></ion-icon></div>
                    <span className="user-query">How to make a biriyani</span>
                </div> */}
 
                {/* <div className="bot-response-wrapper w-full relative my-4  rounded-lg bg-slate-100  py-4 px-6 lg:ml-0 ml-8">
                <div className="w-10 h-10 bg-white   flex items-center justify-center rounded-lg absolute top-0 -left-12 text-2xl "><img src="https://i.postimg.cc/Dw6q0rG0/logo.png" height='50px' /></div>
                <span id='chatbot-element'></span><span id='caret' className='caret text-xs bg-slate-300 text-slate-300' >m</span>
                </div> */}



            </div>
        </div>
        </div>
  )
}

export default ChatWrapper