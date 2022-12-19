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
      <div className="flex items-center justify-start gap-4 text-lg mb-4">
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
      <ul className="flex flex-wrap justify-between mb-16">
        {movies.map((movie) => (
          <li>
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
