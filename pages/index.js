import Head from "next/head";
import styles from "../styles/Home.module.css";
import TrainingWorksheet from "../trainings/TrainingWorksheet";
import Trainings from "../api/Trainings";
import { useState } from "react";

export default function Home() {
  const handleChangeTrainingType = (e) => {
    setTraining(e.target.value);
  };

  const [training, setTraining] = useState("a");

  return (
    <div>
      <Head>
        <title>Training Worksheet</title>
        <meta name="description" content="Training Worksheet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>My Worksheet</h1>
        <p>Gymnastics is a great way to improve your health and fitness.</p>

        <div className={styles.worksheetContainer}>
          {Trainings.map((training) => (
            <label onClick={handleChangeTrainingType} key={training.type}>
              <input
                type="radio"
                value={training.type}
                name="training"
                defaultChecked={training.type === "a" && true}
              />
              <span>{training.type}</span>
            </label>
          ))}
          <div className="content">
            <TrainingWorksheet training={training} />
          </div>
        </div>
      </main>
    </div>
  );
}
