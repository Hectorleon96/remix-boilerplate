export default function Footer() {
  return (
    <footer className="w-full bg-gray-800 py-4 mt-12">
      <div className="px-4 text-center text-sm">
        <p>
          Demo de productos usando la{" "}
          <a
            href="https://fakeapi.platzi.com/en"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#d77a61] hover:underline"
          >
            Platzi Fake Store API
          </a>
          .
        </p>
        <p className="mt-2">Creado con ❤️ usando Remix y Tailwind CSS.</p>
      </div>
    </footer>
  );
}
