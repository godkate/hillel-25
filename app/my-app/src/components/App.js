
import './App.css';
import Header from "./Header";
import Menu from "./Menu";
import Content from "./Content";

function App() {
  return (
      <div>
          <Header />
          <div className="Container">
              <Menu />
              <Content />
          </div>


      </div>
  );
}

export default App;
