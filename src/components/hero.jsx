import Section from "./section";

const Hero = () => {
  return (
    <Section
      className="pt-[12rem] -mt-[5.25]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative">
        <div className="relative z-1 max-w-[63rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb:"></div>
      </div>
    </Section>
  );
};

export default Hero;
