import "tailwindcss/components.css";
import WavySection from "./WavySection";

const AdminCustomers = () => {
  return (
    <>
      <div className="-mt-wave">
        <WavySection bgColor="dark-red" top={true} bottom={true}>
          <div className=" ml-10 mr-10 bg-dark-red">
            <h1 className="mb-4 text-almost-white">Customers</h1>
            <p className="w-2/5 text-sm text-almost-white">
              Savor Mexico's finest in every taco bite at Vaca Caliente – a
              burst of flavor in every taco, a fiesta on your palate!
            </p>

            <div className="form-with-orange-variant-shadow">
              <div>
                <p className="text-sm text-dark-red">Customer: </p>
                <p className="text-sm text-dark-red">Name: </p>
                <p className="text-sm text-dark-red">Email: </p>
                <p className="text-sm text-dark-red">Phone: </p>
              </div>
              <div className="flex flex-col justify-around">
                <button className="btn-vivid-orange">Update customer</button>
              </div>
            </div>
          </div>
        </WavySection>
      </div>
    </>
  );
};

export default AdminCustomers;
