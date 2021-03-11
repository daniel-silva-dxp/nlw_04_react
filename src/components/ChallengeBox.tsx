import styles from "../styles/components/ChallengeBox.module.css";

export function ChallengeBox() {
  const hasActiveChallenge = true;
  return (
    <div className={styles.challengeBoxContainer}>
      {hasActiveChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe 400 xp</header>
          <main>
            <img src="icons/peso.svg" alt="Peso" />
            <strong>Novo Desafio</strong>
            <p>
              É agora, bora lá! <br /> Caminhe por 3 minutos e estique suas
              penas <br />
              pra você ficar saudável
            </p>
          </main>
          <footer>
            <button type="button" className={styles.challengeFailedButton}>
              Falhei
            </button>
            <button type="button" className={styles.challengeSucceededButton}>
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>
            Inicie um ciclo <br /> para receber desafios a <br /> serem
            completados.
          </strong>
          <p>
            <img src="icons/level_up.svg" alt="Level Up" />
            Complete-os, ganhe experiêcia e avance de level
          </p>
        </div>
      )}
    </div>
  );
}
