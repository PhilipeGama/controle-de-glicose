import "./App.scss";

import { Container } from "./pages";
import Login from "./pages/auth/login";
import Home from "./pages/home";


import Register from "./pages/auth/register";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { isAuthenticated } from "./services/auth";
import { autoLogout } from "./services/auth";
import MeasureGlucose from "./pages/measure-glucose";
import ConsultGlucose from "./pages/consult-glucose";
import SendGlucose from "./pages/send-glucose";
import ReportGlucose from "./pages/report-glucose";

const ProtectedRoute = ({ children }) => {

  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  autoLogout();
  return children;
};

const App = () => {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Container />}>
          <Route path="/"  element={<ProtectedRoute><Home/></ProtectedRoute>}/>
          <Route path="/measure-glucoses"  element={<ProtectedRoute><MeasureGlucose/></ProtectedRoute>}/>
          <Route path="/consult-glucoses"  element={<ProtectedRoute><ConsultGlucose/></ProtectedRoute>}/>
          <Route path="/send-glucoses"  element={<ProtectedRoute><SendGlucose/></ProtectedRoute>}/>
          <Route path="/report-glucoses"  element={<ProtectedRoute><ReportGlucose/></ProtectedRoute>}/>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
