import Games from "../../Components/Games/Games";
import { searchIcon } from "../../assets/icons";
import style from "./Home.module.css";

function Home() {
  return (
    <>
      <h1>Welcome Boardgame_Seal!</h1>
      <p className={style.article}>원하는 보드게임을 찾아보세요.</p>
      <p className={style.article}>
        지금까지 해본 보드게임을 저장하고 해보고 싶은 보드게임을 찜하기로
        등록하세요 !
      </p>

      <div className={style["input-wrap"]}>
        <button>
          <img src={searchIcon} alt="검색" width={24} height={24} />
        </button>
        <input type="text" id="search" autoComplete="off" />
      </div>

      <Games />
    </>
  );
}

export default Home;
