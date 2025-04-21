import InputFelid from "@/components/common/InputFelid";
import profile_1 from "@/assets/profile_1.png";
import profile_2 from "@/assets/profile_2.png";
import { FaMicrophone, FaPhoneAlt } from "react-icons/fa";
import { IoCameraOutline, IoVideocam } from "react-icons/io5";
import Message from "@/components/common/message";
import { HiOutlinePhoto } from "react-icons/hi2";
import { RiSendPlaneFill } from "react-icons/ri";
import activeImg from "../assets/active-img.png";
import archiveImg from "../assets/archive-img.png";

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
    <div className="container mx-auto py-10 px-3">
      <div className="flex flex-col items-center lg:flex-row gap-20 justify-between">
        <div className="flex-[2]">
          <h1 className="text-3xl font-bold mb-6">Chat</h1>
          <div>
            <input
              type="text"
              placeholder="Search..."
              name="search"
              className="w-full md:w-[500px] focus:outline-none rounded-2xl p-3 text-black bg-secondary"
            />
          </div>

          <div className="flex items-center gap-20 my-10">
            <div>
              <span className="text-lg">Active</span>
              <img
                src={activeImg}
                alt="active"
                className="w-5 h-5 ml-2 inline-block"
              />
            </div>
            <div>
              <span className="text-lg">Archives</span>
              <img
                src={archiveImg}
                alt="active"
                className="w-5 h-5 ml-2 inline-block"
              />
            </div>
          </div>

          <div className="flex flex-col gap-5 mt-5">
            {chats.map((chat, i) => (
              <div key={i} className="flex items-center gap-4 cursor-pointer">
                <img
                  src={chat.img}
                  alt="profile"
                  className="w-12 h-12 rounded-full"
                />
                <span className="text-xl font-black">{chat.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-[3] bg-[#6c5b50] rounded-t-[50px]">
          <div className="p-5">
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

          <div className="flex items-center gap-4 mt-10 bg-white p-3">
            <div className="flex items-center gap-5 text-black">
              <IoCameraOutline className="text-2xl" />
              <HiOutlinePhoto className="text-2xl" />
              <FaMicrophone className="text-2xl" />
            </div>

            <div className="flex-1 relative">
              <input
                type="text"
                name="message"
                placeholder="Type a message..."
                className="w-full focus:outline-none border border-black rounded-full p-3 text-black"
              />
              <RiSendPlaneFill className="absolute top-1/2 transform -translate-y-1/2 right-5 text-3xl text-black" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
