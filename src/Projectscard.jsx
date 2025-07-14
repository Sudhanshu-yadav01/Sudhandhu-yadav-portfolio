import React, { useState } from 'react';
import {
  MinimalCard,
  MinimalCardDescription,
  MinimalCardImage,
  MinimalCardTitle,
} from "../src/components/ui/minimal-card";

const Projectscard = () => {
  const cards = [
    {
      title: "Animal Free Cruelty",
      description:
        "A website to check that your product is cruelty-free or not, using PETA's database to verify products. Customers get the idea of day-to-day products they are using are coming from genuine sources or not. Customers can compare with better alternative products in the same category.",
      type: "video",
      src: "/project1.mp4",
      tech: ["React", "Tailwind CSS", "PETA DATA"],
    },
    {
      title: "HealthTour",
      description:
        "A website where users find all the hospitals in India which provide specialized treatment. They compare the operation charges and find the nearest hospital. Includes real-time map, multi-currency support for international users, and multilingual interface.",
      type: "image",
      src: [
        "/image1.png",
        "/image2.png",
        "/image3.png",
        "/image4.png",
      ],
      tech: ["React", "Spring Boot", "H2 Database"],
    },
  ];

  return (
    <div id="projects">
      <div className="w-full pb-10">
        <div className="flex flex-col w-full justify-center items-center rounded-lg p-4">
          <div className="grid w-full lg:grid-cols-3 gap-4 items-center justify-center">
            {cards.map((card, index) => (
              <CardItem key={index} card={card} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const CardItem = ({ card }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () =>
    setCurrentImageIndex((prev) =>
      prev === card.src.length - 1 ? 0 : prev + 1
    );

  const prevImage = () =>
    setCurrentImageIndex((prev) =>
      prev === 0 ? card.src.length - 1 : prev - 1
    );

  return (
    <MinimalCard className="m-2 border-1 border-double border-gray-400 w-[400px]">
      {card.type === "video" ? (
        <video
          className="h-[320px] w-full object-contain rounded-lg"
          src={card.src}
          autoPlay
          loop
          muted
          playsInline
        />
      ) : Array.isArray(card.src) ? (
        <div className="relative h-[320px] w-full">
          <img
            src={card.src[currentImageIndex]}
            alt={card.title}
            className="h-full w-full object-contain rounded-lg"
          />
          {/* Arrows */}
          <button
            onClick={prevImage}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-70 px-2 py-1 rounded-full text-sm font-bold"
          >
            ‹
          </button>
          <button
            onClick={nextImage}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-70 px-2 py-1 rounded-full text-sm font-bold"
          >
            ›
          </button>
        </div>
      ) : (
        <MinimalCardImage
          className="h-[320px]"
          src={card.src}
          alt={card.title}
        />
      )}

      <MinimalCardTitle>{card.title}</MinimalCardTitle>

      <MinimalCardDescription>{card.description}</MinimalCardDescription>

      {/* ✅ Tech Stack */}
      <div className="px-1 pb-4 flex flex-wrap gap-2">
        {card.tech.map((tech, i) => (
          <span
            key={i}
            className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
    </MinimalCard>
  );
};

export default Projectscard;
