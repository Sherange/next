const Typing = () => {
  return (
    <section className="typing-wrapper">
      <div className="typebox">
        <p className="typewriter">I am a developer</p>
      </div>
      <style jsx>{`
        .typing-wrapper {
          flex : 1;
          justify-content: center;
          padding 1rem;
        }
        .typebox {
          width: fit-content;
          text-align: center;
          margin: auto;
        }
        .typewriter {
          color: #2196f3;
          font-size: 6rem;
          overflow: hidden; /* Ensures the content is not revealed until the animation */
          border-right: 4px solid orange; /* The typwriter cursor */
          white-space: nowrap; /* Keeps the content on a single line */
          margin: 0 auto;
          letter-spacing: 0.15em; /* Adjust as needed */
          animation: typing 3.5s steps(30, end),
            blink-caret 0.75s step-end infinite;
        }

        @media only screen and (min-width: 1200px) and (max-width: 1600px) {
          .typewriter {
            font-size: 5rem;
          }
        }

        @media only screen and (min-width: 320px) and (max-width: 767px) {
          .typewriter {
            font-size: 2rem;
          }
        }

        @media only screen and (min-width: 768px) and (max-width: 1024px) {
          .typewriter {
            font-size: 4rem;
          }
        }

        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        @keyframes blink-caret {
          from,
          to {
            border-color: transparent;
          }
          50% {
            border-color: orange;
          }
        }
      `}</style>
    </section>
  );
};

export default Typing;
