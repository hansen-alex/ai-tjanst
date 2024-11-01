import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

const RootLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </>
  );
};

export default RootLayout;
