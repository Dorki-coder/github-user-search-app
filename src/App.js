import "./style/App.css";
import { createContext, useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Card from "./components/Card";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(false);
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <div className="container">
          <Header theme={theme} toggleTheme={toggleTheme}></Header>
          <Search setLoading={setLoading} setData={setData}></Search>
          <Card theme={theme} isLoading={isLoading} data={data}></Card>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
