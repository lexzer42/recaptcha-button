import { useState } from "react";
import "./App.css";
import ReCAPTCHA from "react-google-recaptcha";

function App() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const onChange = () => {
    setIsVerified(true);
  };

  const siteKey = import.meta.env.VITE_RECAPTCHA_SITEKEY;

  const handleFormSubmit = () => {
    setIsFormSubmitted(true);
  };

  const handleAlert = () => {
    if (isVerified) {
      // Aquí puedes realizar cualquier acción de envío de formulario que desees
      alert("Formulario enviado");
    } else {
      alert("Por favor, completa la verificación ReCAPTCHA primero.");
    }
  };

  return (
    <div className="App">
      {!isFormSubmitted && (
        <button onClick={handleFormSubmit}>Enviar</button>
      )}
      {isFormSubmitted && !isVerified && (
        <ReCAPTCHA sitekey={siteKey} onChange={onChange} />
      )}
      {isFormSubmitted && isVerified && handleAlert()}
    </div>
  );
}

export default App;
