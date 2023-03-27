import AdminPage from "@pages/admin";
import UserPage from "@pages/user";
import {
  BrowserRouter, Route, Routes,
} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/*" element={<AdminPage />} />
        <Route path="/*" element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
