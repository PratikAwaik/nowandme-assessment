import Login from "./components/Auth/Login";
import Feed from "./components/Home/Feed";
import { useGlobalContext } from "./context/GlobalContext";

function App() {
  const { isInitialRender } = useGlobalContext();
  return (
    <div className="App w-screen h-screen bg-theme-black-700 overflow-hidden">
      <div className="w-full h-full flex items-center justify-center">
        {isInitialRender && <Login />}
        {!isInitialRender && <Feed />}
      </div>
    </div>
  );
}

export default App;
