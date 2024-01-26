import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import ProtectedPage from "./ProtectedPage";
import Page404 from "./pages/Page404";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/auth/*" element={<Auth />} />
          {/* <Route path="*" element={<Home />} /> */}
          <Route
            index
            path="*"
            element={<ProtectedPage element={<Home />} />}
          />

          {/* For unmatched routes - 404 */}
          <Route path="/*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
