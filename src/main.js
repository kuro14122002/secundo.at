import './style.css';
import '@splidejs/splide/css';
import Splide from '@splidejs/splide';

document.querySelector('#app').innerHTML = `
  <div class="min-h-screen bg-white">
    <header class="fixed top-0 left-0 right-0 z-50 bg-white">
      <nav class="container mx-auto px-4 py-6 flex items-center justify-between">
        <div class="flex items-center">
          <img src="/assets/logo.webp" alt="Secundo" class="h-12" />
        </div>
        <div class="hidden md:flex items-center space-x-8">
          <a href="#" class="text-gray-800 hover:text-gray-600">Home</a>
          <a href="#" class="text-gray-800 hover:text-gray-600">Projekte</a>
          <a href="#" class="text-gray-800 hover:text-gray-600">Karriere</a>
          <a href="#" class="text-gray-800 hover:text-gray-600">Über uns</a>
          <a href="#" class="text-gray-800 hover:text-gray-600">Kontakt</a>
        </div>
      </nav>
    </header>

    <main class="pt-24">
      <section class="hero min-h-[90vh] bg-gray-100 relative">
        <div class="container mx-auto px-4 py-20">
          <div class="max-w-3xl">
            <h1 class="text-6xl font-bold mb-8">Wir bauen Ihre Zukunft</h1>
            <p class="text-2xl text-gray-700 mb-12">Innovative Baukonzepte für nachhaltige Entwicklung</p>
            <a href="#" class="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
              Mehr erfahren
            </a>
          </div>
        </div>
      </section>

      <section class="py-20 bg-white">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 class="text-4xl font-bold mb-8">Über Secundo</h2>
              <p class="text-xl text-gray-700 mb-6">
                Wir sind Ihr verlässlicher Partner für anspruchsvolle Bauprojekte. Mit jahrelanger Erfahrung und innovativen Lösungen setzen wir neue Maßstäbe in der Baubranche.
              </p>
              <a href="#" class="text-blue-600 font-semibold text-lg hover:text-blue-700">Mehr über uns →</a>
            </div>
            <div class="relative h-[500px]">
              <img src="https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg" 
                   alt="Construction site" 
                   class="absolute inset-0 w-full h-full object-cover rounded-xl shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      <section class="py-20 bg-gray-50">
        <div class="container mx-auto px-4">
          <h2 class="text-4xl font-bold mb-16 text-center">Unsere Projekte</h2>
          <div class="splide">
            <div class="splide__track">
              <div class="splide__list">
                <div class="splide__slide">
                  <div class="relative h-[400px] rounded-xl overflow-hidden">
                    <img src="https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg" 
                         alt="Project 1" 
                         class="absolute inset-0 w-full h-full object-cover" />
                  </div>
                </div>
                <div class="splide__slide">
                  <div class="relative h-[400px] rounded-xl overflow-hidden">
                    <img src="https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg" 
                         alt="Project 2" 
                         class="absolute inset-0 w-full h-full object-cover" />
                  </div>
                </div>
                <div class="splide__slide">
                  <div class="relative h-[400px] rounded-xl overflow-hidden">
                    <img src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg" 
                         alt="Project 3" 
                         class="absolute inset-0 w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="bg-gray-900 text-white py-16">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <img src="/assets/logo.webp" alt="Secundo" class="h-12 mb-6" />
            <p class="text-gray-400">Innovative Baukonzepte für eine nachhaltige Zukunft</p>
          </div>
          <div>
            <h3 class="text-xl font-bold mb-6">Kontakt</h3>
            <p class="text-gray-400 mb-2">office@secundo.at</p>
            <p class="text-gray-400">+43 1 234 5678</p>
          </div>
          <div>
            <h3 class="text-xl font-bold mb-6">Adresse</h3>
            <p class="text-gray-400 mb-2">Secundo GmbH</p>
            <p class="text-gray-400">Beispielstraße 123</p>
            <p class="text-gray-400">1010 Wien</p>
          </div>
          <div>
            <h3 class="text-xl font-bold mb-6">Social Media</h3>
            <div class="flex space-x-6">
              <a href="#" class="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
              <a href="#" class="text-gray-400 hover:text-white transition-colors">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
`;

// Initialize Splide slider
document.addEventListener('DOMContentLoaded', function() {
  new Splide('.splide', {
    type: 'loop',
    perPage: 1,
    autoplay: true,
    interval: 4000,
    gap: '2rem',
    breakpoints: {
      640: {
        perPage: 1,
      }
    }
  }).mount();
});