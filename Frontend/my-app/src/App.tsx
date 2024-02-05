import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import Login from "./components/login";
import Courses from "./components/courses";
import Portfolio from "./components/portfolio";
import Aboutus from "./components/aboutus";
import Pricing from "./components/pricing";
import Register from "./components/register";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LayoutsWithHeader />}>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* <Route path="*" element={<NotFound />} />
          <Route exact path="/" element={<Home />} />
        </Route>
        <Route exact path="/login" element={<LoginScreen />} />
        <Route exact path="/register" element={<RegisterScreen />} />
        <Route
          exact
          path="/forgotpassword"
          element={<ForgotPasswordScreen />}
        />
        <Route exact path="/resetpassword" element={<ResetPasswordScreen />} /> */}
      </Routes>
    </Router>
  );
};

const LayoutsWithHeader = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
