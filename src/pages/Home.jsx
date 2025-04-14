import homeImg from "@/assets/home-img.png";
import ServiceCard from "@/components/common/serviceCard";
import { services } from "@/constant";

const Home = () => {
  return (
    <div className="pb-10">
      <div className="flex items-center justify-center">
        <img src={homeImg} alt="home" />
      </div>

      <div className="container max-w-6xl px-3 mx-auto mt-36 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-20">
        {services.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Home;
