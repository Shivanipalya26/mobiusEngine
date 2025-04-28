import { ArrowUpRight } from "lucide-react";
import Ashwin from "../../assets/ashwin.png";
import Nicole from "../../assets/nicole.png";
import Linkedin from "../../assets/linkedin-white.png"

interface TeamMember {
  name: string;
  description: string;
  image: string;
  linkedin: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Ashwin",
    description:
      "Ashwin is the founder of mobiusengine.ai. He is an accomplished senior executive with over 20 years of experience in cloud infrastructure and financial services. With over 2 decades of experience at Google and JP Morgan, Ashwin held various product and GTM roles. Ashwin is an MBA holder from Yale University.\n\nAshwin's vision with Mobius is to give job seekers a significant advantage in securing the roles of their dreams.",
    image: Ashwin,
    linkedin: "https://linkedin.com/in/ashwin",
  },
  {
    name: "Nicole",
    description:
      "Nicole is an Executive coach at Mobius specializing in resume builds and career advisory.\n\nWith a B.S. in Business Administration from UC Berkeley and 7+ years of experience in AI–driven product strategy, she has seen firsthand how the proper positioning opens doors. She takes a targeted, results–driven approach to help clients confidently stand out and land roles that truly match their skills and potential.",
    image: Nicole,
    linkedin: "https://linkedin.com/in/nicole",
  },
];

const AboutUs = () => {
  return (
    <section id="about" className="bg-gradient-to-b from-[#020220] via-[#020220] to-primary py-20 min-h-screen">
      <div className="container">
        <h2 className="text-h2 font-dmSans font-medium text-white mb-20 text-left pl-24">
          About Us
        </h2>

        <div className="flex flex-col gap-20 md:gap-28">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row md:items-start md:justify-center gap-8 md:gap-16 text-left"
            >
              <div className="relative flex-shrink-0 flex justify-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 object-contain rounded-full  bg-white"
                />
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-2 right-2 backdrop-blur-md rounded-full p-3 bg-white/30"
                >
                  <img
                    src={Linkedin}
                    alt="LinkedIn"
                    className="w-6 h-6"
                  />
                </a>
              </div>

              <div className="max-w-xl text-white">
                <p className="text-p2 whitespace-pre-line">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-4">
          <a
            href="#"
            className="text-p2 font-dmSans text-white hover:text-black transition flex justify-center"
          >
            Learn more about our Board of Advisors{" "}
            <ArrowUpRight className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="text-p2 font-dmSans text-white hover:text-black transition flex justify-center "
          >
            Follow us on our LinkedIn page <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
