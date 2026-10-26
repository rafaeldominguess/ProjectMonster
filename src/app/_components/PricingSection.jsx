"use client";

import { useState } from "react";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";
import { GrFavorite } from "react-icons/gr";

const products = [
  {
    image: "/lata_monster_1.png",
    alt: "Primeiro produto Monster",
    name: "Mango Loco",
    price: "$2.99",
  },
  {
    image: "/lata_monster_2.png",
    alt: "Segundo produto Monster",
    name: "Pipeline Punch",
    price: "$3.99",
  },
  {
    image: "/lata_monster_3.png",
    alt: "Terceiro produto Monster",
    name: "Ultra Violet",
    price: "$5.00",
  },
  {
    image: "/lata_monster_1.png",
    alt: "Quarto produto Monster",
    name: "Mango Loco",
    price: "$2.99",
  },
  {
    image: "/lata_monster_2.png",
    alt: "Quinto produto Monster",
    name: "Pipeline Punch",
    price: "$3.99",
  },
  {
    image: "/lata_monster_3.png",
    alt: "Sexto produto Monster",
    name: "Ultra Violet",
    price: "$5.00",
  },
  {
    image: "/lata_monster_1.png",
    alt: "Sétimo produto Monster",
    name: "Mango Loco",
    price: "$2.99",
  },
  {
    image: "/lata_monster_2.png",
    alt: "Oitavo produto Monster",
    name: "Pipeline Punch",
    price: "$3.99",
  },
  {
    image: "/lata_monster_3.png",
    alt: "Nono produto Monster",
    name: "Ultra Violet",
    price: "$5.00",
  },
];

const productsPerPage = 2;
const productsPerPage1 = 3;
const pageCount = Math.ceil(products.length / productsPerPage);
const pageCount1 = Math.ceil(products.length / productsPerPage1);

function ProductCard({ product }) {
  return (
    <div>
      <img
        src={product.image}
        alt={product.alt}
        className="rounded-lg object-cover w-90 max-w-full md:w-full mx-auto hover:scale-105 transition-transform duration-300"
      />
      <div className="flex flex-wrap items-center justify-between gap-3 mt-2 max-w-100 mx-auto">
        <div className="min-w-0">
          <h3 className="uppercase font-extrabold text-2xl  text-black/85">
            {product.name}
          </h3>
          <span className="text-lg font-semibold text-black/70">
            {product.price}
          </span>
        </div>
        <div className="flex gap-3 items-center justify-center">
          <button className="font-semibold text-sm py-2 px-4 text-white rounded-full bg-[#558c36] hover:bg-[#4a7a2f] cursor-pointer transition-all duration-300">
            +Add Cart
          </button>
          <button
            type="button"
            aria-label={`Adicionar ${product.name} aos favoritos`}
            className="cursor-pointer"
          >
            <GrFavorite
              aria-hidden="true"
              className="h-6 w-6 text-black/85 hover:text-[#558c36] transition-all duration-300"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function PricingSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const [currentPage1, setCurrentPage1] = useState(0);

  const showPreviousPage = () => {
    setCurrentPage((page) => (page - 1 + pageCount) % pageCount);
  };

  const showNextPage = () => {
    setCurrentPage((page) => (page + 1) % pageCount);
  };

  const showPreviousPage1 = () => {
    setCurrentPage1((page) => (page - 1 + pageCount1) % pageCount1);
  };

  const showNextPage1 = () => {
    setCurrentPage1((page) => (page + 1) % pageCount1);
  };

  return (
    <section id="drinks" className="w-full overflow-hidden md:mt-10">
      <main className="container w-full mx-auto px-4 py-24 md:py-10 flex flex-col items-center justify-center gap-8">
        <div className="flex items-center justify-between w-full md:mb-4 md:mt-6">
          <h2 className="uppercase text-4xl md:text-6xl font-extrabold text-black/85">
            Pick Your Power
          </h2>
          <div className="hidden md:flex lg:hidden gap-2 select-none">
            <button
              type="button"
              aria-label="Ver produtos anteriores"
              onClick={showPreviousPage}
              className="cursor-pointer"
            >
              <BsArrowLeftShort className="h-10 w-10 border-2 border-black/20 text-black/70 hover:text-white hover:bg-[#558c36] hover:border-none rounded-full transition-all duration-300" />
            </button>
            <button
              type="button"
              aria-label="Ver próximos produtos"
              onClick={showNextPage}
              className="cursor-pointer"
            >
              <BsArrowRightShort className="h-10 w-10 border-2 border-black/20 text-black/70 hover:text-white hover:bg-[#558c36] hover:border-none rounded-full transition-all duration-300" />
            </button>
          </div>
          <div className="hidden lg:flex gap-2 select-none">
            <button
              type="button"
              aria-label="Ver produtos anteriores"
              onClick={showPreviousPage1}
              className="cursor-pointer"
            >
              <BsArrowLeftShort className="h-10 w-10 border-2 border-black/20 text-black/70 hover:text-white hover:bg-[#558c36] hover:border-none rounded-full transition-all duration-300" />
            </button>
            <button
              type="button"
              aria-label="Ver próximos produtos"
              onClick={showNextPage1}
              className="cursor-pointer"
            >
              <BsArrowRightShort className="h-10 w-10 border-2 border-black/20 text-black/70 hover:text-white hover:bg-[#558c36] hover:border-none rounded-full transition-all duration-300" />
            </button>
          </div>
        </div>

        <div className="w-full flex md:hidden gap-4 overflow-x-auto snap-x snap-mandatory pb-2 select-none">
          {products.map((product, productIndex) => (
            <div
              key={`mobile-${productIndex}`}
              className="min-w-[90%] snap-start"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <div className="w-full hidden md:block lg:hidden overflow-hidden select-none">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentPage * 100}%)` }}
          >
            {Array.from({ length: pageCount }, (_, pageIndex) => (
              <div
                key={pageIndex}
                className="min-w-full grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {products
                  .slice(
                    pageIndex * productsPerPage,
                    (pageIndex + 1) * productsPerPage,
                  )
                  .map((product, productIndex) => (
                    <ProductCard
                      key={`${pageIndex}-${productIndex}`}
                      product={product}
                    />
                  ))}
              </div>
            ))}
          </div>
        </div>

        <div className="w-full hidden lg:block overflow-hidden select-none">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentPage1 * 100}%)` }}
          >
            {Array.from({ length: pageCount1 }, (_, pageIndex) => (
              <div
                key={pageIndex}
                className="min-w-full grid grid-cols-3 gap-8"
              >
                {products
                  .slice(
                    pageIndex * productsPerPage1,
                    (pageIndex + 1) * productsPerPage1,
                  )
                  .map((product, productIndex) => (
                    <ProductCard
                      key={`${pageIndex}-${productIndex}`}
                      product={product}
                    />
                  ))}
              </div>
            ))}
          </div>
        </div>
      </main>
    </section>
  );
}
