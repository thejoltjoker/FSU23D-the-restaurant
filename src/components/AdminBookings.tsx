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
            <div
              className="mt-5 flex justify-between rounded-xl bg-almost-white p-3"
              shadow-lg
            >
              <div>
                <p className="text-sm text-dark-red">Booking: </p>
                <p className="text-sm text-dark-red">Guests: </p>
                <p className="text-sm text-dark-red">Date: </p>
                <p className="text-sm text-dark-red">Time: </p>
              </div>
              <div className="flex flex-col justify-around">
                <button
                  onClick={HandleChangeBooking}
                  className="rounded-full bg-vivid-orange px-4 py-1 text-white "
                >
                  Change booking
                </button>
                <button
                  onClick={HandleCancelBooking}
                  className="rounded-full bg-dark-red px-4 py-1 text-white drop-shadow-xl"
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
