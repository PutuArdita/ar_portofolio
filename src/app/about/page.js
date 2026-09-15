// import Navbar from "../components/Navbar";

export default function About() {
  return (
    <>
      {/* <Navbar name="Ardita" /> */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-3xl text-center">
          <p className="text-lg mb-3">About Page</p>

          <h1 className="text-5xl md:text-7xl font-bold mb-4">Ardita</h1>

          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Frontend Developer
          </h2>

          <p className="text-lg leading-8 mb-8">
            Saya sedang belajar dan membangun website menggunakan React dan
            Next.js.
          </p>

          <button className="px-6 py-3 rounded-lg font-medium">
            View My Projects
          </button>
        </div>
      </section>
    </>
  );
}
