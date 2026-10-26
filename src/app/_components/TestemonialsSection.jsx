import { BiSolidQuoteSingleLeft } from "react-icons/bi";

export default function Testemonials() {
  return (
    <div className="w-full overflow-hidden md:mt-10">
      <div className="container w-full mx-auto px-4 py-24 md:py-10 flex flex-col justify-center gap-8">
        <h2 className="uppercase text-4xl md:text-6xl font-extrabold text-black/85 md:max-w-180">
          Energy that keeps up with you
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col justify-between items-start">
            <div className="w-full flex gap-4">
              <div className="flex items-center justify-center w-full select-none">
                <img
                  src="/lata_monster_4.png"
                  alt="Energy Monster Image"
                  className="object-cover  rounded-lg shadow-xl h-56 hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex items-center justify-center w-full select-none">
                <img
                  src="/lata_monster_5.png"
                  alt="Energy Monster Image"
                  className="object-cover rounded-lg shadow-xl h-56 hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="flex-col mt-6 md:mt-0 hidden md:flex">
              <h3 className="uppercase font-extrabold text-black/85 text-xl">
                David Jonny
              </h3>
              <div className="flex items-center gap-2 text-black/85 font-semibold">
                <span>⭐⭐⭐⭐⭐</span>
                <span>4.8</span>
              </div>
            </div>
          </div>
          <div className="select-none"  >
            <img
              src="/lata_monster_6.png"
              alt="Homem segurando uma lata de monster energy"
              className="object-cover rounded-lg shadow-xl max-h-112 w-full hover:scale-95 transition-transform duration-300"
            />
          </div>
          <div className="flex flex-col md:gap-2 mt-6 md:mt-0 md:hidden">
              <h3 className="uppercase font-extrabold text-black/85 text-xl">
                David Jonny
              </h3>
              <div className="flex items-center gap-2 text-black/85 font-semibold">
                <span>⭐⭐⭐⭐⭐</span>
                <span>4.8</span>
              </div>
            </div>
          <div className="flex flex-col justify-end w-full gap-4">
            <div className="flex items-center select-none">
              <img
              src="aspas.png"
              alt="Image of quotes"
              className="object-cover"
            />
            </div>
            <p className="text-black/75">
              "Great taste, clean finish, and the perfect boost, when I need to
              stay switched on. It's become my go-to energy drink."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
