import AdminBookings from "../components/AdminBookings";
import AdminCustomers from "../components/AdminCustomers";

const Adminpage = () => {
  return (
    <main>
      <div>
        <div className="mb-10 flex justify-center">
          <h1>Management</h1>
        </div>
        <AdminBookings />
        <AdminCustomers />
      </div>
    </main>
  );
};

export default Adminpage;
