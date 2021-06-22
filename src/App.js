import "./App.css";
import SideBar from "./components/sidebar";
import Header from "./components/header";
import Logo from "./components/logo";

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className='logo'>
          <Logo />
        </div>
        <div className='headerComp'>
          <Header />
        </div>
      </div>
      <SideBar />
    </div>
  );
}

export default App;
