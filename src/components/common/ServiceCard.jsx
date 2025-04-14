import { TiHeartOutline } from "react-icons/ti";

const ServiceCard = ({ service, fav }) => {
  return (
    <div className="bg-[#D9D9D9] p-1 h-auto w-[130px] flex flex-col items-center justify-center rounded-lg shadow-lg">
      <div className="relative">
        <img
          src={service.img}
          alt="service image"
          className="-translate-y-[30px]"
        />
        {fav && <TiHeartOutline className="text-bg text-xl absolute right-0 z-20" />}
      </div>

      <h3 className="text-center text-black font-semibold">{service.title}</h3>
    </div>
  );
};

export default ServiceCard;
