import React, { useEffect } from "react";
import axios from "axios";

function ChatSendWrapper() {
  useEffect(() => {
    document.querySelector("form").onsubmit = (e) => {
      e.preventDefault();
      let hero = document.querySelector(".hero");
      let chatWrapper = document.querySelector(".chat-wrapper");
      hero.classList.add("hidden");
      chatWrapper.classList.remove("hidden");
      let chat_main_wrapper = document.getElementById('chat_main_wrapper');
      


      let uniqueId = new Date().getTime()

      // clear the input

      // Creating user promp element and adding to chat container

      const userChat = document.createElement("div");
      userChat.className =
        "w-full relative rounded-lg my-2 bg-slate-100 flex items-center py-4 px-6 lg:ml-0 ml-8";

      const iconDiv = document.createElement("div");
      iconDiv.className =
        "w-8 h-8 text-white flex bg-indigo-500 items-center justify-center rounded-lg absolute top-0 -left-12 ";

      const icon = document.createElement("ion-icon");
      icon.setAttribute("name", "person");
      iconDiv.appendChild(icon);

      const userChatSpan = document.createElement("span");
      userChatSpan.className = "user-query";
      userChatSpan.innerText = e.target.prompt.value;

      userChat.appendChild(iconDiv);
      userChat.appendChild(userChatSpan);

      document.getElementById("chat-container").appendChild(userChat);



    //   Creating Bot Response Wrapper and add to chat wrapper
    const chatbotWrapper = document.createElement('div');
chatbotWrapper.className = 'bot-response-wrapper w-full relative my-4 rounded-lg bg-slate-100 py-4 px-6 lg:ml-0 ml-8';

const logoWrapper = document.createElement('div');
logoWrapper.className = 'w-8 h-8 bg-blue-500 flex items-center justify-center rounded-lg absolute top-0 -left-12 ';
const logoImg = document.createElement('img');
logoImg.src = 'https://i.postimg.cc/cJyMYKtp/image.png';
logoImg.height = '100px';
logoWrapper.appendChild(logoImg);

const chatbotElement = document.createElement('span');
chatbotElement.id = `chatbot-element-${uniqueId}`;

const caret = document.createElement('span');
caret.id = `caret-${uniqueId}`;
caret.className = 'caret text-xs bg-slate-300 text-slate-300';
caret.textContent = 'm';

chatbotWrapper.appendChild(logoWrapper);
chatbotWrapper.appendChild(chatbotElement);
chatbotWrapper.appendChild(caret);

document.getElementById("chat-container").appendChild(chatbotWrapper);

chat_main_wrapper.scrollTo(0, chat_main_wrapper.scrollHeight);




      axios({
        url: "https://chatai-bvh7.onrender.com",
        method: "post",
        data: { prompt: e.target.prompt.value },
      }).then((response) => {
        



        // Write Text
        let animateTextContent = response.data.bot.substring(2)
function writeText(text, element) {


    let index = 0;
    let currentText = "";  
    let interval = setInterval(function() {
      currentText += text[index];
      element.innerText = currentText;
      index++;
      if (index >= text.length) {
        document.getElementById(`caret-${uniqueId}`).style.display = 'none'
        clearInterval(interval); 
      }
      
      chat_main_wrapper.scrollTo(0, chat_main_wrapper.scrollHeight);
      
    }, 20); 


} 


const botElement = document.getElementById(`chatbot-element-${uniqueId}`);

writeText(animateTextContent, botElement);

      });



      document.getElementById("prompt_input").value = "";
    };
  }, []);

  return (
    <div id="chat_send_wrapper" className="w-full h-28 lg:py-0 py-12 bg-white shadow-xl   fixed bottom-0 z-50  flex  justify-center lg:items-start items-center">
      <form action="/generate" method="post">
        <div className="relative flex items-center ">
          <input
            autoComplete="off"
            type="text"
            name="prompt"
            id="prompt_input"
            placeholder="Ask your question..."
            className="pl-4  py-4 lg:w-[700px] w-[300px] rounded-lg outline-none border border-slate-300 shadow-lg"
          />

          <button
            type="submit"
            className="text-2xl rounded-lg hover:bg-slate-100 p-2 flex items-center justify-center absolute right-4 text-slate-500"
          >
            <ion-icon name="send"></ion-icon>
          </button>
        </div>
      </form>
    </div>
  );
}

export default ChatSendWrapper;
