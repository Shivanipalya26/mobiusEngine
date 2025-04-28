import { steps } from "../../config/work";

const HowWeWork = () => {
  return (
    <section className="bg-white py-16">
      <div className="container text-left">
        <h2 className="text-h2 font-dmSans text-primary mb-12 px-24">
          How we work?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-left pl-24">
              <div className="w-16 h-16 border-2 border-darkblue rounded-full flex items-center justify-center text-h4 font-dmSans text-black mb-4">
                {step.number}
              </div>

              <div className="w-40 h-0.5 bg-[#9A42F5] mb-4" />

              <p className="text-primary text-p1 font-dmSans">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
