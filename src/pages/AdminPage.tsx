import AdminBookings from "../components/AdminBookings";
import AdminCustomers from "../components/AdminCustomers";

const Adminpage = () => {
  return (
    <main>
      <div className="mb-10 mt-10 flex justify-center">
        <h1 className="text-7xl">Management</h1>
      </div>
      <AdminBookings />
      <AdminCustomers />
    </main>
  );
};

export default Adminpage;
