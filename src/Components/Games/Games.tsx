import { testImg } from "../../assets/icons";
import style from "./Games.module.css";

function Games() {
  return (
    <div className={style.wrap}>
      <Game />
      <Game />
      <Game />
    </div>
  );
}

export default Games;

function Game() {
  return (
    <div className={style.game}>
      <img src={testImg} alt="test-img" width={150} />
      <p>Game Name</p>
    </div>
  );
}
