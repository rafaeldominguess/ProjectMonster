export default function WhySection() {
  return (
    <section id="flavours" className="w-full md:h-170 h-175 mt-20">
      <div className="container w-full mx-auto px-4 md:py-10 flex flex-col justify-center gap-8 relative">
        <h2 className="uppercase text-4xl md:text-6xl font-extrabold text-black/85 md:max-w-180">Energy that keeps you moving</h2>
        
        <div className="w-full flex justify-center items-center mt:4 md:mt-10">
            <img src="/background_3.png" alt="Seção porque comprar energético monster"/>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1.5fr_1fr] absolute top-72 md:top-100 left-0 w-full items-center px-4">
            <div className="flex items-center justify-center">
                <img src="/mulher.png" alt="Seção porque comprar energético monster" className="md:h-auto h-50 rounded-3xl" />
            </div>
            <div className="flex items-center justify-center absolute top-30 right-5 md:relative md:top-0 md:right-0">
                <img src="/latas.png" alt="Latas de monster"  className="md:h-auto h-40"/>
            </div>

            <div className="flex flex-col uppercase mx-4 md:w-full max-w-80 mt-14 md:mt-0  md:mx-0">
                <div className="flex gap-2 items-center border-b border-black/20 mb-2 w-fit">
                    <h3 className=" font-extrabold text-2xl text-black/85">001</h3>
                    <span className="text-xl font-semibold text-black/70">Juice blend</span>
                </div>
                <div className="flex gap-2 items-center border-b border-black/20 mb-2 w-fit">
                    <h3 className=" font-extrabold text-2xl text-black/85">002</h3>
                    <span className="text-xl font-semibold text-black/70">Maximum energy</span>
                </div>
                <div className="flex gap-2 items-center border-b border-black/20 mb-2 w-fit">
                    <h3 className=" font-extrabold text-2xl text-black/85">003</h3>
                    <span className="text-xl font-semibold text-black/70">Zero sugar ultra</span>
                </div>
                <div className="flex gap-2 items-center border-b border-black/20 mb-2 w-fit">
                    <h3 className=" font-extrabold text-2xl text-black/85">004</h3>
                    <span className="text-xl font-semibold text-black/70">Unleash the beast</span>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
