export default function Hero({ onOpen }) {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 py-20 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Unlock Your Learning Journey 🚀
      </h1>
      <p className="text-lg md:text-xl mb-8 max-w-2xl">
        Start your free trial today and experience a smarter way to learn.
      </p>
      <button
        onClick={onOpen}
        className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-xl shadow-lg hover:bg-gray-200 transition"
      >
        Start Free Trial
      </button>
    </section>
  );
}
