import pregnancyBanner from "../assets/pregnancyBanner.svg";
import icon_1 from "../assets/icon_1.svg";
import icon_2 from "../assets/icon_2.svg";
import icon_3 from "../assets/icon_3.svg";
import icon_4 from "../assets/icon_4.svg";
import milk from "../assets/milk.svg";
import bnanana from "../assets/bnana.svg";
import fonic from "../assets/fonic.svg";
import istock from "../assets/istock.png";
import trip_1 from "../assets/trip_1.png";
import trip_2 from "../assets/trip_2.png";
import trip_3 from "../assets/trip_3.png";
import trip_4 from "../assets/trip_4.png";
import trip_5 from "../assets/trip_5.png";
import trip_6 from "../assets/trip_6.png";
import Button from "@/components/common/Button";

const foods = [
  {
    title: "2 Glass Of Pure Milk",
    description: "Healthy drink for your health",
    img: milk,
  },
  {
    title: "6 Banana Daily",
    description: "Healthy food for your health",
    img: bnanana,
  },
  {
    description: "Folic acid for pregnancy",
    img: fonic,
  },
  {
    description: "Pregnancy diet chart",
    img: istock,
  },
];

const Pregnancy = () => {
  return (
    <div>
      <div className="relative bg-gradient-to-r from-[#78B3CE] to-[#C9E6F0] md:h-[calc(100vh-70px)] h-[300px] flex flex-col items-center justify-center">
        <img src={pregnancyBanner} alt="pregnancy" aria-hidden="true" />

        <div className="absolute bottom-3 flex items-center justify-center gap-1 md:gap-3 mt-4">
          {Array.from({ length: 9 }, (_, index) => (
            <div
              key={index}
              className={`size-6 md:size-8 shadow-lg border-2 grid place-items-center font-bold rounded-full ${
                index === 6
                  ? "bg-primary text-white"
                  : "bg-[#FBF8EF] text-primary"
              }`}
            >
              {index + 1}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white py-10">
        <div className="container mx-auto px-3 my-10">
          <div>
            <h1 className="text-3xl font-bold mb-10 text-center text-primary">
              More Details
            </h1>

            <div className="max-w-xl mx-auto gap-10 bg-primary rounded-3xl p-5 shadow-lg">
              <h2 className="text-2xl font-bold text-center mb-10">month 7</h2>

              <div className="flex items-center justify-between gap-5 text-[#78B3CE]">
                <div className="bg-white rounded-3xl p-5 flex flex-col items-center justify-center gap-5">
                  <h3 className="text-xl font-semibold">Heartbeat</h3>
                  <img src={icon_1} alt="heartbeat" className="w-20" />
                  <span className="text-3xl font-bold">134</span>
                  <span>bpm</span>
                </div>

                <div className="flex flex-col gap-5">
                  <div className="bg-white rounded-3xl p-5 flex flex-col md:flex-row items-center justify-center gap-5">
                    <img src={icon_3} alt="" />
                    <div className="flex flex-col items-center justify-center gap-2">
                      <h3 className="text-xl font-semibold">Weight</h3>
                      <div className="flex items-center justify-center gap-2">
                        <span>2.79kg</span>
                        <img src={icon_2} alt="" />
                        <span>9.3%</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-3xl p-5 flex flex-col md:flex-row items-center justify-center gap-5">
                    <img src={icon_4} alt="" />
                    <div className="flex flex-col items-center justify-center gap-2">
                      <h3 className="text-xl font-semibold">Size</h3>
                      <div className="flex items-center justify-center gap-2">
                        <span>14.8 in</span>
                        <img src={icon_2} alt="" />
                        <span>11.6%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20">
            <h1 className="text-3xl font-bold mb-10 text-center text-primary">
              Healthy Food
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {foods.map((food, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-5 flex flex-col items-center justify-center gap-5"
                >
                  <div className="size-[300px] bg-[#F6F8FB] rounded-xl shadow-xl p-5 flex items-center justify-center">
                    <img src={food.img} alt="w-full" />
                  </div>

                  <h3 className="text-xl text-[#78B3CE] font-semibold text-center">
                    {food.title}
                  </h3>
                  <p className="text-center text-lg font-semibold text-[#78B3CE]">
                    {food.description && food.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20">
            <h1 className="text-3xl font-bold mb-10 text-center text-primary">
              Video Tips
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="flex flex-col items-center justify-center gap-5">
                <img src={trip_1} alt="trip" />
              </div>
              <div className="flex flex-col items-center justify-center gap-5">
                <img src={trip_2} alt="trip" />
              </div>
              <div className="flex flex-col items-center justify-center gap-5">
                <img src={trip_3} alt="trip" />
              </div>
              <div className="flex flex-col items-center justify-center gap-5">
                <img src={trip_4} alt="trip" />
              </div>
              <div className="flex flex-col items-center justify-center gap-5">
                <img src={trip_5} alt="trip" />
              </div>
              <div className="flex flex-col items-center justify-center gap-5">
                <img src={trip_6} alt="trip" />
              </div>
            </div>
          </div>

          <div className="mt-20 flex items-center justify-center">
            <Button name={"More"} className="px-20" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pregnancy;
