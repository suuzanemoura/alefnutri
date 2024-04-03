import { HashLink } from "react-router-hash-link";

export default function NotFoundPage() {
  return (
    <main className="w-100 min-vh-100 d-flex flex-column align-items-center justify-content-center not-found-container">
      <h1 className="fs-1 text-id-alef-red-300">404</h1>
      <h2 className="fs-2">Página não encontrada</h2>
      <p className="mt-6">
        Desculpe, não encontramos a página que você procura.
      </p>
      <div className="mt-10 d-flex align-items-center justify-content-center gap-5">
        <HashLink
          smooth
          to="/"
        >
          <button
            className="btn btn-id-alef-blue-300"
            role="button"
          >
            Voltar para o início
          </button>
        </HashLink>
      </div>
    </main>
  );
}
