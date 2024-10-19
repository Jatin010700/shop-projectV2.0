"use client";
import {UserState} from "@/app/atoms/userState";
import axios from "axios";
import { Modal } from "flowbite-react";
import { useState } from "react";
import { useRecoilValue } from "recoil";

export const HelpBot: React.FC = () => {
    const [openModal, setOpenModal] = useState(false);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState<{ text: string; isBot: boolean }[]>([]);
    const { isLoggedIn, userName } = useRecoilValue(UserState);
    
    const handleMessageSend = async () => {
      if (!input.trim()) return;
  
      try {
        const response = await axios.post("/api/chat", { message: input });
        const data = response.data;
  
        setMessages([
          ...messages,
          { text: `${userName} : ${input}`, isBot: false },
          { text: `Help Bot : ${data}`, isBot: true },
        ]);
        setInput("");
      } catch (error) {
        console.error("Error sending message:", error);
      }
    };
  
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        handleMessageSend();
      }
    };
  
    return (
      <>
        {isLoggedIn === true ? (
          <>
            <i
              onClick={() => setOpenModal(true)}
              className="bi bi-chat-square-text-fill z-50 text-RED text-4xl fixed bottom-6 right-7"
            ></i>
            <Modal
              position="bottom-right"
              show={openModal}
              size="sm"
              onClose={() => setOpenModal(false)}
            >
              <div className="text-dark flex justify-between items-center px-6 pt-6">
                <h1 className="text-2xl font-bold">Help Bot</h1>
                <button
                  onClick={() => setOpenModal(false)}
                  className="border-none"
                >
                  <i className="bi bi-x-circle-fill text-2xl hover:text-RED scale-105 duration-150"></i>
                </button>
              </div>
              <div>
                <div className="h-80 overflow-auto">
                  {messages.map((message, index) => (
                    <p
                      key={index}
                      className={`text-dark m-2 p-2 !ml-4
                      ${
                        message.isBot
                          ? "font-bold bg-RED text-white rounded-xl"
                          : "font-bold"
                      }`}
                      dangerouslySetInnerHTML={{ __html: message.text.replace(/<a /g, '<a style="text-decoration: underline;" ') }}
                      
                    />
                  ))}
                </div>
                <div className="flex items-end">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message..."
                    onKeyDown={handleKeyPress}
                    className="text-dark relative w-11/12 rounded-bl-3xl !ring-0 !border-none"
                  />
                  <button onClick={handleMessageSend} className="text-RED">
                    <i className="bi bi-send-fill absolute bottom-56 right-10 md:bottom-7 md:right-8 text-2xl"></i>
                  </button>
                </div>
              </div>
            </Modal>
          </>
        ) : (
          false
        )}
      </>
    );
  };
  