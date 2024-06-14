import ButtonGradient from "./assets/svg/ButtonGradient";
import Hero from "./components/hero";

import Header from "./components/header";
import Benefits from "./components/benefits";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
