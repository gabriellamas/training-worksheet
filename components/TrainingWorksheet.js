import styles from "./TrainingWorksheet.module.css";

const TrainingWorksheet = ({ trainingList }) => {
  const exercises = trainingList?.exercises;
  return (
    <>
      {exercises?.map((exercise, index) => (
        <div className={styles.exerciseLine} key={index}>
          <p>{exercise.name}</p>
          <p>{exercise.repetition}</p>
        </div>
      ))}
    </>
  );
};

export default TrainingWorksheet;
