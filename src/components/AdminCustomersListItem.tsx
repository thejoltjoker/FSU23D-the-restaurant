import { useState } from "react";

import { ICustomer } from "../models/Customer";
import Button from "./Button";
interface IAdminCustomersListItemProps {
  customer: ICustomer;
  onEdit: (customer: ICustomer) => void;
}

const AdminCustomersListItem = (props: IAdminCustomersListItemProps) => {
  const [isEditable, setIsEditable] = useState(false);
  const [customer, setCustomer] = useState<ICustomer>(props.customer);

  const handleEditBooking = () => {
    props.onEdit(customer);
    setIsEditable(!isEditable);
  };

  return (
    <ul className="flex flex-wrap gap-xs rounded-lg bg-almost-white px-sm py-xs text-paragraph-sm">
      <li className="flex shrink grow flex-col justify-center">
        <p className="text-xs">Customer ID</p>
        <p className="text-vivid-orange">#{customer._id}</p>
      </li>
      <li className="flex shrink grow basis-full flex-col justify-center md:basis-10">
        <p className="text-xs">First name:</p>
        <input
          type="text"
          className="w-full appearance-none rounded-lg border-orange text-vivid-orange disabled:border-none disabled:bg-almost-white disabled:p-0 disabled:text-dark-red"
          value={customer.name}
          disabled={!isEditable}
          onChange={(e) =>
            setCustomer({
              ...customer,
              lastname: e.currentTarget.value,
            })
          }
        />
      </li>
      <li className="flex shrink grow basis-full flex-col justify-center md:basis-10">
        <p className="text-xs">Last name:</p>
        <input
          type="text"
          className="w-full appearance-none rounded-lg border-orange text-vivid-orange disabled:border-none disabled:bg-almost-white disabled:p-0 disabled:text-dark-red"
          value={customer.lastname}
          disabled={!isEditable}
          onChange={(e) =>
            setCustomer({
              ...customer,
              lastname: e.currentTarget.value,
            })
          }
        />
      </li>
      <li className="flex shrink grow basis-full flex-col justify-center md:basis-2">
        <p className="text-xs">Email</p>
        <input
          type="email"
          className="appearance-none rounded-lg border-orange text-vivid-orange disabled:border-none disabled:bg-almost-white disabled:p-0 disabled:text-dark-red"
          value={customer.email}
          disabled={!isEditable}
          onChange={(e) =>
            setCustomer({
              ...customer,
              email: e.currentTarget.value,
            })
          }
        />
      </li>
      <li className="flex shrink grow basis-full flex-col justify-center md:basis-2">
        <p className="text-xs">Time</p>
        <input
          type="tel"
          className="appearance-none rounded-lg border-orange text-vivid-orange disabled:border-none disabled:bg-almost-white disabled:p-0 disabled:text-dark-red"
          value={customer.phone}
          disabled={!isEditable}
          onChange={(e) =>
            setCustomer({
              ...customer,
              phone: e.currentTarget.value,
            })
          }
        />
      </li>
      <li className="flex shrink grow flex-col justify-center gap-xs py-xs md:flex-row">
        <Button
          bgColor="vivid-orange"
          textColor="white"
          onClick={
            isEditable ? () => handleEditBooking() : () => setIsEditable(true)
          }
        >
          {isEditable ? "Save changes" : "Edit customer"}
        </Button>
      </li>
    </ul>
  );
};

export default AdminCustomersListItem;
