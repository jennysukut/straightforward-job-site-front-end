import "./ModalWithForm.css";

function ModalWithForm({
  activeModal,
  setActiveModal,
  closeActiveModal,
  children,
  onSubmit,
}) {
  return (
    <div
      className="modal"
      // className={`modal modal_type_${title} ${isOpen ? "modal_opened" : ""}`}
    >
      <div className="modal__container">
        <button
          className="modal__close-button"
          onClick={closeActiveModal}
        ></button>
        <h1 className="modal__title">login</h1>
        <form className="modal__form" onSubmit={onSubmit}>
          {children}
          <button className="modal__submit-button">enter</button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
