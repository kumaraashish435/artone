
import BrandLogos from "../components/other/BrandLogos";
import ImageSlider from "../components/other/ImageSlider";
import AnimatedText from "../components/text/AnimatedText";

const Home = () => {
  return (
    <div className="min-h-screen">
      <AnimatedText lines={[
        "The design and product partner", 
        "for your startup, built for the" ,
        "speed and flexibility you need."
      ]}/>
      
      
      <div className=" mt-10 py-12">
        <p>Trusted by startups that raised millions and globally recognized brands</p>
      </div>
      <BrandLogos/>
      <div className="relative w-full overflow-hidden">

      <ImageSlider/>
      </div>

      <div className=" mt-10 py-12">
        <p>We take pride in our work. We don’t cut corners. We design with purpose, always keeping your vision in focus.</p>
      </div>

      <div className="">

      </div>

      
      

      
      
    </div>
  );
};

export default Home;
