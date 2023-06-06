// Chat.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../Redux/Store";

const Chat = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.chat.messages);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      dispatch(addMessage(newMessage));
      setNewMessage("");
    }
  };

  return (
    <div className="bg-gray-100 p-4" style={{ height: "100vh" }}>
      <div className="space-y-2 fixed right-5">
        {messages.map((message, index) => (
          <div key={index} className="p-3 bg-white rounded ">
            {message}
          </div>
        ))}
      </div>
      <div
        style={{ width: "98%", left: "1%" }}
        className="flex mt-4 fixed bottom-4"
      >
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="w-full p-2 rounded-xl border border-gray-300 focus:outline-none"
        />
        <button
          onClick={handleSendMessage}
          className="px-4 py-2 bg-blue-500 text-white rounded-r-xl hover:bg-blue-600 focus:outline-none -left-2 relative"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
