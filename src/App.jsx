import BookDetailPage from "./pages/BookDetailPage";
import BooksPage from "./pages/BooksPage";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage/index.jsx";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <Router>
      {/* <marquee> Hello ......</marquee> */}
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/books"
          element={<ProtectedRoute Component={BooksPage}></ProtectedRoute>}
        ></Route>
        <Route
          path="/books/:id"
          element={<ProtectedRoute Component={BookDetailPage}></ProtectedRoute>}
        ></Route>
        <Route path="*" element={<ErrorPage />}></Route>
        <Route path="/registration" element={<RegistrationPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route
          path="/profile"
          element={<ProtectedRoute Component={ProfilePage}></ProtectedRoute>}
        ></Route>
        <Route
          path="/about"
          element={<ProtectedRoute Component={AboutPage}></ProtectedRoute>}
        ></Route>
        <Route
          path="/contact"
          element={<ProtectedRoute Component={ContactPage}></ProtectedRoute>}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
