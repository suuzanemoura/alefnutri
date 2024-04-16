import { Router } from "./routes/Router";
import { Popover } from "bootstrap";

export default function App() {
  document.querySelectorAll('[data-bs-toggle="popover"]').forEach((popover) => {
    new Popover(popover);
  });

  return <Router />;
}
