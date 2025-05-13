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

      <section class="py-20 bg-white">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 class="text-3xl font-bold mb-6">About Us</h2>
              <p class="text-gray-700 mb-4">Secundo is a leading construction and development company with years of experience in delivering high-quality projects.</p>
              <p class="text-gray-700">We specialize in residential and commercial construction, always focusing on sustainability and innovation.</p>
            </div>
            <div class="relative h-[400px]">
              <img src="https://images.pexels.com/photos/2590716/pexels-photo-2590716.jpeg" alt="Construction site" class="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      <section class="py-20 bg-gray-100">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold mb-12 text-center">Our Services</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-white p-6 rounded-lg shadow-md">
              <h3 class="text-xl font-bold mb-4">Construction</h3>
              <p class="text-gray-700">Expert construction services for residential and commercial projects.</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-md">
              <h3 class="text-xl font-bold mb-4">Development</h3>
              <p class="text-gray-700">Full-service property development from concept to completion.</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-md">
              <h3 class="text-xl font-bold mb-4">Renovation</h3>
              <p class="text-gray-700">Professional renovation services to transform your space.</p>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="bg-gray-800 text-white py-12">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 class="text-xl font-bold mb-4">Secundo</h3>
            <p class="text-gray-400">Building tomorrow's spaces today.</p>
          </div>
          <div>
            <h3 class="text-xl font-bold mb-4">Contact</h3>
            <p class="text-gray-400">Email: info@secundo.at</p>
            <p class="text-gray-400">Phone: +43 123 456 789</p>
          </div>
          <div>
            <h3 class="text-xl font-bold mb-4">Address</h3>
            <p class="text-gray-400">Secundo GmbH</p>
            <p class="text-gray-400">Vienna, Austria</p>
          </div>
          <div>
            <h3 class="text-xl font-bold mb-4">Follow Us</h3>
            <div class="flex space-x-4">
              <a href="#" class="text-gray-400 hover:text-white">LinkedIn</a>
              <a href="#" class="text-gray-400 hover:text-white">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
`;