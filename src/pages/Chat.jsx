import InputFelid from "@/components/common/InputFelid";
import profile_1 from "@/assets/profile_1.png";
import profile_2 from "@/assets/profile_2.png";
import { FaMicrophone, FaPhoneAlt } from "react-icons/fa";
import { IoCameraOutline, IoVideocam } from "react-icons/io5";
import Message from "@/components/common/message";
import { HiOutlinePhoto } from "react-icons/hi2";

const chats = [
  {
    name: "dr/ mohamed misbah",
    img: profile_1,
  },
  {
    name: "dr/ mohamed misbah",
    img: profile_2,
  },
  {
    name: "dr/ mohamed misbah",
    img: profile_1,
  },
  {
    name: "dr/ mohamed misbah",
    img: profile_2,
  },
  {
    name: "dr/ mohamed misbah",
    img: profile_1,
  },
];

const messages = [
  {
    img: profile_1,
    message: "Hello, how are you?",
    time: "4:30 PM",
  },
  {
    img: profile_2,
    message:
      "hello,docter.i am really worried about my baby. he has a fever and seems very fussy.  ",
    time: "4:30 PM",
  },
  {
    img: profile_1,
    message: "there is no need to worry . how hot it is?",
    time: "4:30 PM",
  },
  {
    img: profile_2,
    message: "about 38.5 degrees. should i take him to the hospital?",
    time: "4:30 PM",
  },
  {
    img: profile_1,
    message:
      "not necessarily. i if the temperature is below 39 degrees, you can give him an antipyretic. make sure he drinks enough fluids.? ",
    time: "4:30 PM",
  },
  {
    img: profile_2,
    message: "thank you so much doctor. i will do that.",
    time: "4:30 PM",
  },
];

const Chat = () => {
  return (
    <div className="py-5 px-3 lg:px-7">
      <h1 className="text-2xl font-bold">Chat</h1>
      <div className="flex flex-col lg:flex-row gap-20 justify-between mt-10">
        <div className="flex-[2]">
          <InputFelid label="Search" type="text" name="search" placeholder="Search..." />

          <div className="flex justify-between items-center mt-5">
            <span className="text-lg">Active</span>
            <span className="text-lg">Archives</span>
          </div>

          <div className="flex flex-col gap-5 mt-5">
            {chats.map((chat, i) => (
              <div key={i} className="flex items-center gap-4 cursor-pointer">
                <img
                  src={chat.img}
                  alt="profile"
                  className="w-12 h-12 rounded-full"
                />
                <span className="text-xl">{chat.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-[3] bg-[#6c5b50] rounded-t-[50px] p-5">
          <div>
            <div className="p-3 border border-secondary rounded-full flex items-center justify-between">
              <div className="flex items-center gap-4 cursor-pointer">
                <img
                  src={profile_1}
                  alt="profile"
                  className="w-9 h-9 rounded-full"
                />
                <span className="text-lg">Dr Mohamed Misbah</span>
              </div>

              <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-2xl text-primary" />
                <IoVideocam className="text-2xl text-primary" />
              </div>
            </div>
            <div className="mt-10 flex flex-col gap-5">
              {messages.map((message, i) => (
                <Message key={i} massage={message} />
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 mt-10">
            <div className="flex items-center gap-5">
              <IoCameraOutline className="text-2xl" />
              <HiOutlinePhoto className="text-2xl" />
              <FaMicrophone className="text-2xl" />
            </div>

            <div className="flex-1">
              <InputFelid
                type="text"
                name="message"
                className="w-full"
                placeholder="Type your message..."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
