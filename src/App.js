import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/organisms/Layout";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/auth/login" element={<AuthPage />} />
        <Route path="/profilePage/:token" element={<ProfilePage />} />
      </Routes>
    </Layout>
  );
}

export default App;
