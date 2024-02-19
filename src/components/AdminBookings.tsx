import "tailwindcss/components.css";
import Button from "./Button";
import WavySection from "./WavySection";

const AdminBookings = () => {
  const HandleChangeBooking = () => {};

  const HandleCancelBooking = () => {};

  return (
    <>
      <div className="pb-wave-2">
        <WavySection
          bgColor={"orange"}
          waveIdBottom={9}
          waveIdTop={4}
          bottom={true}
          top={true}
        >
          <div className="ml-10 mr-10 bg-orange">
            <h1 className="mb-4 text-almost-white">Bookings</h1>
            <p className="w-2/5 text-sm text-almost-white">
              Savor Mexico's finest in every taco bite at Vaca Caliente – a
              burst of flavor in every taco, a fiesta on your palate!
            </p>
            <div className="form-with-dark-red-shadow flex flex-col sm:flex-row">
              <div>
                <p className="text-sm text-dark-red">Booking: </p>
                <p className="text-sm text-dark-red">Guests: </p>
                <p className="text-sm text-dark-red">Date: </p>
                <p className="text-sm text-dark-red">Time: </p>
              </div>
              <div className="flex flex-col justify-around">
                <button
                  onClick={HandleChangeBooking}
                  className="button-vivid-orange mb-xs mt-xs"
                >
                  Change booking
                </button>
                <Button
                  bgColor="orange"
                  textColor="white"
                  onClick={HandleCancelBooking}
                >
                  Cancel booking
                </Button>
              </div>
            </div>
          </div>
        </WavySection>
      </div>
    </>
  );
};

export default AdminBookings;
