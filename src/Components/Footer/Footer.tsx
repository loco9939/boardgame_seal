import style from "./Footer.module.css";

function Footer() {
  return (
    <footer>
      <div className={style.wrap}>
        <p>대표자: 김이주</p>
        <p>E-Mail:kls9939@naver.com</p>
        <p>Copyright (C) 분리수거왕 All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
