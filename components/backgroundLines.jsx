export default function BackgroundLines() {
  return (
    <div className="top-0 left-0 h-screen right-0 bg-dark-blue">
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
      <style jsx>{`
        .lines {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 100%;
          margin: auto;
          width: 90vw;
        }

        .line {
          position: absolute;
          width: 1px;
          height: 100%;
          top: 0;
          left: 50%;
          background: rgba(255, 255, 255, 0.1);
          overflow: hidden;
        }

        .line::after {
          content: "";
          display: block;
          position: absolute;
          height: 15vh;
          width: 100%;
          top: -50%;
          left: 0;
          background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #ffffff 75%, #ffffff 100%);
          -webkit-animation: drop 7s 0s infinite;
          animation: drop 7s 0s infinite;
          -webkit-animation-fill-mode: forwards;
          animation-fill-mode: forwards;
          -webkit-animation-timing-function: cubic-bezier(0.4, 0.26, 0, 0.97);
          animation-timing-function: cubic-bezier(0.4, 0.26, 0, 0.97);
        }

        .line:nth-child(1) {
          margin-left: -25%;
        }

        .line:nth-child(1)::after {
          -webkit-animation-delay: 2s;
          animation-delay: 2s;
        }

        .line:nth-child(3) {
          margin-left: 25%;
        }

        .line:nth-child(3)::after {
          -webkit-animation-delay: 2.5s;
          animation-delay: 2.5s;
        }

        @-webkit-keyframes drop {
          0% {
            top: -50%;
          }
          100% {
            top: 110%;
          }
        }

        @keyframes drop {
          0% {
            top: -50%;
          }
          100% {
            top: 110%;
          }
        }
       
      `}</style>
    </div>
  );
}



