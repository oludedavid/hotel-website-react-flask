import React from "react";
import Intro from "../intro/Intro";
import About from "../about/About";
import RoomCarousel from "../room-display/RoomCarousel";
import Contacts from "../contact-us/Contacts";
import Footers from "../footer/Footers";
import Navbar from "../navigationBar/Navbar";
import { Link } from "react-router-dom";

export default function Home() {
  const quotes = [
    {
      author: "Mahatma Gandhi",
      quote:
        "'The best way to find yourself is to lose yourself in the service of others…'",
      quoteId: 1,
    },
    {
      author: "Maya Angelou",
      quote:
        "'People will forget what you said, forget what you did, but people will never forget how you made them feel.'",
      quoteId: 2,
    },
    {
      author: "Danny Meyer",
      quote:
        "'Hospitality is almost impossible to teach. It's all about hiring the right people.'",
      quoteId: 3,
    },
    {
      author: "John Ruskin",
      quote:
        "'Quality is never an accident. It is always the result of an intelligent effort.'",
      quoteId: 4,
    },
    {
      author: "Jael McHenry",
      quote:
        "'I want them to bite into a cookie, and think of me, and smile. Food is love. Food has a power. I knew it in my mind, but now I know it in my heart.'",
      quoteId: 5,
    },
    {
      author: "Bill Kimpton",
      quote:
        "'A hotel should relieve travelers of their insecurity and loneliness. It should make them feel warm and cozy.'",
      quoteId: 6,
    },
    {
      author: "Bill Gates",
      quote:
        "'Your most unhappy customers are your greatest source of learning.'",
      quoteId: 7,
    },
    {
      author: "Justine Vogt",
      quote:
        "'Hospitality is making your guests feel at home, even if you wish they were.'",
      quoteId: 8,
    },
  ];
  return (
    <div className="homeSections">
      <Intro></Intro>
      <About quotes={quotes}></About>
      <RoomCarousel></RoomCarousel>
      <Contacts></Contacts>
      <Footers></Footers>
    </div>
  );
}
