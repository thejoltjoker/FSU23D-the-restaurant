import "tailwindcss/components.css";
import WavySection from "./WavySection";

const AdminBookings = () => {
  const HandleChangeBooking = () => {};

  const HandleCancelBooking = () => {};

  return (
    <>
      <div className="-mt-wave">
        <WavySection bgColor={"orange"} top={true} bottom={true}>
          <div className="ml-10 mr-10 bg-orange">
            <h1 className="mb-4 text-almost-white">Bookings</h1>
            <p className="w-2/5 text-sm text-almost-white">
              Savor Mexico's finest in every taco bite at Vaca Caliente – a
              burst of flavor in every taco, a fiesta on your palate!
            </p>
            <div className="form-with-dark-red-shadow">
              <div>
                <p className="text-sm text-dark-red">Booking: </p>
                <p className="text-sm text-dark-red">Guests: </p>
                <p className="text-sm text-dark-red">Date: </p>
                <p className="text-sm text-dark-red">Time: </p>
              </div>
              <div className="flex flex-col justify-around">
                <button
                  onClick={HandleChangeBooking}
                  className="button-vivid-orange mb-2"
                >
                  Change booking
                </button>
                <button
                  onClick={HandleCancelBooking}
                  className="button-dark-red"
                >
                  Cancel booking
                </button>
              </div>
            </div>
          </div>
        </WavySection>
      </div>
    </>
  );
};

export default AdminBookings;
