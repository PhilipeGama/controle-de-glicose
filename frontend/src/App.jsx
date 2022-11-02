import "./App.scss";

import { Container } from "./pages";
import Login from "./pages/login";
import Home from "./pages/home";
import Register from "./pages/register";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { isAuthenticated } from "./services/auth";

const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Container />}>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
