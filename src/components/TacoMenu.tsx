import { getImageUrl } from "../helpers/strings";
import WavySection from "./WavySection";

const TacoMenu = () => {
  return (
    <section className="min-h-[1000px]  ">
      <WavySection bgColor="orange" top={true} bottom={false}></WavySection>

      <div className=" bg-orange">
        <h2 className="md:heading-md text-center text-heading-sm text-almost-white lg:text-heading-lg">
          Tacos
        </h2>
        <div className="m-auto flex w-full max-w-screen-lg flex-col p-5 md:flex-row md:gap-5  ">
          <div className="mbl:w-2/3 mbl:m-auto md:w-full">
            <div className="">
              <img
                src={getImageUrl("taco-spicy-sizzle.png")}
                alt="White Vaca Caliente Logo"
              />
            </div>
            <div className="rounded-md bg-white p-5">
              <h3 className="md:text-2rem mb-5  text-center text-heading-sm  ">
                Taco Delight
              </h3>
              <p className="md:paragraph-md  text-paragraph-sm  ">
                Savor the Taco Delight – a perfect blend of seasoned goodness
                and zesty toppings.
              </p>
            </div>
          </div>

          <div className="Mbl:w-2/3 Mbl:m-auto md:w-full">
            <div className="">
              <img
                src={getImageUrl("taco-spicy-sizzle.png")}
                alt="White Vaca Caliente Logo"
              />
            </div>
            <div className="rounded-md bg-white p-5">
              <h3 className="md:text-2rem mb-5  text-center text-heading-sm  ">
                Taco Delight
              </h3>
              <p className="md:paragraph-md  text-paragraph-sm  ">
                Savor the Taco Delight – a perfect blend of seasoned goodness
                and zesty toppings.
              </p>
            </div>
          </div>

          <div className="Mbl:w-2/3 Mbl:m-auto md:w-full">
            <div className="">
              <img
                src={getImageUrl("taco-spicy-sizzle.png")}
                alt="White Vaca Caliente Logo"
              />
            </div>
            <div className="rounded-md bg-white p-5">
              <h3 className="md:text-2rem mb-5  text-center text-heading-sm  ">
                Taco Delight
              </h3>
              <p className="md:paragraph-md  text-paragraph-sm  ">
                Savor the Taco Delight – a perfect blend of seasoned goodness
                and zesty toppings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    //  "paragraph-sm": "1.1rem",
    // "paragraph-md": "1.15rem",
    // "paragraph-lg": "1.25rem",
    // "heading-sm": "3rem",
    // "heading-md": "4rem",
    // "heading-lg": "4.5rem",
  );
};

export default TacoMenu;
