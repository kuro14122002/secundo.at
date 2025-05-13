import './style.css';
import '@splidejs/splide/css';

document.querySelector('#app').innerHTML = `
  <div class="min-h-screen bg-white">
    <header class="fixed top-0 left-0 right-0 z-50 bg-white">
      <nav class="container mx-auto px-4 py-6 flex items-center justify-between">
        <div class="flex items-center">
          <img src="/assets/logo.webp" alt="Secundo" class="h-12" />
        </div>
        <div class="hidden md:flex items-center space-x-8">
          <a href="#" class="text-gray-800 hover:text-gray-600">Home</a>
          <a href="#" class="text-gray-800 hover:text-gray-600">About</a>
          <a href="#" class="text-gray-800 hover:text-gray-600">Services</a>
          <a href="#" class="text-gray-800 hover:text-gray-600">Contact</a>
        </div>
      </nav>
    </header>

    <main class="pt-24">
      <section class="hero min-h-[80vh] bg-gray-100 relative">
        <div class="container mx-auto px-4 py-20">
          <h1 class="text-5xl font-bold mb-6">Welcome to Secundo</h1>
          <p class="text-xl text-gray-700 max-w-2xl">Your trusted partner in construction and development.</p>
        </div>
      </section>
    </main>
  </div>
`;