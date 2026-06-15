import "../../styles/organisms/pageLayout.css";
import Navbar from "./navbar";
import Footer from "./footer";

const PageLayout = ({
  children
}) => {
  return (
    <>
      <Navbar />

      <main className="container my-4 page-layout-container">
        {children}
      </main>

      <Footer />
    </>
  );
};

export default PageLayout;