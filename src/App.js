import { CountdownCircleTimer } from "react-countdown-circle-timer";

import "./styles.css";

const secondsToDhms = (value) => {
  const seconds = Number(value);
  const d = Math.floor(seconds / (3600 * 24));
  const h = Math.floor((seconds % (3600 * 24)) / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);

  const dDisplay = d > 0 ? d + (d == 1 ? " día, " : " días, ") : "";
  const hDisplay = h > 0 ? h + (h == 1 ? " hora, " : " horas, ") : "";
  const mDisplay = m > 0 ? m + (m == 1 ? " minuto, " : " minutos, ") : "";
  const sDisplay = s > 0 ? s + (s == 1 ? " segundo" : " segundos") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
}

const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return (
      <div className="timer">
        <span role="img">🎉</span> Ya ha llegado el momento!
      </div>
    );
  }

  return (
    <div className="timer">
      <div className="value">{secondsToDhms(remainingTime)}</div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <h1>Aplicación de las nuevas tarifas</h1>
      <div className="timer-wrapper">
        <CountdownCircleTimer
          isPlaying
          duration={(new Date(2021, 5, 1) - new Date()) / 1000}
          colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
          onComplete={() => [true, 1000]}
          size={500}
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>
    </div>
  );
}

export default App;
