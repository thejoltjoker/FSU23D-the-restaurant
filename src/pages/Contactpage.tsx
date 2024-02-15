import mapboxgl from "mapbox-gl";
import { useEffect } from "react";
import { FaEnvelope, FaMapPin, FaPhoneAlt } from "react-icons/fa";
import WavySection from "../components/WavySection";

const Contactpage = () => {
  useEffect(() => {
    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v12",
      center: [18.0649, 59.3293],
      zoom: 13,
    });

    new mapboxgl.Marker().setLngLat([18.0649, 59.3293]).addTo(map);
    return () => map.remove();
  });

  return (
    <>
      <div className="-mb-wave">
        <WavySection bgColor="pale-yellow" top={false} bottom={true}>
          <div className="flex flex-col items-center">
            <h1>Where are we?</h1>
            <p className="mb-8 mt-8 w-3/4 text-xs">
              We find ourselves in the midst of Stockholm's hustle and bustle,
              where the beautiful bridges intersect and where meatballs meet
              tacos! Welcome to "Vaca Caliente" - the Mexican hotspot in the
              heart of Sweden's capital!🌮🎉
            </p>
          </div>
        </WavySection>
      </div>

      <div id="map" className="h-[500px] w-full"></div>
      <div className="-m-wave">
        <WavySection bgColor="dark-green" top={true} bottom={false}>
          <div className="flex flex-wrap">
            <div className="flex w-full flex-col items-center bg-dark-green md:w-1/2 lg:w-1/6">
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
                <p className="text-sm text-almost-white">
                  info.vacacaliente.se
                </p>
              </div>
            </div>
            <div className="flex w-full flex-grow flex-col items-center bg-dark-green md:w-1/2 lg:w-1/6">
              <h4 className="mt-6 text-xl text-pale-yellow-variant">
                Working hours
              </h4>
              <p className="mt-1 text-sm text-pale-yellow-variant">
                Mon 18:00 - 00:00
              </p>
              <p className="mt-1 text-sm text-pale-yellow-variant">
                Tue 18:00 - 00:00
              </p>
              <p className="mt-1 text-sm text-pale-yellow-variant">
                Wed 18:00 - 00:00
              </p>
              <p className="mt-1 text-sm text-pale-yellow-variant">
                Thu 18:00 - 00:00
              </p>
              <p className="mt-1 text-sm text-pale-yellow-variant">
                Fri 18:00 - 00:00
              </p>
              <p className="mt-1 text-sm text-pale-yellow-variant">
                Sat 18:00 - 00:00
              </p>
              <p className="mb-3 mt-1 text-sm text-pale-yellow-variant">
                Sun 18:00 - 00:00
              </p>
            </div>
          </div>
        </WavySection>
      </div>
    </>
  );
};

export default Contactpage;
