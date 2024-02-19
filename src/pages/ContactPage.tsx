import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
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

    new mapboxgl.Marker({ color: "#D7472A" })
      .setLngLat([18.0649, 59.3293])
      .addTo(map);
    return () => map.remove();
  });

  return (
    <>
      <div className="-mb-wave">
        <WavySection
          bgColor="pale-yellow"
          waveIdTop={1}
          waveIdBottom={2}
          top={false}
          bottom={true}
        >
          <div className="items-center pl-md pt-md">
            <h1 className="text-4xl sm:text-7xl">Where are we?</h1>
            <p className="mb-8 mt-8 w-3/4 text-xl">
              We find ourselves in the midst of Stockholm's hustle and bustle,
              where the beautiful bridges intersect and where meatballs meet
              tacos! Welcome to "Vaca Caliente" - the Mexican hotspot in the
              heart of Sweden's capital!🌮🎉
            </p>
          </div>
        </WavySection>
      </div>

      <div id="map" className="h-[500px] w-full"></div>
      <div className="-m-wave mx-auto flex flex-col">
        <WavySection
          bgColor="dark-green"
          waveIdTop={1}
          waveIdBottom={2}
          top={true}
          bottom={false}
        >
          <div className="flex flex-col justify-center pl-xl sm:flex-row">
            <div className="flex flex-col items-center">
              <h4 className="mt-8 text-4xl text-almost-white">Contact us</h4>
              <div className="mt-4 flex flex-col">
                <div className="flex">
                  <FaMapPin className="mr-1 text-almost-white" />
                  <p className=" text-m text-almost-white">
                    Mexikanska gatan 1
                  </p>
                </div>
                <p className="text-m text-almost-white">723 52 Stockholm</p>
              </div>
              <div className="mt-3 flex">
                <FaPhoneAlt className="mr-1 text-almost-white" />
                <p className="text-m text-almost-white">+46 123 46 78 90</p>
              </div>
              <div className="mb-5 mt-3 flex flex-row">
                <FaEnvelope className="mr-1 text-almost-white" />
                <p className="text-m text-almost-white">info.vacacaliente.se</p>
              </div>
            </div>
            <div className="flex w-full flex-grow flex-col items-center">
              <h4 className="mt-6 text-4xl text-pale-yellow-variant">
                Working hours
              </h4>
              <table className=" mb-xl">
                <tbody>
                  <tr className="mt-1  text-pale-yellow-variant">
                    <td>Mon</td>
                    <td>18:00 - 00:00</td>
                  </tr>
                  <tr className="mt-1  text-pale-yellow-variant">
                    <td>Tue</td>
                    <td>18:00 - 00:00</td>
                  </tr>
                  <tr className="mt-1  text-pale-yellow-variant">
                    <td>Wed</td>
                    <td>18:00 - 00:00</td>
                  </tr>
                  <tr className="mt-1  text-pale-yellow-variant">
                    <td>Thu</td>
                    <td>18:00 - 00:00</td>
                  </tr>
                  <tr className="mt-1  text-pale-yellow-variant">
                    <td>Fri</td>
                    <td>18:00 - 00:00</td>
                  </tr>
                  <tr className="mt-1  text-pale-yellow-variant">
                    <td>Sat</td>
                    <td>18:00 - 00:00</td>
                  </tr>
                  <tr className="mt-1  text-pale-yellow-variant">
                    <td>Sun</td>
                    <td>18:00 - 00:00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </WavySection>
      </div>
    </>
  );
};

export default Contactpage;