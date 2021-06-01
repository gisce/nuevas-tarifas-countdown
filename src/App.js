import { CountdownCircleTimer } from "react-countdown-circle-timer";

import "./styles.css";

const secondsToDhms = (value) => {
  const seconds = Number(value);
  const d = Math.floor(seconds / (3600 * 24));
  const h = Math.floor((seconds % (3600 * 24)) / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);

  const dDisplay = d > 0 ? d + (d == 1 ? " día, " : " días ") : "";
  const hDisplay = h > 0 ? h + (h == 1 ? " hora, " : " horas ") : "";
  const mDisplay = m > 0 ? m + (m == 1 ? " minuto, " : " minutos ") : "";
  const sDisplay = s > 0 ? s + (s == 1 ? " segundo" : " segundos") : "";
  return { days: dDisplay, hours: hDisplay, minutes: mDisplay, seconds: sDisplay };
}

const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return (
      <div className="timer">
        <span role="img">🤦‍♂️</span> Pues si que entraron....
      </div>
    );
  }

  const { days, hours, minutes, seconds } = secondsToDhms(remainingTime);

  return (
    <div className="timer">
      <div className="value">
        {days}<br />{hours}<br />{minutes}<br />{seconds}
      </div>
    </div>
  );
};

function App() {
  const endDate = new Date(2021, 5, 1);
  const now = new Date();
  return (
    <div className="App">
      <h1>Aplicación de las nuevas tarifas</h1>
      {now < endDate &&
        <div className="timer-wrapper">
          <CountdownCircleTimer
            isPlaying
            duration={(endDate - new Date(2021, 4, 24)) / 1000}
            initialRemainingTime={(endDate - now) / 1000}
            colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
            onComplete={() => [true, 1000]}
            strokeWidth={26}
            size={300}
          >
            {renderTime}
          </CountdownCircleTimer>
        </div>
      }
      {now > endDate &&
        <h1><span>🤦‍♂️</span>Pues sí que entraron... que la fuerza te acompañe</h1>
      }
      <h2><span>🙅‍♂️</span> #novanaentrar</h2>
      <h2><span>🕹️</span> #estonoesunjuego</h2>
      <h2><span>🆙</span> #updateall</h2>
    </div>
  );
}

export default App;
