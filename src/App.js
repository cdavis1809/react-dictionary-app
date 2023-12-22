import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary defaultKeyword="dog" />
        </main>
        <footer>
          Code is open sourced and written by{" "}
          <span className="author">
            <a
              href="https://github.com/cdavis1809/react-dictionary-app"
              target="_blank"
              rel="noreferrer"
            >
              Courtney Davis
            </a>
          </span>
        </footer>
      </div>
    </div>
  );
}
