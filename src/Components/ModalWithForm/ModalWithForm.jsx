import "./ModalWithForm.css";

function ModalWithForm({
  activeModal,
  setActiveModal,
  closeActiveModal,
  children,
  onSubmit,
  title,
  isOpen,
  buttonColor,
}) {
  console.log(isOpen);

  return (
    <div
      className={`modal ${isOpen ? "modal__opened " : ""}`}
      // modal_type_${title}
    >
      <div className="modal__container">
        <button
          className="modal__close-button"
          onClick={closeActiveModal}
        ></button>
        <h1 className="modal__title">{title}</h1>
        <form className="modal__form" onSubmit={onSubmit}>
          {children}
          <button className={`modal__submit-button ${buttonColor}`}>
            enter
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
