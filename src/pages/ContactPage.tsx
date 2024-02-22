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
      <div className="relative z-30 -mb-wave">
        <WavySection
          bgColor="pale-yellow"
          waveIdTop={4}
          waveIdBottom={5}
          top={false}
          bottom={true}
        >
          <div className="mx-auto max-w-screen-lg items-center pt-wave">
            <h2 className="text-4xl sm:text-7xl">Where are we?</h2>
            <p className="mb-8 mt-8 w-3/4 text-xl">
              We find ourselves in the midst of Stockholm's hustle and bustle,
              where the beautiful bridges intersect and where meatballs meet
              tacos! Welcome to "Vaca Caliente" - the Mexican hotspot in the
              heart of Sweden's capital!🌮🎉
            </p>
          </div>
        </WavySection>
      </div>

      <div id="map" className="h-map relative z-0 w-full"></div>
      <div className="-m-wave mx-auto flex flex-col">
        <WavySection
          bgColor="dark-green"
          waveIdTop={7}
          waveIdBottom={2}
          top={true}
          bottom={false}
        >
          <div className="paragraph-text-size mx-auto flex max-w-screen-lg py-sm pb-xl  text-almost-white">
            <div className="flex shrink grow flex-col items-center">
              <h2 className="my-sm text-4xl lg:text-5xl">Contact us</h2>
              <div className="flex flex-col gap-sm">
                <div className="flex gap-xs">
                  <FaMapPin className="mt-1" />
                  <p className="paragraph-text-size">
                    Mexikanska gatan 1 <br />
                    723 52 Stockholm
                  </p>
                </div>
                <div className="flex items-center gap-xs">
                  <FaPhoneAlt />
                  <p className="paragraph-text-size">+46 123 46 78 90</p>
                </div>
                <div className="flex items-center gap-xs">
                  <FaEnvelope />
                  <p className="paragraph-text-size">info.vacacaliente.se</p>
                </div>
              </div>
            </div>
            <div className="paragraph-text-size flex shrink grow flex-col items-center text-almost-white">
              <h2 className="my-sm text-4xl lg:text-5xl">Working hours</h2>
              <table className=" mb-xl">
                <tbody>
                  <tr className="mt-1">
                    <td className="pr-sm">Mon</td>
                    <td className="text-pale-yellow">18:00 - 00:00</td>
                  </tr>
                  <tr className="mt-1">
                    <td>Tue</td>
                    <td className="text-pale-yellow">18:00 - 00:00</td>
                  </tr>
                  <tr className="mt-1">
                    <td>Wed</td>
                    <td className="text-pale-yellow">18:00 - 00:00</td>
                  </tr>
                  <tr className="mt-1">
                    <td>Thu</td>
                    <td className="text-pale-yellow">18:00 - 00:00</td>
                  </tr>
                  <tr className="mt-1">
                    <td>Fri</td>
                    <td className="text-pale-yellow">18:00 - 00:00</td>
                  </tr>
                  <tr className="mt-1">
                    <td>Sat</td>
                    <td className="text-pale-yellow">18:00 - 00:00</td>
                  </tr>
                  <tr className="mt-1">
                    <td>Sun</td>
                    <td className="text-pale-yellow">18:00 - 00:00</td>
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
