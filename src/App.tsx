import "./App.css";
import LandingPage from "./pages/LadingPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" />
        <Route path="/login" />
      </Routes>
      <section>
        <LandingPage />
      </section>
    </>
  );
}

export default App;
