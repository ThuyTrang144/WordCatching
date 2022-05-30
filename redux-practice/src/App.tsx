import AdminPage from "@pages/admin";
import UserPage from "@pages/user";
// import Welcome from "@pages/user/features/welcome";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/*" element={<AdminPage />} />
        <Route path="/game/*" element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
