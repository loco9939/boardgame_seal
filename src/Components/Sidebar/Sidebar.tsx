import style from "./Sidebar.module.css";

function Sidebar() {
  return (
    <div className={style.wrap}>
      <ul>
        <li>
          이주님 <br />
          환영합니다!
        </li>
        <li>
          <a href="/like">찜한 게임</a>
        </li>
        <li>
          <a href="/played">해본 게임</a>
        </li>
        <li>
          <button>로그아웃</button>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
