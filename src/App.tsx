import { Triangle } from "react-feather";
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

function App() {
  return (
    <div className="grid grid-cols-12 gap-5 m-6 mx-auto main-layout">
      <div className="col-span-full main-layout__header">
        <SiteHeader />
      </div>
      <div className="col-span-6 md:col-span-1 md:col-start-1 row-start-3 md:row-start-auto main-layout__prev self-center justify-self-center md:justify-self-start">
        <Triangle className="-rotate-90" size={64} />
      </div>
      <div className="col-span-full md:col-span-6 md:col-start-6 xl:col-span-4 xl:col-start-8 main-layout__hero self-end mt-64 pt-32">
        <HeroCard
          title="Violent Night"
          type="New Release"
          releaseDate="December 2, 2022"
          summary="When a group of mercenaries attack the estate of a wealthy family, Santa Claus must step in to save the day (and Christmas)."
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
        <Triangle className="rotate-90" size={64} />
      </div>
      <div className="col-span-full main-layout__controls mt-16 mb-8">
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
              posterAlt: "",
              review:
                "Lorem ipsum dolor sit amet consectetur. Amet sed ultrices eget consectetur felis tincidunt tellus euismod duis.",
            },
            {
              posterSrc: DayShiftPoster,
              posterAlt: "",
              review:
                "Lorem ipsum dolor sit amet consectetur. Amet sed ultrices eget consectetur felis tincidunt tellus euismod duis.",
            },
            {
              posterSrc: ViolentNightPoster,
              posterAlt: "",
              review:
                "Lorem ipsum dolor sit amet consectetur. Amet sed ultrices eget consectetur felis tincidunt tellus euismod duis.",
            },
            {
              posterSrc: DayShiftPoster,
              posterAlt: "",
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
              posterAlt: "",
              review:
                "Lorem ipsum dolor sit amet consectetur. Amet sed ultrices eget consectetur felis tincidunt tellus euismod duis.",
            },
            {
              posterSrc: ViolentNightPoster,
              posterAlt: "",
              review:
                "Lorem ipsum dolor sit amet consectetur. Amet sed ultrices eget consectetur felis tincidunt tellus euismod duis.",
            },
            {
              posterSrc: DayShiftPoster,
              posterAlt: "",
              review:
                "Lorem ipsum dolor sit amet consectetur. Amet sed ultrices eget consectetur felis tincidunt tellus euismod duis.",
            },
            {
              posterSrc: SilenceOfTheLambsPoster,
              posterAlt: "",
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
              posterAlt: "",
              review:
                "Lorem ipsum dolor sit amet consectetur. Amet sed ultrices eget consectetur felis tincidunt tellus euismod duis.",
            },
            {
              posterSrc: ViolentNightPoster,
              posterAlt: "",
              review:
                "Lorem ipsum dolor sit amet consectetur. Amet sed ultrices eget consectetur felis tincidunt tellus euismod duis.",
            },
            {
              posterSrc: SilenceOfTheLambsPoster,
              posterAlt: "",
              review:
                "Lorem ipsum dolor sit amet consectetur. Amet sed ultrices eget consectetur felis tincidunt tellus euismod duis.",
            },
            {
              posterSrc: DayShiftPoster,
              posterAlt: "",
              review:
                "Lorem ipsum dolor sit amet consectetur. Amet sed ultrices eget consectetur felis tincidunt tellus euismod duis.",
            },
          ]}
        />
      </div>
    </div>
  );
}

export default App;
