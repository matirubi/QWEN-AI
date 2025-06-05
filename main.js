import React from 'https://esm.sh/react@18' 
import ReactDOM from 'https://esm.sh/react-dom@18/client' 

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="pt-20 pb-24 px-4 md:px-8 text-center bg-gradient-to-b from-gray-900 via-purple-950 to-gray-900">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Qwen AI</span> <br />
          The Future is Now.
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300 mb-8">
          A Solana-based memecoin powered by AI vibes and community energy. Built for the future of Web3.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://pump.fun" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-3 rounded-full font-bold hover:shadow-lg hover:shadow-blue-500/30 transition"
          >
            Buy on pump.fun
          </a>
          <a
            href="#about"
            className="border border-purple-500 px-8 py-3 rounded-full font-bold hover:bg-purple-500/10 transition"
          >
            Learn More
          </a>
        </div>
        <div className="mt-12">
          <img
            src="https://placehold.co/600x300/1a1a1a/ffffff?text=QWEN+AI+TOKEN"
            alt="Token Visualization"
            className="mx-auto rounded-lg shadow-xl"
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-8 bg-gray-800">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What is <span className="text-blue-400">Qwen AI?</span></h2>
          <p className="text-lg text-gray-300 mb-8">
            Qwen AI is a meme token built on the Solana blockchain — fast, cheap, and scalable. It's more than just a coin; it's a movement fueled by AI culture and decentralized innovation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-gray-900 p-6 rounded-lg border border-purple-800 hover:border-purple-500 transition">
              <h3 className="text-xl font-semibold mb-2">Built on Solana</h3>
              <p className="text-gray-400">Fast transactions, low fees, and high scalability.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-purple-800 hover:border-purple-500 transition">
              <h3 className="text-xl font-semibold mb-2">Community Driven</h3>
              <p className="text-gray-400">No team tokens. No VC. Just pure decentralization.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-purple-800 hover:border-purple-500 transition">
              <h3 className="text-xl font-semibold mb-2">Powered by AI</h3>
              <p className="text-gray-400">Inspired by artificial intelligence and futuristic tech.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 bg-black border-t border-purple-900 text-center text-gray-500">
        <div className="mb-4">
          <img src="https://placehold.co/40x40/FF69B4/FFFFFF?text=AI" alt="Logo" className="inline-block rounded-full mr-2" />
          <span className="font-bold text-white">Qwen AI</span> © {new Date().getFullYear()}
        </div>
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#" className="hover:text-purple-400 transition">Twitter</a> 
          <a href="#" className="hover:text-purple-400 transition">Telegram</a>
          <a href="#" className="hover:text-purple-400 transition">Discord</a>
        </div>
        <p className="text-sm">Not financial advice. DYOR before investing.</p>
      </footer>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
