import { BiLogoFacebookCircle } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";
import { BiLogoYoutube } from "react-icons/bi";
import { BiLogoWhatsapp } from "react-icons/bi";

export default function Footer() {
  return (
    <section
      id="contact"
      className="w-full overflow-hidden md:mt-10 pt-10 pb-2"
      style={{
        backgroundImage: "url(/background_herosection.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container w-full mx-auto px-4 py-24 md:py-10">
        <div className="flex flex-col justify-between md:flex-row">
          <div className="md:flex md:gap-4 md:flex-col hidden">
            <a
              href="#home"
              className="flex w-full md:flex-col gap-2 flex-row items-center justify-center md:justify-center md:items-start"
            >
              <img
                src="/logo.png"
                alt="Logo"
                className="w-50 md:w-40 cursor-pointer"
              />
              <span className="text-black/85 font-semibold md:max-w-35">
                Stay energized. Stay focused. Keep moving.
              </span>
            </a>
            <div className="mb-4 md:mb-0 md:flex md:justify-center md:items-center">
              <BiLogoInstagram className="inline-block text-3xl text-black/85 mx-2 cursor-pointer" />
              <BiLogoFacebookCircle className="inline-block text-3xl text-black/85 mx-2 cursor-pointer" />
              <BiLogoYoutube className="inline-block text-3xl text-black/85 mx-2 cursor-pointer" />
              <BiLogoWhatsapp className="inline-block text-3xl text-black/85 mx-2 cursor-pointer" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            <div>
              <span className="text-black font-bold uppercase">
                Quick Links
              </span>
              <ul className="flex flex-col gap-2 text-black/85 mt-2">
                <a href="#home" className="cursor-pointer hover:text-[#558c36] font-medium">
                  Home
                </a>
                <a href="#drinks" className="cursor-pointer hover:text-[#558c36] font-medium">
                  Our Drinks
                </a>
                <a className="cursor-pointer hover:text-[#558c36] font-medium">
                  Ingredients
                </a>
                <a className="cursor-pointer hover:text-[#558c36] font-medium">
                  About Us
                </a>
              </ul>
            </div>

            <div>
              <span className="text-black/85 font-bold uppercase">Explore</span>
              <ul className="flex flex-col gap-2 text-black/85 mt-2">
                <a href="#drinks" className="cursor-pointer hover:text-[#558c36] font-medium">
                  Shop All
                </a>
                <a className="cursor-pointer hover:text-[#558c36] font-medium">
                  Find a Store
                </a>
                <a href="#drinks" className="cursor-pointer hover:text-[#558c36] font-medium">
                  Promotions
                </a>
              </ul>
            </div>

            <div>
              <span className="text-black/85 font-bold uppercase">Support</span>
              <ul className="flex flex-col gap-2 text-black/85 mt-2">
                <a className="cursor-pointer hover:text-[#558c36] font-medium">
                  Shopping & Returns
                </a>
                <a className="cursor-pointer hover:text-[#558c36] font-medium">
                  FAQs
                </a>
                <a className="cursor-pointer hover:text-[#558c36] font-medium">
                  Order Tracking
                </a>
                <a className="cursor-pointer hover:text-[#558c36] font-medium">
                  Contact
                </a>
              </ul>
            </div>
            <div className="mt-6 md:hidden flex w-full  gap-2 flex-row items-center justify-center">
              <img
                id="home"
                src="/logo.png"
                alt="Logo"
                className="w-50 md:w-40 cursor-pointer"
              />
              <span className="text-black/85 font-semibold md:max-w-30">
                Stay energized. Stay focused. Keep moving.
              </span>
            </div>
            <div className="text-center md:hidden">
              <BiLogoInstagram className="inline-block text-3xl text-black/85 mx-2 cursor-pointer" />
              <BiLogoFacebookCircle className="inline-block text-3xl text-black/85 mx-2 cursor-pointer" />
              <BiLogoYoutube className="inline-block text-3xl text-black/85 mx-2 cursor-pointer" />
              <BiLogoWhatsapp className="inline-block text-3xl text-black/85 mx-2 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
      <footer className="w-full text-center pt-2 text-black/85 font-medium border-t border-black/30">
        <p>&copy; 2026 EXA. All rights reserved.</p>
      </footer>
    </section>
  );
}
