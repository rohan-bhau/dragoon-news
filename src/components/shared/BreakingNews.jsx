import React from 'react'
import Marquee from 'react-fast-marquee'

const BreakingNews = () => {
  const news = {
    articles: [
      {
        id: 1,
        title: "Train collision near Jakarta leaves multiple dead and injured",
        category: "world",
        summary:
          "Two trains collided near Jakarta, killing at least 4 people and injuring dozens. Rescue operations are ongoing and several passengers were trapped in damaged carriages.",
        location: "Jakarta, Indonesia",
        published_at: "2026-04-28T01:10:00Z",
      },
      {
        id: 2,
        title: "Plane crash in South Sudan kills all onboard",
        category: "world",
        summary:
          "A Cessna aircraft crashed near Juba, killing 14 people including the pilot. Early reports suggest poor weather conditions as a possible cause.",
        location: "Juba, South Sudan",
        published_at: "2026-04-28T01:05:00Z",
      },
      {
        id: 3,
        title:
          "King Charles begins high-profile US visit amid security concerns",
        category: "politics",
        summary:
          "King Charles III arrived in Washington for a diplomatic visit aimed at strengthening UK-US ties, following a recent security incident involving an attempted attack.",
        location: "Washington, D.C., USA",
        published_at: "2026-04-27T20:30:00Z",
      },
      {
        id: 4,
        title:
          "White House attack suspect charged with attempted assassination",
        category: "politics",
        summary:
          "A suspect accused of targeting the White House Correspondents' Dinner has been charged with attempted assassination and firearms offenses.",
        location: "Washington, D.C., USA",
        published_at: "2026-04-27T21:00:00Z",
      },
      {
        id: 5,
        title: "Ronnie O’Sullivan eliminated from World Snooker Championship",
        category: "sports",
        summary:
          "Ronnie O’Sullivan was knocked out of the 2026 World Snooker Championship in a dramatic match, ending his bid for a record eighth title.",
        location: "Sheffield, UK",
        published_at: "2026-04-28T00:00:00Z",
      },
    ],
  };
  return (
    <div className="bg-[#f3f3f3]">
      <div className=" p-4 container mx-auto flex justify-between items-center gap-2">
        <button className="btn bg-[#D72050] text-[#FFFFFF] text-md">
          Latest
        </button>
        <Marquee pauseOnHover={true}>
          {news.articles.map((n) => (
            <span key={n.id} className="mr-6">
              {n.title}
            </span>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default BreakingNews
