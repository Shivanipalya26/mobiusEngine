import { ArrowRight, ArrowUpRight } from "lucide-react";
import TestimonialCard from "../../components/testimonial-card";
import WhyChooseUs from "../why-choose-us";

const TestimonialSection = () => {
  return (
    <div>
      <section id="testimonials" className="py-20 bg-white ">
        <div className="container">
          <h2 className="text-h2 font-dmSans font-medium pl-24 mb-12 text-primary">
            What our clients have to say
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-8 pl-24">
            <TestimonialCard description="Holly is a senior executive who got over 10 job interviews and an offer she accepted" />
            <TestimonialCard description="Holly is a senior executive who got over 10 job interviews and an offer she accepted" />
            <TestimonialCard description="Holly is a senior executive who got over 10 job interviews and an offer she accepted" />
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-12 mt-8">
            <button className="border border-primary text-primary px-6 py-3 rounded-full hover:bg-darkblue hover:text-white transition flex justify-center gap-1">
              More customer testimonials <ArrowUpRight />
            </button>
            <button className="bg-primary text-white px-6 py-3 rounded-full hover:bg-darkblue transition flex justify-center gap-1">
              Get Started <ArrowRight />
            </button>
          </div>
        </div>
      </section>

      <WhyChooseUs />
    </div>
  );
};

export default TestimonialSection;
