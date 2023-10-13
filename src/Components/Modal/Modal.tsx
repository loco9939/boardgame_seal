import style from "./Modal.module.css";

function Modal() {
  return (
    <div className={style.container}>
      <div className={style.dim} />
      <div className={style.wrap}>
        <div className={style.modal}>
          <p className={style.title}>Modal-Title</p>
          <div className={style["btn-wrap"]}>
            <button>first-btn</button>
            <button>second-btn</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
