import style from "./Header.module.css";

function Header() {
  return (
    <header>
      <div className={style.wrap}>
        <a href="/" className={style.logo}>
          Boardgame_seal
        </a>
        {/* <img src="" alt="" /> */}
        <a href="/login">로그인</a>
      </div>
    </header>
  );
}

export default Header;
