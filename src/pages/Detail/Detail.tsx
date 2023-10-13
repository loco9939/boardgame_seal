import { checkIcon, heartIcon, testImg } from "../../assets/icons";
import style from "./Detail.module.css";

function Detail() {
  return (
    <div className={style.wrap}>
      <div className={style["img-wrap"]}>
        <img
          className={style.img}
          src={testImg}
          alt="test-img"
          width={150}
          height={150}
        />
        <button>
          <img
            className={style.icon}
            src={heartIcon}
            alt="like"
            width={20}
            height={20}
          />
          찜하기
        </button>
        <button className={style.btn}>
          <img
            className={style.icon}
            src={checkIcon}
            alt="check"
            width={20}
            height={20}
          />
          해봤어요!
        </button>
      </div>

      <ul className={style.info}>
        <li>이름: 7 duals</li>
        <li>인원수: 2 ~ 4인</li>
        <li>난이도: 쉬움</li>
        <li>소요시간: 60분</li>
      </ul>
    </div>
  );
}

export default Detail;
