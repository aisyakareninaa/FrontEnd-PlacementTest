import Link from "next/link";
import Card from "../components/Card";
import data from "../data.json";
import Navbar from "../components/Navbar";
import React, { useState } from 'react';

const Home = () => {
  const [cards, setCards] = useState(data);
  const [filteredCards, setFilteredCards] = useState(cards);

  const handleSearch = (searchQuery) => {
    const filtered = cards.filter((card) =>
      card.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredCards(filtered);
  };

  return (
    <div className="bg-white">
      <Navbar handleSearch={handleSearch} />
      <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
        <h1 className="text-5xl leading-tight sm:text-6xl xl:max-w-3xl dark:text-gray-900">photolyphia.</h1>
        <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-900 uppercase">Stock Photos</p>
        <section id="list">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {filteredCards.map((item, index) => (
              <Link key={index} href={`/detail/${item.title}`}>
                <Card title={item.title} description={item.description} img={item.img} />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
