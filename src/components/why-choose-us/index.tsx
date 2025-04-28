import Hands from "../../assets/hand.png";
import Person from "../../assets/person.png";
import Star from "../../assets/star.png";

const points = [
  {
    title: "Tried, Tested, Trusted",
    description:
      "Built by folks with 40+ years in tech and hiring — we know the game, and we've got your back.",
    icon: Hands,
  },
  {
    title: "Real People, Real Help",
    description:
      "A hands-on team that actually cares — guiding you through every twist in your career path.",
    icon: Person,
  },
  {
    title: "Beat the Line",
    description:
      "We search, shortlist, and apply for you, so your name shows up first — every single day.",
    icon: Star,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-[#f9fafe] py-16  mx-[270px] rounded-2xl">
      <div className="max-w-7xl mx-auto ">
        <h2 className="text-h2 mb-12 text-darkblue font-dmSans font-medium">
          Why Choose Us?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {points.map((point, idx) => (
            <div
              key={idx}
              className="border p-6 bg-white hover:shadow-lg transition flex flex-col justify-evenly w-[359px] h-[316px] border-darkblue rounded-3xl"
            >
              <img
                src={point.icon}
                alt={point.title}
                className="w-[65px] h-[56px] mb-4"
              />
              <h3 className="text-lg font-dmSans font-semibold mb-2 text-darkblue">
                {point.title}
              </h3>
              <p className="text-sm text-gray-600">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
