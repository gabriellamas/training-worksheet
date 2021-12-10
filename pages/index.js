/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import styles from "../styles/Home.module.css";
import TrainingWorksheet from "../components/TrainingWorksheet";
import Trainings from "../api/Trainings";
import { useEffect, useState } from "react";

export default function Home() {
  const handleChangeTrainingType = (e) => {
    setTrainingTypeSelected(e.target.value);
  };

  const [trainingTypeSelected, setTrainingTypeSelected] = useState("a");
  const [trainingList, setTrainingList] = useState([]);

  useEffect(() => {
    setTrainingList(
      Trainings.filter((training) => training.type === trainingTypeSelected)
    );
  }, [trainingTypeSelected]);

  return (
    <div>
      <Head>
        <title>Training Worksheet</title>
        <meta name="description" content="Training Worksheet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Training Worksheet</h1>
        <p>Who says it won't work?? Biirrll!</p>
        <div className={styles.worksheetContainer}>
          <nav>
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
          </nav>
          <div className={styles.content}>
            <TrainingWorksheet trainingList={trainingList[0]} />
          </div>
        </div>
      </main>
    </div>
  );
}
