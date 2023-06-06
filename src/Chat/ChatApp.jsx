import React, { useState } from "react";

const ChatApp = () => {
  const [chatBoxes, setChatBoxes] = useState([]);

  const addChatBox = () => {
    const newChatBoxes = [...chatBoxes, {}];
    setChatBoxes(newChatBoxes);
  };

  return (
    <div>
      <button onClick={addChatBox}>Add Chat Box</button>
      {chatBoxes.map((chatBox, index) => (
        <div key={index} className="chat-box">
          Chat Box {index + 1}
        </div>
      ))}
    </div>
  );
};

export default ChatApp;
