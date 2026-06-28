import AvailableTutors from "@/Components/Homepage/AvailableTutors/AvailableTutors";
import Banner from "@/Components/Homepage/Banner/Banner";
import WhyChooseUs from "@/Components/Homepage/WhyChooseUs/WhyChooseUs";
import HowItWorks from "@/Components/Homepage/HowItWorks/HowItWorks";


export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <WhyChooseUs></WhyChooseUs>
      <AvailableTutors></AvailableTutors>
      <HowItWorks></HowItWorks>
    </div>
  );
}
