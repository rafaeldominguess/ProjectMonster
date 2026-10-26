import { FiArrowRight } from "react-icons/fi";

export default function OneDrink() {
  return (
    <section
    id="about"
      className="w-full relative md:h-170 h-screen flex justify-center overflow-hidden md:mt-20 mt-10"
      style={{
        backgroundImage: "url(/background_herosection.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <main className="container mx-auto px-4 justify-center flex flex-col items-center md:items-start">
        <div className="w-full md:flex flex-col justify-between items-center md:items-start text-center md:text-left">
          <div className="flex flex-col md:flex-row md:items-center md:justify-start md:gap-10 xl:justify-between  md:text-start md:max-w-500 lg:w-full">
            <h1 className="text-6xl md:text-[120px] font-extrabold md:text-start text-black/85 max-w-100">
              ONE DRINK
            </h1>
            <h1 className="text-5xl text-black/85 font-extrabold md:hidden mb-4">
              ANY <span className="text-[#61A73F]">MOMENT</span>
            </h1>
            <div className="w-full max-w-100 flex flex-col justify-center md:gap-4">
              <p className="text-md font-medium mt-10 mb-8 md:mb-0 lg:mt-0 text-neutral-900">
                A bold burst of energy and refreshing flavour, made for the
                moments that demand more.
              </p>
              <button className="mx-auto w-fit md:mr-0 flex justify-center items-center gap-2 rounded-full py-2 px-3 cursor-pointer z-10 transition-all duration-300 bg-black text-white hover:bg-neutral-800 ">
                <span className="font-semibold ml-1">Shop Now</span>
                <div className=" rounded-full py-1 px-1 text-white/80 flex justify-center items-center">
                  <FiArrowRight className="stroke-[2px] w-7 h-7" />
                </div>
              </button>
            </div>
          </div>
          <div className="w-full flex md:justify-start lg:justify-start gap-5">
            <h1 className="text-5xl md:text-[100px] lg:text-[140px] text-black/85 font-extrabold hidden md:flex">
              ANY
            </h1>
            <h1 className="text-[#61A73F] text-5xl md:text-[100px] lg:text-[140px] font-extrabold hidden md:flex">MOMENT</h1>
          </div>
        </div>
      </main>
      <div className="absolute bottom-0 right-0   select-none  overflow-hidden">
        <img
          src="/background_mao.png"
          alt="Hero Image"
          className="object-cover h-75 md:h-80 lg:h-92"
        />
      </div>
    </section>
  );
}
