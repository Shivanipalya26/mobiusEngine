import { ArrowUpRight } from "lucide-react";
import React from "react";

interface TestimonialCardProps {
  description: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ description }) => {
  return (
    <div className="w-[396px] h-[450px] rounded-3xl border-2 border-primary bg-primary overflow-hidden flex flex-col hover:shadow-lg transition">
      <div className="flex-1 bg-white flex items-center justify-center rounded-b-3xl">
        <div className="w-10 h-10 bg-primary  rounded-full flex items-center justify-center text-white">
          ▶
        </div>
      </div>

      <div className="bg-primary text-white text-p2 p-6 relative flex flex-col justify-between h-[187px]">
        <p className="text-sm leading-relaxed">{description}</p>
        <button className="absolute bottom-4 right-4 bg-white text-primary rounded-full p-2 hover:bg-darkblue hover:text-white">
          <ArrowUpRight />
        </button>
      </div>
    </div>
  );
};

export default TestimonialCard;
