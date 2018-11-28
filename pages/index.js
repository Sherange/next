import dynamic from "next/dynamic";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Carousel = dynamic(() => import("../components/Carousel"), {
  ssr: false
});

const App = () => {
  return (
    <div className="container-1">
      <div className="box-1">
        <NavBar />
      </div>
      <div className="box-2">
        {typeof window !== "undefined" ? <Carousel /> : null}
      </div>
      <div className="box-3">
        {typeof window !== "undefined" ? (
          <div className="typebox">
            <p className="typewriter">I am a developer</p>
          </div>
        ) : null}
      </div>
      <div className="box-4">
        <Footer />
      </div>
      <style jsx>{`
        .container-1 {
          display: flex;
          flex-direction: column;
          min-height: 100%; 
        }
        .box-1 {
          flex : 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .box-2 {
          flex : 1;
          display: flex;
          flex-direction: column;
          justify-content: center;

          padding 1rem;
        }

        .box-3 {
          flex : 1;
          display: flex;
          flex-direction: column;
          justify-content: center;

          padding 1rem;
        }
        .box-4 {  
          flex : 1;
          color : #fff;
          display: flex;
          flex-direction: row;
          justify-content: center;
          background-color : #2196f3;

          bottom: 0;
          left: 0;
          right: 0;
        }
        .typebox {
          width: fit-content;
          text-align: center;
          margin: auto;
        }
        .typewriter {
          color : #2196f3;
          font-size: 6rem;
          overflow: hidden; /* Ensures the content is not revealed until the animation */
          border-right: 4px solid orange; /* The typwriter cursor */
          white-space: nowrap; /* Keeps the content on a single line */
          margin: 0 auto;
          letter-spacing: .15em; /* Adjust as needed */
          animation: 
            typing 3.5s steps(30, end),
            blink-caret .75s step-end infinite;
        }

        @media only screen 
          and (min-width: 1200px) 
          and (max-width: 1600px) {
            .typewriter {
              font-size: 5rem;
            }
        }

        @media only screen 
          and (min-width: 320px) 
          and (max-width: 767px) {
            .typewriter {
              font-size: 2rem;
            }
        }

        @media only screen 
          and (min-width: 768px) 
          and (max-width: 1024px) {
            .typewriter {
              font-size: 4rem;
            }
        }

        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }
        
        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: orange; }
        }
      `}</style>
    </div>
  );
};

export default App;
