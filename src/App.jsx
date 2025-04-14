import { Routes, Route, useLocation } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Header from "./components/layout/Header";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Fav from "./pages/Fav";
import Chat from "./pages/Chat";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import Setting from "./pages/Setting";
import Language from "./pages/Language";
import ChangePassword from "./pages/ChangePassword";

const App = () => {
  const location = useLocation();
  const isAuthPage =
    location.pathname === "/signin" || location.pathname === "/signup";

  return (
    <>
      {!isAuthPage && <Header />}
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<Home />} />
        <Route path="/fav" element={<Fav />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/editProfile" element={<EditProfile />} />
        <Route path="/settings" element={<Setting />} />
        <Route path="/language" element={<Language />} />
        <Route path="/changePassword" element={<ChangePassword />} />
      </Routes>
    </>
  );
};

export default App;
