import { getImageUrl } from "../../helpers/strings";

const Downloadapp = () => {
  return (
    <>
      <div className="  mb-5 flex flex-col pt-8 text-center text-pale-yellow">
        <h2 className="mb-5 text-5xl">Download Our App</h2>
        <p className="m-auto w-3/4 text-2xl md:w-2/4">
          Experience the vibrant flavors of Vaca Caliente at your fingertips by
          downloading our app
        </p>
      </div>

      <div className="flex flex-col justify-center pb-24 text-center md:flex-row">
        <img
          className="m-auto h-[400px] w-[275px] md:m-0"
          src={getImageUrl("app.png")}
          alt="Inside Vaca Caliente's beutiful atmosphere"
        />

        <div className="mb-auto mt-auto text-pale-yellow ">
          <p className="m-auto mb-3 w-48">
            Unlock a 10% discount on your next burrito adventure with us
          </p>

          <img
            className="m-auto h-[50px]"
            src={getImageUrl("app-sticker.png")}
            alt="Inside Vaca Caliente's beutiful atmosphere"
          />
        </div>
      </div>
    </>
  );
};

export default Downloadapp;
