export function Form() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // aqui você lida com o envio (ex.: fetch/axios)
    // const data = Object.fromEntries(new FormData(e.currentTarget));
    // console.log(data);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="mb-8 text-3xl font-bold tracking-tight text-gray-900">
          Contato
        </h1>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Formulário */}
          <form
            id="formulario"
            onSubmit={handleSubmit}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <div className="mb-5">
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Nome
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Digite seu nome"
                className="block w-full rounded-xl border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
              />
              <span id="errNome" className="mt-1 block text-sm text-red-600" />
            </div>

            <div className="mb-5">
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Digite seu email"
                className="block w-full rounded-xl border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
              />
              <span id="errEmail" className="mt-1 block text-sm text-red-600" />
            </div>

            <div className="mb-5">
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Assunto
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Digite o assunto da mensagem"
                className="block w-full rounded-xl border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
              />
              <span
                id="errSubject"
                className="mt-1 block text-sm text-red-600"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Digite sua mensagem"
                className="block min-h-[120px] w-full rounded-xl border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
              />
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Enviar
            </button>
          </form>

          {/* Mapa + Endereço */}
          <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <address className="not-italic">
              <p className="text-lg font-medium text-gray-900">
                Engenheiro Roberto Freire, 1000
              </p>
              <p className="text-gray-600">Natal - RN</p>
            </address>

            <div className="mt-5 overflow-hidden rounded-xl">
              <iframe
                id="mapa"
                title="Mapa - Av. Paulista, 1000"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127020.26713836301!2d-35.30460793349408!3d-5.801411001723412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b3aaac26460531%3A0x5d8b404cf00fed69!2sNatal%2C%20State%20of%20Rio%20Grande%20do%20Norte!5e0!3m2!1sen!2sbr!4v1762351022221!5m2!1sen!2sbr"
                className="h-64 w-full md:h-80"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                frameBorder="0"
                allowFullScreen
                aria-hidden="false"
                tabIndex={0}
              />
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
export default Form;
