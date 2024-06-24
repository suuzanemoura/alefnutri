import { footerConfig } from "../../config/footer";

export default function Footer() {
  return (
    <footer className="bg-id-alef-gray-100 p-4">
      <p className="text-id-alef-blue-500 w-100 h-100 d-flex justify-content-center align-items-center m-0 fs-7 text-center">
        © {new Date().getFullYear()} {footerConfig.copyright_name}.{" "}
        <br className="d-md-none" />
        Todos os direitos reservados.
      </p>
    </footer>
  );
}
