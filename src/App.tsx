import { Triangle } from "react-feather";
import { useState } from "react";
import SiteHeader from "./components/SiteHeader";
import Controls from "./components/Controls";
import RecommendationSet from "./components/RecommendationSet/RecommendationSet";
import JosephPic from "./assets/jospeh.png";
import StephaniePic from "./assets/Stephanie.png";
import EricPic from "./assets/Eric.png";
import SilenceOfTheLambsPoster from "./assets/silence-of-the-lambs.png";
import DayShiftPoster from "./assets/day-shift.png";
import ViolentNightPoster from "./assets/violent-night.png";
import HeroCard from "./components/HeroCard/HeroCard";
import HeroVideo from "./components/HeroVideo/HeroVideo";

interface Movie {
  title: string;
  posterUrl: string;
  summary: string;
}

function App() {
  const movies: Movie[] = [
    {
      title: "Violent Night",
      posterUrl: "violent-night.png",
      summary:
        "When a group of mercenaries attack the estate of a wealthy family, Santa Claus must step in to save the day (and Christmas).",
    },
    {
      title: "Day Shift",
      posterUrl: "day-shift.png",
      summary: "Day Shift summary",
    },
    {
      title: "Silence of the Lambs",
      posterUrl: "silence-of-the-lambs.png",
      summary: "silance summary",
    },
  ];

  const [selectedMovieIndex, setSelectedMovieIndex] = useState<number>(0);

  return (
    <div className="w-full bg-midnight">
      <HeroVideo movieUrl={movies[selectedMovieIndex].posterUrl} />
      <div className="grid grid-cols-12 gap-5 p-6 mx-auto main-layout z-10 relative z-10">
        <div className="col-span-full main-layout__header row-start-1">
          <SiteHeader />
        </div>
        <div className="col-span-6 md:col-span-1 md:col-start-1 row-start-3 md:row-start-auto main-layout__prev self-center justify-self-center md:justify-self-start">
          <Triangle
            className="-rotate-90"
            size={64}
            onClick={() => {
              if (selectedMovieIndex > 0) {
                setSelectedMovieIndex(selectedMovieIndex - 1);
                return;
              }
              setSelectedMovieIndex(movies.length - 1);
            }}
          />
        </div>
        <div className="col-span-full md:col-span-6 md:col-start-5 xl:col-span-4 xl:col-start-7 main-layout__hero self-end mt-64 mb-32 pt-32">
          <HeroCard
            title={movies[selectedMovieIndex].title}
            type="New Release"
            releaseDate="December 2, 2022"
            summary={movies[selectedMovieIndex].summary}
            starring="Beverly D’Angelo, David Harbor, John Lequizamo"
            ratings={[
              { name: "IMDb", rating: "8.8" },
              { name: "Joseph", rating: "5.7" },
              { name: "Stephanie", rating: "7.4" },
              { name: "Eric", rating: "9.0" },
            ]}
          />
        </div>
        <div className="col-span-6 md:col-span-1 md:col-start-12 main-layout__next self-center justify-self-center md:justify-self-end">
          <Triangle
            className="rotate-90"
            onClick={() => {
              if (selectedMovieIndex < movies.length - 1) {
                setSelectedMovieIndex(selectedMovieIndex + 1);
                return;
              }
              setSelectedMovieIndex(0);
            }}
            size={64}
          />
        </div>
      </div>
      <div className="w-full bg-gradient-to-r from-royal to-deepsea z-10 relative">
        <div className="relative grid grid-cols-12 gap-5 p-6 mx-auto main-layout">
          <div className="col-span-full main-layout__controls mt-4 mb-8">
            <Controls />
          </div>
          <div className="col-span-full main-layout__gallery">
            <RecommendationSet
              staffName="Joseph"
              staffTitle="Resident Sci-fi Alien"
              staffPhoto={JosephPic}
              movies={[
                {
                  posterSrc: SilenceOfTheLambsPoster,
                  posterAlt: "Silence of the Lambs",
                  review:
                    "Lorem ipsum dolor sit amet consectetur. Amet sed ultrices eget consectetur felis tincidunt tellus euismod duis.",
                },
                {
                  posterSrc: DayShiftPoster,
                  posterAlt: "Day Shift",
                  review:
                    "Lorem ipsum dolor sit amet consectetur. Amet sed ultrices eget consectetur felis tincidunt tellus euismod duis.",
                },
                {
                  posterSrc: ViolentNightPoster,
                  posterAlt: "Violent Night",
                  review:
                    "Lorem ipsum dolor sit amet consectetur. Amet sed ultrices eget consectetur felis tincidunt tellus euismod duis.",
                },
                {
                  posterSrc: DayShiftPoster,
                  posterAlt: "Day Shift",
                  review:
                    "Lorem ipsum dolor sit amet consectetur. Amet sed ultrices eget consectetur felis tincidunt tellus euismod duis.",
                },
              ]}
            />
            <RecommendationSet
              staffName="Stephanie"
              staffTitle="Horror Fanatic"
              staffPhoto={StephaniePic}
              movies={[
                {
                  posterSrc: DayShiftPoster,
                  posterAlt: "Day Shift",
                  review:
                    "Lorem ipsum dolor sit amet consectetur. Amet sed ultrices eget consectetur felis tincidunt tellus euismod duis.",
                },
                {
                  posterSrc: ViolentNightPoster,
                  posterAlt: "Violent Night",
                  review:
                    "Lorem ipsum dolor sit amet consectetur. Amet sed ultrices eget consectetur felis tincidunt tellus euismod duis.",
                },
                {
                  posterSrc: DayShiftPoster,
                  posterAlt: "Day Shift",
                  review:
                    "Lorem ipsum dolor sit amet consectetur. Amet sed ultrices eget consectetur felis tincidunt tellus euismod duis.",
                },
                {
                  posterSrc: SilenceOfTheLambsPoster,
                  posterAlt: "Silence of the Lambs",
                  review:
                    "Lorem ipsum dolor sit amet consectetur. Amet sed ultrices eget consectetur felis tincidunt tellus euismod duis.",
                },
              ]}
            />
            <RecommendationSet
              staffName="Eric"
              staffTitle="Movie Snob"
              staffPhoto={EricPic}
              movies={[
                {
                  posterSrc: DayShiftPoster,
                  posterAlt: "Day Shift",
                  review:
                    "Lorem ipsum dolor sit amet consectetur. Amet sed ultrices eget consectetur felis tincidunt tellus euismod duis.",
                },
                {
                  posterSrc: ViolentNightPoster,
                  posterAlt: "Violent Night",
                  review:
                    "Lorem ipsum dolor sit amet consectetur. Amet sed ultrices eget consectetur felis tincidunt tellus euismod duis.",
                },
                {
                  posterSrc: SilenceOfTheLambsPoster,
                  posterAlt: "Silence of the Lambs",
                  review:
                    "Lorem ipsum dolor sit amet consectetur. Amet sed ultrices eget consectetur felis tincidunt tellus euismod duis.",
                },
                {
                  posterSrc: DayShiftPoster,
                  posterAlt: "Day Shift",
                  review:
                    "Lorem ipsum dolor sit amet consectetur. Amet sed ultrices eget consectetur felis tincidunt tellus euismod duis.",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
