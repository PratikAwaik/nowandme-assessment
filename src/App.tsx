import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Feed from "./components/Home/Feed";
import { useGlobalContext } from "./context/GlobalContext";

function App() {
  const {
    state: { isInitialRender, isLoginView },
  } = useGlobalContext();
  return (
    <div className="App w-screen h-screen bg-theme-black-700 overflow-x-hidden overflow-y-auto py-2 px-4">
      <div className="w-full h-full flex items-center justify-center">
        {isInitialRender && isLoginView && <Login />}
        {isInitialRender && !isLoginView && <Register />}
        {!isInitialRender && <Feed />}
      </div>
    </div>
  );
}

export default App;
