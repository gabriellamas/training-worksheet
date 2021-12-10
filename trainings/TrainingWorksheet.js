import styles from "./TrainingWorksheet.module.css";
import Trainings from "../api/Trainings";

const TrainingWorksheet = ({ training }) => (
  <>
    {training === "a" && <h2>AAA</h2>}
    {training === "b" && <h2>BBB</h2>}
    {training === "c" && <h2>CCC</h2>}
    {training === "d" && <h2>DDD</h2>}
    {training === "e" && <h2>EEE</h2>}
  </>
);

export default TrainingWorksheet;
