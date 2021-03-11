import { useState, useEffect } from "react";
import styles from "../styles/components/Countdown.module.css";

let countdownTimeout: NodeJS.Timeout;

export function Countdown() {
  const [time, setTime] = useState(0.1 * 60);
  const [isActive, setIsActive] = useState(false);

  const minutes = Math.floor(time / 60); // recebe os minutos redondo
  const seconds = time % 60; // recebe os segundos
  const [hasFinished, setHasFinished] = useState(false);

  /**
   * 1 - recebe o time
   * 2 - converte para string (String())
   * 3 - verifica se o valor tem 2 caracteres, se não
   * adiciona o 0 no início (padStart())
   * 3 - separa os caracteres e devolve um array (split())
   */
  const fragmentTime = (time: Number) =>
    String(time).padStart(2, "0").split("");

  const [minuteLeft, minuteRight] = fragmentTime(minutes);
  const [secondsLeft, secondsRight] = fragmentTime(seconds);

  /**
   * Starta o contador
   */
  const startCountDown = () => {
    setIsActive(true);
  };

  /**
   * Reseta o contador
   */
  const resetCountDown = () => {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(0.1 * 60);
  };

  /**
   * Inicia o contador caso as dependências active e time
   * sejam alteradas
   */
  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
    }
  }, [isActive, time]);

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondsLeft}</span>
          <span>{secondsRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button disabled className={styles.countdownButton}>
          Ciclo encerrado
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              type="button"
              className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
              onClick={resetCountDown}
            >
              Abandonar ciclo
            </button>
          ) : (
            <button
              type="button"
              className={styles.countdownButton}
              onClick={startCountDown}
            >
              Iniciar ciclo
            </button>
          )}
        </>
      )}
    </div>
  );
}
