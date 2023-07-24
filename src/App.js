import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/organisms/Layout";
import HomePage from "./components/molecules/HomePage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route index element={<HomePage />} />
      </Routes>
    </Layout>
  );
}

export default App;
