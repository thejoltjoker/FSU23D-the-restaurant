import { getImageUrl } from "../../helpers/strings";
import WavySection from "../WavySection";

const BookingHeroImg = () => {
  return (
    <>
      <div className="-mt-wave">
        <WavySection bgColor={"pale-yellow"} bottom={true} waveIdBottom={9} />
      </div>
      <div className="-mb-wave -mt-wave flex h-booking-hero items-center overflow-hidden">
        <img
          className="w-full object-cover"
          src={getImageUrl("inside-resturant.png")}
          alt="Inside Vaca Caliente's beutiful atmosphere"
        />
      </div>
    </>
  );
};

export default BookingHeroImg;
