const Contactpage = () => {
  return (
    <main className="flex flex-col items-center">
      <div className="flex flex-col items-center">
        <h1>Where are we?</h1>
        <p className="mt-8 w-3/4 text-xs">
          We find ourselves in the midst of Stockholm's hustle and bustle, where
          the beautiful bridges intersect and where meatballs meet tacos!
          Welcome to "Vaca Caliente" - the Mexican hotspot in the heart of
          Sweden's capital!🌮🎉
        </p>
        <h1>Kartan här</h1>
      </div>
      <div className="flex w-full">
        <div className="flex-grow bg-dark-green">
          <h4 className="text-almost-white">Contact us</h4>
          <p className="text-sm text-almost-white">Mexikanska gatan 1</p>
          <p className="text-sm text-almost-white">723 52 Stockholm</p>
          <p className="text-sm text-almost-white">+46 123 46 78 90</p>
          <p className="text-sm text-almost-white">info.vacacaliente.se</p>
        </div>
        <div className="flex-grow bg-dark-green-variant">
          <h4 className="text-pale-yellow">Working hours</h4>
        </div>
      </div>
    </main>
  );
};

export default Contactpage;
