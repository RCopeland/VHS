import { ChevronDown } from "react-feather";

function Index() {
  return (
    <div className="flex flex-wrap justify-between items-center">
      <ul className="flex gap-4 text-xl">
        <li>
          <a href="#nogo">Staff Picks</a>
        </li>
        <li>
          <a href="#nogo" className="opacity-40">
            New Releases
          </a>
        </li>
      </ul>
      <div className="flex gap-4">
        <div className="flex items-center">
          Streaming Availability <ChevronDown className="mt-1" />
        </div>
        <div className="flex items-center">
          Sorting Options <ChevronDown className="mt-1" />
        </div>
      </div>
    </div>
  );
}

export default Index;
