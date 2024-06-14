import { benefits } from "../constants";
import Heading from "./heading";
import Section from "./section";

const Benefits = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Chat smart, not harder with brawin"
        />
        <div className="flex flex-wrap gap-10 am-10">{benefits}</div>
      </div>
    </Section>
  );
};

export default Benefits;
