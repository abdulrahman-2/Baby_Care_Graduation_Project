import BreastfeedingImg from "@/assets/breast-img.png";
import Button from "@/components/common/Button";
import SectionHeading from "@/components/common/SectionHeading";
import VideosList from "@/components/layout/VideosList";
import { breastVideos } from "@/constant";

const Breastfeeding = () => {
  return (
    <div>
      <img
        src={BreastfeedingImg}
        alt="Breastfeeding"
        className="w-full md:h-[calc(100vh-70px)] h-[300px] object-cover"
      />

      <SectionHeading
        title="benefits of breastfeeding:"
        description="complete nutrition provides all essential nutrients needed.  boosts immunity helps protect the baby from illnesses. emotional bonding strengthens the connection between mother and baby."
      />

      <VideosList videos={breastVideos} />

      <div className="flex justify-center items-center">
        <Button name={"More"} className="my-10 px-20" />
      </div>
    </div>
  );
};

export default Breastfeeding;
