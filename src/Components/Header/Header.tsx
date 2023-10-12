import "./Header.css";

function Header() {
  return (
    <header>
      <div className="wrap">
        <a href="/">Boardgame_seal</a>
        {/* <img src="" alt="" /> */}
        <a href="/login">로그인</a>
      </div>
    </header>
  );
}

export default Header;
