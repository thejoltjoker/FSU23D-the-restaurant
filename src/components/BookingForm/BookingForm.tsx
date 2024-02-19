import "./BookingForm.css";
const BookingForm = () => {
  const getTimeSlots = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };
  return (
    <>
      <h3 className="text-4xl">Make a reservation</h3>
      <form className="">
        <div className="flex gap-sm">
          <div className="shrink grow basis-1/2">
            <label htmlFor="date">Date:</label>
            <input type="date" name="date" id="date" />
          </div>
          <div className="shrink grow basis-1/2">
            <label htmlFor="guests">Guests:</label>
            <input type="number" name="guests" id="guests" className="w-full" />
          </div>
        </div>

        <div className="time-slots">
          <p>Available time slots</p>
          <div className="time-slots flex gap-sm">
            <input
              type="radio"
              id="time-slot-1"
              name="time"
              value="18:00"
              className="hidden w-full"
            />
            <label htmlFor="time-slot-1">18:00</label>
            <input
              type="radio"
              id="time-slot-2"
              name="time"
              value="21:00"
              className="hidden"
            />
            <label htmlFor="time-slot-2">21:00</label>
          </div>
        </div>
      </form>
    </>
  );
};

export default BookingForm;
