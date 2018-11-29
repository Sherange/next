import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const MainLayout = (props) => {
  return (
    <React.Fragment>
      <NavBar />
        {props.children}
      <Footer />
    </React.Fragment>
  );
};

export default MainLayout;
