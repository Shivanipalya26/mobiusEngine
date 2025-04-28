import React from "react";
import EbookImage from "../../assets/ebook.png";
import Book from "../../assets/book.png";
import { ArrowDownLeft, ArrowRight } from "lucide-react";

const Home: React.FC = () => {
  return (
    <section
      id="home"
      className="w-full min-h-screen flex items-center px-8 md:px-16 py-12"
      style={{
        background: `radial-gradient(circle at top right, #0f172a 12%, transparent 36%),
        linear-gradient(135deg, 
          #d8b4fe 3%, 
          #38bdf8 25%, 
          #3b82f6 40%, 
          #0047ff 65%, 
          #1e40af 100%
        )`,
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between w-full">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-sans text-[80px] font-semibold text-white leading-tight mb-8">
            Land job interviews <br />
            <span className="text-[#0047FF]">10x </span>faster
          </h1>
          <p className="text-white font-dmSans text-[20px] text-lg md:text-xl mb-8">
            Custom-built resumes that match your goals, keywords, and recruiter
            expectations.
          </p>
          <button className="flex font-dmSans font-medium text-[21.08px] items-center bg-white text-darkblue  px-10 py-4 rounded-full hover:bg-darkblue hover:text-white transition duration-300 mx-auto md:mx-0">
            Get Started
            <span className="ml-2 text-xl">
              <ArrowRight />
            </span>
          </button>
        </div>

        <div className="flex-1 flex flex-col items-center mt-10 md:mt-0">
          <div className="relative">
            <img
              src={EbookImage}
              alt="Ebook"
              className="w-64 h-auto object-contain shadow-lg"
            />
            <a
              // href={book}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute -bottom-6 -right-20 transform -translate-x-1/2 backdrop-blur-md bg-white/10 rounded-full p-4 shadow-lg border border-white"
            >
              <img src={Book} alt="book" className="w-14 h-14" />
            </a>
            <div className="absolute -bottom-8 right-2 transform -translate-x-1/2 bg-white rounded-full p-1 shadow-md">
              <ArrowDownLeft className="w-4 h-4 text-darkblue" />
            </div>
          </div>
          <p className="text-white mt-8">Download Free E-Book</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
