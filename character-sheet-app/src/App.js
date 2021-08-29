function App() {
  const toggleDarkMode = () => {
    console.log(localStorage.theme);
    if (localStorage.theme === undefined) {
      localStorage.theme = "dark";
    }
    localStorage.theme === "light"
      ? (localStorage.theme = "dark")
      : (localStorage.theme = "light");

    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme:dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className="App">
      <div className="h-screen w-screen flex flex-col justify-center items-center bg-white dark:bg-gray-800">
        Hello there!
        <button onClick={toggleDarkMode} className="text-black dark:text-white">
          ACTIVATE DARK MODE
        </button>
      </div>
    </div>
  );
}

export default App;
