import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { HERO_BG, PROPERTYLISTINGSAMPLE } from "../constants/index";
import "@/styles/globals.css";
import Pill from "@/components/common/Pill";
import { PropertyProps } from "../interfaces/index";
import type { NextPage } from "next";
import Layout from "@/components/layout/Layout";

const filterOptions = [
  "Top Villa",
  "Self Checkin",
  "Luxury",
  "Pet Friendly",
  "Private Pool",
  "Ocean View",
  "Fireplace",
  "Countryside"
];


const Home = () => {

    const [selected, setSelected] = useState<string | null>(null);

  const handleClick = (label: string) => {
    setSelected(label === selected ? null : label); // toggle selection
  };

  return (
    <>
      <Head>
        <title>StayFinder | Home</title>
        <meta name="description" content="Find your favorite place at the best price." />
      </Head>

      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      >
        <div className="bg-black bg-opacity-50 w-full h-full absolute top-0 left-0 z-0" />
        <div className="z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Find your favorite place here!
          </h1>
          <p className="text-lg md:text-2xl">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="max-w-7xl mx-auto px-4 py-10 ">
        <h2 className="text-2xl font-semibold mb-4 flex items-center justify-center">Filters</h2>
        <div className="flex flex-wrap gap-3 items-center justify-center">
          {filterOptions.map((label) => (
            <Pill
              key={label}
              label={label}
              isSelected={selected === label}
              onClick={() => handleClick(label)}
            />
          ))}
        </div>
      </section>

      {/* Listing Section */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold mb-6">Available Properties</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {PROPERTYLISTINGSAMPLE.map((property: PropertyProps, index: number) => (
            <div key={index} className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition">
              <img
                src={property.image}
                alt={property.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{property.name}</h3>
                <p className="text-sm text-gray-500 mb-1">${property.price.toLocaleString()} / night</p>
                <p className="text-sm text-yellow-500 font-medium">⭐ {property.rating}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;