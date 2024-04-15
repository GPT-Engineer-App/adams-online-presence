import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-gradient-to-r from-navy-900 to-navy-800 shadow">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-5xl font-bold text-white tracking-wide">John Adams</h1>
          <p className="text-gold-200 text-xl tracking-wide">Web Developer & Designer</p>
        </div>
      </header>

      <main className="container mx-auto px-8 py-12 bg-gradient-to-b from-navy-100 to-white bg-texture">
        <section className="mb-12">
          <h2 className="text-4xl font-bold mb-8 text-navy-800">About Me</h2>
          <p className="text-navy-600 text-xl leading-relaxed mb-8">Hi, I'm John Adams, a passionate web developer and designer. I specialize in crafting elegant and functional websites that provide exceptional user experiences.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-4xl font-bold mb-8 text-navy-800">Skills</h2>
          <div className="grid grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-3xl font-semibold mb-6 text-navy-800">Web Development</h3>
              <p className="text-navy-600 text-xl">HTML, CSS, JavaScript, React</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-3xl font-semibold mb-6 text-navy-800">Design</h3>
              <p className="text-navy-600 text-xl">UI/UX Design, Wireframing, Prototyping</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-4xl font-bold mb-8 text-navy-800">Projects</h2>
          <div className="grid grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-3xl font-semibold mb-6 text-navy-800">Project 1</h3>
              <p className="text-navy-600 text-xl">A brief description of Project 1.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-3xl font-semibold mb-6 text-navy-800">Project 2</h3>
              <p className="text-navy-600 text-xl">A brief description of Project 2.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-bold mb-8 text-navy-800">Contact</h2>
          <p className="text-navy-600 text-xl mb-6">Get in touch with me:</p>
          <ul className="space-y-4 text-xl">
            <li className="flex items-center">
              <FaEnvelope className="text-gold-500 mr-2" />
              <a href="mailto:john@example.com" className="text-navy-600 hover:text-navy-800 transition duration-300">
                john@example.com
              </a>
            </li>
            <li className="flex items-center">
              <FaPhone className="text-gold-500 mr-2" />
              <a href="tel:123-456-7890" className="text-navy-600 hover:text-navy-800 transition duration-300">
                123-456-7890
              </a>
            </li>
          </ul>
        </section>
      </main>

      <footer className="bg-gradient-to-r from-navy-900 to-navy-800 shadow-lg mt-16">
        <div className="container mx-auto px-8 py-8 flex justify-between items-center">
          <p className="text-gold-200 text-xl tracking-wide">&copy; 2023 John Adams. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="https://github.com/johnadams" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-3xl text-gold-300 hover:text-gold-400 transition duration-300" />
            </a>
            <a href="https://twitter.com/johnadams" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-3xl text-gold-300 hover:text-gold-400 transition duration-300" />
            </a>
            <a href="https://linkedin.com/in/johnadams" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-3xl text-gold-300 hover:text-gold-400 transition duration-300" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
