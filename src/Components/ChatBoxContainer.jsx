import { useState } from "react";
import ChatBox from "./ChatBox";

function ChatBoxContainer() {
  const [chatBoxes, setChatBoxes] = useState([]);

  const handleAddChatBox = () => {
    const title = `Chat Box ${chatBoxes.length + 1}`;
    const sender = `User ${chatBoxes.length + 1}`;
    const chatBox = (
      <ChatBox
        key={chatBoxes.length}
        title={title}
        sender={sender}
        onClose={() => handleRemoveChatBox(chatBoxes.length)}
        onMessageSent={(message) =>
          handleChatBoxMessageSent(chatBoxes.length, message)
        }
      />
    );
    setChatBoxes([...chatBoxes, chatBox]);
  };

  const handleRemoveChatBox = (index) => {
    const removeBox = chatBoxes.filter((_, ind) => {
      return ind !== index;
    });
    setChatBoxes(removeBox);
  };

  const handleChatBoxMessageSent = (index, message) => {
    const newChatBoxes = [...chatBoxes];
    newChatBoxes.forEach((chatBox, i) => {
      if (i !== index) {
        chatBox.props.onMessageSent(message);
      }
    });
    setChatBoxes(newChatBoxes);
  };

  return (
    <div className="">
      <div className="chat-box-container ">
        <button
          className=" bg-green-400 p-2 text-white m-2 rounded-lg font-semibold"
          onClick={handleAddChatBox}
        >
          Add Chat Box
        </button>
        {chatBoxes.map((chatBox, index) => {
          return (
            <div className=" border flex flex-col" key={index}>
              <button
                className=" text-white w-8 absolute right-1 mt-1 bg-red-500 px-2 font-bold "
                onClick={() => handleRemoveChatBox(index)}
              >
                X
              </button>
              <div>{chatBox}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default ChatBoxContainer;
