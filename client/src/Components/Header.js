import React from "react";

function Header() {
  return (
    <div className="w-full h-16 flex items-center lg:pl-32 pl-6 pt-14 pb-6">
      <img
        src="https://i.postimg.cc/dttqWBzJ/logo-with-text.png"
        className="h-12"
        alt="ChatAI Logo"
      />
      <button onClick={()=> {

document.getElementById('chat-container').replaceChildren();
let hero = document.querySelector(".hero");
      let chatWrapper = document.querySelector(".chat-wrapper");
      hero.classList.remove("hidden");
      chatWrapper.classList.add("hidden");

      }} className="absolute lg:right-32 right-6  py-1.5 px-6 bg-white rounded-lg text-blue-500 border hover:bg-blue-500 hover:text-white border-blue-500 font-medium transition-colors flex items-center justify-center">
        <span className="flex items-center justify-center mr-1">
          <ion-icon name="add-outline"></ion-icon>
        </span>{" "}
        New chat 
      </button>
    </div>
  );
}

export default Header;
