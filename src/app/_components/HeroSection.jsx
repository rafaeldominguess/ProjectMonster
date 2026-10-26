import { FiArrowRight } from "react-icons/fi";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="w-full relative md:h-170 h-screen flex justify-center overflow-hidden"
      style={{
        backgroundImage: "url(/background_herosection.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <main className="container mx-auto px-4 justify-center flex flex-col items-center md:items-start">
        <div className="w-full md:flex flex-col justify-between items-center md:items-start text-center md:text-left">
          <div className="flex flex-col md:flex-row md:justify-start xl:justify-between xl:w-full md:items-center md:text-start md:gap-20 lg:gap-8">
            <h1 className="text-7xl md:text-[120px] lg:text-[200px] font-extrabold md:text-start text-black/85 max-w-200">
              POWER
            </h1>
            <h1 className="text-6xl text-black/85 font-extrabold md:hidden mb-4">
              YOUR <span className="text-[#61A73F]">DAY</span>
            </h1>
            <div className="w-full flex flex-col items-end md:gap-4">
              <p className="text-md font-medium mt-4 mb-8 md:mb-0 text-neutral-900 md:max-w-100">
                A bold burst of energy and refreshing flavour, made for the
                moments that demand more.
              </p>
              <button className="w-fit flex justify-center items-center gap-2  rounded-full py-2 px-3 text-white bg-black hover:bg-neutral-800 cursor-pointer z-10 transition-all duration-300">
                <span className="font-semibold ml-1">Shop Now</span>
                <div className=" rounded-full py-1 px-1 text-white/80 flex justify-center items-center">
                  <FiArrowRight className="stroke-[2px] w-7 h-7" />
                </div>
              </button>
            </div>
          </div>
          <div className="w-full flex md:justify-start lg:justify-start">
            <h1 className="text-7xl md:text-[120px] lg:text-[230px] max-w-200 text-black/85 font-extrabold hidden md:flex">
              YOUR <span className="text-[#61A73F]">DAY</span>
            </h1>
          </div>
        </div>
        
      </main>
      <div className="absolute  right-0 md:right-none  bottom-0 md:left-[25%] select-none  overflow-hidden">
          <img
            src="/background_mao.png"
            alt="Hero Image"
            className="object-cover h-75 md:h-110 lg:h-130"
          />
        </div>
    </section>
  );
}
