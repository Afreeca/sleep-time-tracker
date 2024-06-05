const NavBar = () => {
  return (
    <nav
      className="bg-blue-950 text-white p-4 w-full h-min px-10"
      data-cy="header"
    >
      <div className="container">
        <a href="https://cynomi.com" target="_blank" rel="noopener noreferrer">
          <img
            src="/icons/icon.png"
            alt="Cynomi logo"
            height={140}
            width={140}
          />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
