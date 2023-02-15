import { v4 as uuidv4 } from "uuid";
import Poster from "../Poster/Poster";

function RecommendationSet({
  staffName,
  staffTitle,
  staffPhoto,
  movies,
}: {
  staffName: string;
  staffTitle: string;
  staffPhoto: string;
  movies: {
    posterSrc: string;
    posterAlt: string;
    review: string;
  }[];
}) {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-start gap-4 text-lg mt-4 mb-8">
        <div className="mr-8">
          <div className="flex gap-2 items-center">
            <img alt="" src={staffPhoto} />
            <div>
              <p>{staffName}</p>
              <p className="opacity-60">{staffTitle}</p>
            </div>
          </div>
        </div>
        <p className="text-sm max-w-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          venenatis nisi risus, mollis laoreet est ornare id. Curabitur
          sollicitudin tellus id pulvinar malesuada.
        </p>
      </div>
      <ul className="grid grid-cols-12 gap-4">
        {movies.map((movie) => (
          <li key={uuidv4()} className="col-span-6 md:col-span-4 lg:col-span-3">
            <Poster
              src={movie.posterSrc}
              alt={movie.posterAlt}
              caption={movie.review}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecommendationSet;
