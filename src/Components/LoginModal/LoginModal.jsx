import "./LoginModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function LoginModal({ activeModal, setActiveModal, closeActiveModal }) {
  const handleSubmit = () => {
    console.log("submitting");
  };

  return (
    <ModalWithForm
      activeModal={activeModal}
      setActiveModal={setActiveModal}
      closeActiveModal={closeActiveModal}
      onSubmit={handleSubmit}
    >
      <div className="login-modal">
        <fieldset className="modal__fieldset">
          <label htmlFor="loginEmail" className="modal__input-field">
            email*
            <input
              type="text"
              className="modal__input"
              placeholder="email"
              id="loginEmail"
              //   value={email}
              //   onChange={handleEmail}
            />
            <span className="modal__error"></span>
          </label>
        </fieldset>
        <fieldset className="modal__fieldset">
          <label htmlFor="loginPassword" className="modal__input-field">
            password*
            <input
              type="password"
              className="modal__input"
              placeholder="password"
              id="loginPassword"
              //   value={password}
              //   onChange={handlePassword}
            />
            <span className="modal__error"></span>
          </label>
        </fieldset>
      </div>
    </ModalWithForm>
  );
}

export default LoginModal;
