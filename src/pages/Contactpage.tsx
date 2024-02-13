import { FaMapPin, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contactpage = () => {
  return (
    <main className="flex h-screen flex-col items-center">
      <div className="flex flex-col items-center">
        <h1>Where are we?</h1>
        <p className="mb-8 mt-8 w-3/4 text-xs">
          We find ourselves in the midst of Stockholm's hustle and bustle, where
          the beautiful bridges intersect and where meatballs meet tacos!
          Welcome to "Vaca Caliente" - the Mexican hotspot in the heart of
          Sweden's capital!🌮🎉
        </p>
        <h1>Kartan här</h1>
      </div>
      <div className="flex h-1/3 w-full flex-wrap pt-4">
        <div className="flex flex-grow flex-col items-center bg-dark-green">
          <h4 className="mt-8 text-xl text-almost-white">Contact us</h4>
          <div className="mt-4 flex">
            <FaMapPin className="mr-1 text-almost-white" />
            <p className="text-sm text-almost-white">Mexikanska gatan 1</p>
          </div>
          <p className="text-sm text-almost-white">723 52 Stockholm</p>
          <div className="mt-3 flex">
            <FaPhoneAlt className="mr-1 text-almost-white" />
            <p className="text-sm text-almost-white">+46 123 46 78 90</p>
          </div>
          <div className="mb-5 mt-3 flex flex-row">
            <FaEnvelope className="mr-1 text-almost-white" />
            <p className="text-sm text-almost-white">info.vacacaliente.se</p>
          </div>
        </div>
        <div className="flex flex-grow flex-col items-center bg-dark-green-variant">
          <h4 className="mt-6 text-xl text-pale-yellow">Working hours</h4>
          <p className="mt-1 text-sm text-pale-yellow">Mon 18:00 - 00:00</p>
          <p className="mt-1 text-sm text-pale-yellow">Tue 18:00 - 00:00</p>
          <p className="mt-1 text-sm text-pale-yellow">Wed 18:00 - 00:00</p>
          <p className="mt-1 text-sm text-pale-yellow">Thu 18:00 - 00:00</p>
          <p className="mt-1 text-sm text-pale-yellow">Fri 18:00 - 00:00</p>
          <p className="mt-1 text-sm text-pale-yellow">Sat 18:00 - 00:00</p>
          <p className="mb-3 mt-1 text-sm text-pale-yellow">
            Sun 18:00 - 00:00
          </p>
        </div>
      </div>
    </main>
  );
};

export default Contactpage;
