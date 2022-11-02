import "./App.scss";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import ifamLogo from "./assets/logo-ifam.png";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return (
    <>
      <img src={ifamLogo} className="logo" style={{ width: "200px" }} />

      <div className="main-container d-flex align-items-center">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
