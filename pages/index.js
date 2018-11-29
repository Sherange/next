import dynamic from "next/dynamic";
import MainLayout from "../layouts/MainLayout";
import Typing from "../components/Typing";

const Carousel = dynamic(() => import("../components/Carousel"), {
  ssr: false
});

const App = () => {
  return (
    <MainLayout>
      <div className="container-1">
        <Carousel />
        <Typing />
      </div>
      <style jsx>{`
        .container-1 {
          display: flex;
          flex-direction: column;
          min-height: 100%;
        }
      `}</style>
    </MainLayout>
  );
};

export default App;
