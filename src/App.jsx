import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-gradient-to-r from-indigo-600 to-blue-600 shadow">
        <div className="container mx-auto px-6 py-6">
          <h1 className="text-4xl font-bold text-white">John Adams</h1>
          <p className="text-indigo-100 text-lg">Web Developer & Designer</p>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8 bg-gradient-to-b from-blue-100 to-white">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-gray-700 text-lg">Hi, I'm John Adams, a passionate web developer and designer. I love creating beautiful and functional websites that provide great user experiences.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Skills</h2>
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Web Development</h3>
              <p className="text-gray-700 text-lg">HTML, CSS, JavaScript, React</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Design</h3>
              <p className="text-gray-700 text-lg">UI/UX Design, Wireframing, Prototyping</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Projects</h2>
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Project 1</h3>
              <p className="text-gray-700 text-lg">A brief description of Project 1.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Project 2</h3>
              <p className="text-gray-700 text-lg">A brief description of Project 2.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Contact</h2>
          <p className="text-gray-700 text-lg mb-4">You can reach me at:</p>
          <ul className="space-y-2">
            <li>Email: john@example.com</li>
            <li>Phone: 123-456-7890</li>
          </ul>
        </section>
      </main>

      <footer className="bg-gradient-to-r from-indigo-800 to-blue-800 shadow-lg mt-12">
        <div className="container mx-auto px-6 py-6 flex justify-between items-center">
          <p className="text-indigo-100 text-lg">&copy; 2023 John Adams. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="https://github.com/johnadams" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-2xl text-blue-300 hover:text-white" />
            </a>
            <a href="https://twitter.com/johnadams" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-2xl text-blue-300 hover:text-white" />
            </a>
            <a href="https://linkedin.com/in/johnadams" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl text-blue-300 hover:text-white" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
