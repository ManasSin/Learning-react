const Search = () => {
  const searchLogo = (
    <svg
      fill="none"
      stroke="currentColor"
      stroke-width="2.5"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="w-[100%] h-[100%]"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
      ></path>
    </svg>
  );
  return (
    <div className="flex p-1 border-2 rounded-3xl items-center sm:w-[min(100%, 220px)] sm:justify-self-center justify-between ">
      <button
        onClick={() => {
          openInputModal;
        }}
        className="text-xs font-medium border-r-2 px-4 truncate shrink basis-auto}"
      >
        Anywhere
      </button>
      <button
        onClick={() => {
          openInputModal;
        }}
        className="text-xs font-medium border-r-2 px-4 truncate shrink basis-auto"
      >
        Any week
      </button>
      <button
        onClick={() => {
          openInputModal;
        }}
        className="text-xs font-medium px-4 truncate shrink basis-auto"
      >
        Add guest
      </button>
      <div className="w-8 h-8 p-2 bg-red-500 rounded-full text-white">
        {searchLogo}
      </div>
    </div>
  );
};

export default Search;
