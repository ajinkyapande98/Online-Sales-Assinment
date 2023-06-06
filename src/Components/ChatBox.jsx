import { useState } from "react";
import Shift from "../assets/Shift.svg";

function ChatBox(props) {
  const [currentMessage, setCurrentMessages] = useState("");
  const [messages, setMessages] = useState([]);
  const [shiftUser, setShiftUser] = useState(false);

  const handleSendMessages = (e) => {
    setCurrentMessages(e.target.value);
  };

  const sendMessage = () => {
    const newMessage = {
      message: currentMessage,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      shiftUser: shiftUser,
    };
    setMessages([...messages, newMessage]);
    setCurrentMessages("");
  };

  return (
    <div className=" border-2 border-black relative">
      <div className=" border-b-2  ">
        <h3 className="text-center text-xl font-bold">{props.title}</h3>

        <button
          className=" flex border-green-400 border-2 p-2 rounded-lg absolute top-0 bg-white"
          onClick={() => setShiftUser(!shiftUser)}
        >
          <img className=" h-6" src={Shift} alt="" />
          <p>Shift User</p>
        </button>
      </div>
      <div className="chat-box-messages mt-5 ">
        {messages.map((content, index) => (
          <div
            key={index}
            className={`flex ${
              content.shiftUser ? " justify-start" : "justify-end"
            }   px-3 `}
          >
            <div
              className={`${
                content.shiftUser ? " bg-yellow-500" : "bg-green-500"
              }  px-3 py-1 m-1 rounded-lg text-white font-medium`}
            >
              <h1 className="">{content.message}</h1>
              <p style={{ fontSize: "9px" }} className="">
                {content.time}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <textarea
          className=" border-2 rounded-md w-full "
          name="message"
          placeholder="Messages..."
          value={currentMessage}
          onChange={(e) => handleSendMessages(e)}
        />
        <button
          className=" bg-blue-600 text-white font-bold p-2 rounded-md w-20 ml-1"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
}
export default ChatBox;
