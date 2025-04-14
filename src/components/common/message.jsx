import React from "react";

const Message = ({ massage }) => {
  return (
    <div className="flex items-center gap-4">
      <img src={massage.img} alt="" className="size-12 rounded-full" />
      <div className="p-1 border border-bg rounded-xl">
        <p className="text-lg">{massage.message}</p>
        <span className="text-sm text-right block text-secondary">
          {massage.time}
        </span>
      </div>
    </div>
  );
};

export default Message;
