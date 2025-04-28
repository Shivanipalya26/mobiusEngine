import Logo from "../../assets/logo-blue.png"
import Linkedin from "../../assets/linkedin.png"
import { footerInfo } from "../../config/footer";

const socialLinks = [
  { icon: Linkedin, url: "#" },
  { icon: Linkedin, url: "#" },
];

const bottomLinks = [
  { label: "Terms & Conditions", url: "#" },
  { label: "Privacy Policy", url: "#" },
];

function Footer() {
  return (
    <footer className="bg-white pt-10">
      <div className="max-w-[85%] mx-auto flex flex-col gap-8">
        
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-2">
            <img src={Logo} alt="MobiusEngine" className="h-[86.21px]" />
          </div>
          <hr className="border-t border-gray-300 mt-4 w-32" />
        </div>

        <div className="flex flex-wrap justify-between">
          <div className="flex space-x-36">
          {footerInfo.map((item, idx) => (
            <div key={idx} className="flex flex-col gap-1">
              <p className="text-sm font-dmSans font-semibold underline text-primary">{item.title}</p>
              {item.lines.map((line, i) => (
                item.link ? (
                  <a
                    key={i}
                    href={item.link}
                    className="text-sm text-primary hover:underline"
                  >
                    {line}
                  </a>
                ) : (
                  <p key={i} className="text-sm text-primary">{line}</p>
                )
              ))}
            </div>
          ))}
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-sm font-semibold font-dmSans text-primary">Socials</p>
            <div className="flex gap-2">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  className="border border-gray-300 rounded-full p-3 hover:bg-gray-100"
                >
                  <img
                    src={social.icon}
                    alt="Social Icon"
                    className="h-5 w-5"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary text-white mt-8 py-4 px-36 flex flex-col md:flex-row justify-between items-center text-xs">
        <p>© 2023 Mobiusservices LLC</p>
        <div className="flex gap-6 mt-2 md:mt-0">
          {bottomLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              className="hover:underline"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
