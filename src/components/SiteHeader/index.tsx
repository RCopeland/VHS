import Logo from "../../assets/Logo";

function SiteHeader() {
  return (
    <header className="flex justify-between items-center">
      <h1>
        <a href="#nogo">
          <Logo />
        </a>
      </h1>
      <ul role="navigation" className="flex gap-4 items-center text-xl">
        <li className="font-bold">Meet the Staff</li>
        <li>
          Username <img alt="" src="" />
        </li>
      </ul>
    </header>
  );
}

export default SiteHeader;
