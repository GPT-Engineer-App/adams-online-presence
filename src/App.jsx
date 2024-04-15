import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-gradient-to-r from-pink-500 via-red-400 to-yellow-500 shadow">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-5xl font-bold text-white tracking-wide">John Adams</h1>
          <p className="text-gray-200 text-xl tracking-wide">Attorney at Law</p>
        </div>
      </header>

      <main className="container mx-auto px-8 py-12 bg-white">
        <section className="mb-12">
          <h2 className="text-4xl font-bold mb-8 text-navy-800">About Me</h2>
          <p className="text-gray-700 text-xl leading-relaxed mb-8">I am John Adams, an experienced attorney specializing in corporate law and litigation. I provide comprehensive legal services to businesses and individuals, ensuring their rights and interests are protected.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-4xl font-bold mb-8 text-navy-800">Skills</h2>
          <div className="grid grid-cols-2 gap-12">
            <div className="bg-gray-100 p-8 rounded-lg shadow">
              <h3 className="text-2xl font-semibold mb-4 text-navy-800">Corporate Law</h3>
              <p className="text-gray-700">Advising businesses on legal matters, contracts, and compliance.</p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow">
              <h3 className="text-2xl font-semibold mb-4 text-navy-800">Litigation</h3>
              <p className="text-gray-700">Representing clients in court proceedings and dispute resolution.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-4xl font-bold mb-8 text-navy-800">Projects</h2>
          <div className="grid grid-cols-2 gap-12">
            <div className="bg-gray-100 p-8 rounded-lg shadow">
              <h3 className="text-2xl font-semibold mb-4 text-navy-800">Notable Case 1</h3>
              <p className="text-gray-700">Successfully represented a client in a high-stakes corporate litigation.</p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow">
              <h3 className="text-2xl font-semibold mb-4 text-navy-800">Notable Case 2</h3>
              <p className="text-gray-700">Negotiated a favorable settlement for a client in a contract dispute.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-bold mb-8 text-navy-800">Contact</h2>
          <p className="text-gray-700 text-xl mb-6">Contact Information:</p>
          <ul className="space-y-4 text-lg">
            <li>
              <strong>Email:</strong> john.adams@lawfirm.com
            </li>
            <li>
              <strong>Phone:</strong> (123) 456-7890
            </li>
            <li>
              <strong>Office Address:</strong>
              <br />
              123 Main Street, Suite 100
              <br />
              New York, NY 10001
            </li>
          </ul>
        </section>
      </main>

      <footer className="bg-gradient-to-r from-pink-500 via-red-400 to-yellow-500 shadow-lg mt-16">
        <div className="container mx-auto px-8 py-8 flex justify-between items-center">
          <p className="text-yellow-200 text-xl tracking-wide">&copy; 2023 John Adams. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="https://github.com/johnadams" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-3xl text-purple-300 hover:text-purple-400 transition duration-300" />
            </a>
            <a href="https://twitter.com/johnadams" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-3xl text-blue-300 hover:text-blue-400 transition duration-300" />
            </a>
            <a href="https://linkedin.com/in/johnadams" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-3xl text-teal-300 hover:text-teal-400 transition duration-300" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
