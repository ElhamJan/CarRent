import { Fragment } from "react";
import Footer from "../Footer";
import Header from "../Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="px-6">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
