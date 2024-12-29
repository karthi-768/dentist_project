import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "core-js/modules/web.structured-clone";
import ContactForm from "./ContactForm.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <ContactForm />
  </StrictMode>
);
