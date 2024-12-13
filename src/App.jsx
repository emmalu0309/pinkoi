import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AppLayout from "./components/AppLayout";
import ProductPage from "./pages/ProductPage";
import Login from "./components/Login";
import DeleteUser from "./components/DeleteUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/productpage" element={<ProductPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/deleteUser" element={<DeleteUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
