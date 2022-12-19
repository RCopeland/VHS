import { Triangle } from "react-feather";

function HeroCard({
  title,
  type,
  releaseDate,
  summary,
  starring,
  ratings,
}: {
  title: string;
  type: string;
  releaseDate: string;
  summary: string;
  starring: string;
  ratings: {
    name: string;
    rating: string;
  }[];
}) {
  return (
    <div className="flex flex-col gap-4 p-4">
      <h2 className="text-5xl font-bold">{title}</h2>
      <div className="flex justify-between">
        <span className="font-bold">{type}</span>
        <span>{releaseDate}</span>
      </div>
      <p>{summary}</p>
      <p className="mb-4">{starring}</p>
      <hr />
      <ul className="flex justify-between px-8">
        {ratings.map((rating) => (
          <li className="text-center">
            <p className="text-4xl font-bold">{rating.rating}</p>
            <p className="text-sm">{rating.name}</p>
          </li>
        ))}
      </ul>
      <div className="flex justify-between mt-8">
        <button
          type="button"
          className="flex gap-1 underline text-2xl items-center font-bold"
        >
          Watch Now <Triangle className="rotate-90 mt-1" size={16} />
        </button>
        <button type="button">Add / Remove to List</button>
      </div>
    </div>
  );
}
export default HeroCard;
