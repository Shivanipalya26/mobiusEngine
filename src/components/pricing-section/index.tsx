import { ArrowRight } from "lucide-react";
import PricingCard from "../../components/pricingCard";

const PricingSection = () => {
  return (
    <section id="plans" className="py-20 bg-white">
      <div className="container">
        <h2 className="text-h2 pl-24 mb-12 font-dmSans font-semibold text-primary">
          Job Application Service Plans
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mb-12 px-24">
          <PricingCard
            title="April Promo"
            price="$35"
            features={[
              "Customized from live listings",
              "Apply to 10+ human-vetted roles",
              "Not just easy apply jobs!",
              "Job research & dedicated application",
              "Personalized emails",
              "Pay per click",
              "Approval intake",
            ]}
            buttonLabel="Get Started"
            width="398px"
            height="682px"
          />
          <PricingCard
            title="Starter"
            price="$50"
            features={[
              "All April Promo benefits",
              "Personalized story-focused resumes",
              "Dedicated support specialist",
              "Up to 50 job applications/week",
              "Extra apps at $4 each",
              "Fast support (within 6 hours)",
            ]}
            buttonLabel="Get Started"
            isPopular
            width="398px"
            height="682px"
          />
          <PricingCard
            title="Plus"
            price="$100"
            features={[
              "Starter benefits plus more reach",
              "Apply to 100+ listings",
              "Access to AI/application experts",
              "Priority support",
            ]}
            buttonLabel="Get Started"
            width="398px"
            height="682px"
          />
        </div>

        <div className="mx-auto border rounded-3xl bg-primary text-white p-8 text-center w-[1296px] h-[324px]">
          <div className="flex justify-between">
            <div>
              <h3 className="text-h3 text-left">Advance</h3>
              <p className="text-p1 ">
                Top-tier support for serious job hunters:
              </p>
            </div>

            <p className="text-3xl font-bold mb-2">
              $150<span className="text-lg font-normal">/week</span>
            </p>
          </div>

          <hr className="border-gray-400 my-6 w-[391.5px] " />

          <div className="flex justify-between items-end text-left">
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2 mb-6 ">
              <li>✅ Everything in Plus</li>
              <li>✅ Custom Resumes + Cover Letters</li>
              <li>✅ 2-3x customized applications/week</li>
              <li>✅ Help with complex job searches</li>
              <li className="col-span-2">
                ✅ Access to senior executive resume experts
              </li>{" "}
            </ul>

            <button className="bg-white text-primary py-3 px-6 rounded-button font-semibold hover:bg-darkblue hover:text-white transition flex">
              Get Started <ArrowRight />
            </button>
          </div>
        </div>

        <hr className="border-t border-gray-300 my-16 w-[1292px] mx-auto" />

        <div className="pl-24 my-16">
          <h2 className="text-h2 font-dmSans font-semibold text-primary">
            Resume Building & Coaching
          </h2>
          <p className="text-p1 text-primary mt-2">
            Let's talk about where you're headed — and how your resume can get
            you there.{" "}
            <span className="block">Schedule a call to get started.</span>
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-12">
          <PricingCard
            title="Resume Rebuild"
            subheading="Crafted for senior to VP-level professionals ready for their next big step."
            price="$1000"
            features={[
              "3× 30-min coaching",
              "Focused on storytelling, not just formatting",
              "Analyst + full application team on Pacific hours",
              "Tailored to your target industry, company, or role",
              "Direct work with our co-founder (ex-Google, JP Morgan)",
              "Executive coaching from UC Berkeley alum with 10+ yrs experience",
              "Resume Rebuild portfolio available upon request",
            ]}
            buttonLabel="Get Started"
            width="450px"
            height="826px"
          />
          <PricingCard
            title="Interview Prep"
            subheading="Two sessions to sharpen your story, confidence, and clarity — fast."
            price="$500"
            features={[
              "2× 45-min live coaching with our co-founder",
              "Real-time, practical feedback",
              "Build clarity, empathy & executive presence",
              "For senior and leadership roles — technical & non-technical",
            ]}
            buttonLabel="Get Started"
            width="450px"
            height="826px"
          />
        </div>

        <div className="bg-primary text-white rounded-2xl p-8 flex items-center justify-between mt-16 w-[1408px] h-[354px]">
          <p className="font-dmSans font-medium text-[40px]">
            STILL HAVE <span className="block">DOUBTS?</span>
          </p>
          <h3 className="text-[80px] font-dmSans font-semibold">Contact us</h3>
          <button className="bg-white text-primary rounded-full p-4 w-[110px] h-[110px] flex justify-center items-center hover:bg-darkblue hover:text-white">
            <ArrowRight className="w-[45px] h-[60px]" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
