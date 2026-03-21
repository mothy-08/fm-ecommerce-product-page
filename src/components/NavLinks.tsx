const links = ["Collections", "Men", "Women", "About", "Contact"];
export function NavLinks() {
  return (
    <nav className="md:flex-1" aria-label="Primary navigation links">
      <ul
        className="flex flex-col gap-7.5 md:flex-row md:items-center"
        role="list"
      >
        {links.map((link) => (
          <li key={link}>
            <a
              className="text-lg font-bold md:text-base md:font-normal md:text-blue-600"
              href="#"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
