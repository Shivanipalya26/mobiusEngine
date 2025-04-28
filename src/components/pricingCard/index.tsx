import { ArrowRight } from "lucide-react";
import React from "react";

interface PricingCardProps {
  title: string;
  subheading?: string;
  price: string;
  features: string[];
  buttonLabel: string;
  isPopular?: boolean;
  width?: string;
  height?: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  subheading,
  price,
  features,
  buttonLabel,
  isPopular = false,
  width = "auto",
  height = "auto",
}) => {
  return (
    <div
      className="rounded-3xl p-6 flex flex-col gap-4 border-primary border-2 bg-white hover:shadow-lg transition"
      style={{ width, height }}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-h4 font-bold text-primary">{title}</h3>
        {isPopular && (
          <div className="text-xs text-blue-600 bg-blue-200 border-blue-700 border px-3 py-1 rounded-full">
            Popular
          </div>
        )}
      </div>

      <p className="text-primary font-dmSans pr-12 mb-4">{subheading}</p>

      <p className="text-3xl font-bold text-primary">
        <div className="flex items-end">
          <div className="font-dmSans font-bold text-[56px]">{price}</div>
          <span className="text-base font-normal ">one time</span>
        </div>
        <hr className="border-t border-gray-300 my-8 w-[328px]" />
      </p>
      <ul className="flex flex-col gap-2 text-p2 text-primary w-[374px]">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <span className="text-primary text-lg">✔️</span>
            {feature}
          </li>
        ))}
      </ul>
      <button className="w-[50%] mt-auto bg-primary text-white py-2 rounded-button text-p2 hover:bg-darkblue transition gap-2 flex justify-center">
        {buttonLabel}
        <ArrowRight />
      </button>
    </div>
  );
};

export default PricingCard;
