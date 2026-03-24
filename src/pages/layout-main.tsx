import { Outlet } from "react-router";
import Header from "../core-components/Header";
import MainContent from "../core-components/main-content";
import Footer from "../core-components/footer";

export default function LayoutMain() {
  return (
    <>
      <Header />

      <MainContent>
        <Outlet />
      </MainContent>

      <Footer />
    </>
  );
}
