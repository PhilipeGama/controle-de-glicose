import "./App.scss";

import { Container } from "./pages";
import Login from "./pages/login";
import Home from "./pages/home";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { isAuthenticated } from "./services/auth";

const ProtectedRoute = ({ user, children }) => {
  if (!user) {
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
              <ProtectedRoute user={false}>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
