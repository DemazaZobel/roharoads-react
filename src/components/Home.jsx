import Navbar from './Navbar';
import React from "react";
import cybertruckImage from './IMG_0784.JPG';
import cybertruckImage2 from './IMG_0790.JPG';
import cybertruckImage3 from './green_lane.jpg';

function Home() {
  return (
    <>
    <div class="relative overflow-hidden">
      
      <img class="w-full  object-cover" src={cybertruckImage} alt="THIS IS THE CYBERTRUCK!" />
      
      {/* Text Overlay */}
      <div class="absolute inset-0 flex ">
        <h1 class="text-slate-200 text-6xl font-bold p-10 rounded-lg">
          RohaRoads Energy
        </h1>
        
      </div>
      <div class="absolute inset-0 flex ">
        
        <h1 class="text-slate-300 text-4xl p-20 mt-72 mx-36 rounded-lg">
          Your Road to Sustainable Power, Always On.
        </h1>
      </div>
    </div>
    <div class="max-w-4xl mx-auto text-center m-20">
    <h1 class="text-4xl md:text-5xl font-extrabold mb-6">
       <span class="text-3xl md:text-4xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-pink-500 to-blue-500">Welcome to Roha Energy</span>
    </h1>
    <p class="text-lg md:text-xl leading-relaxed mb-8">
      Pioneering the Future of Sustainable Charging. At Roha Energy, we are transforming the way electric vehicles (EVs) charge by introducing dynamic wireless charging solutions. 
      <span class="font-semibold">Powered by renewable energy sources like solar</span>, our innovative system eliminates the need for traditional charging stations, offering a seamless, on-the-go charging experience for EV users.
    </p>
    <p class="text-lg md:text-xl leading-relaxed mb-8">
      Our goal is to reduce Ethiopia’s dependency on grid power, promote clean energy, and revolutionize transportation by enabling wireless, sustainable, and efficient charging wherever you go.
    </p>
    <a href="#learn-more" class="inline-block font-bold py-3 px-6 rounded-full shadow-md hover:bg-blue-500 transition duration-300">
      Learn More
    </a>
  </div>
  



  <section class="py-16 bg-blue-100 text-gray-800 ">
  <div class="max-w-6xl mx-auto px-8 text-center ">
      <h2 class="text-3xl md:text-4xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">
      Why Choose Dynamic Wireless EV Charging?
     </h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="bg-white p-6 rounded-lg shadow-lg">
        <div class="text-blue-500 mb-4">
          <svg class="w-12 h-12 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2z"/>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z"/>
          </svg>
        </div>
        <h3 class="text-xl font-semibold mb-4">Solar-Powered Efficiency</h3>
        <p class="text-gray-600">
          Harness renewable solar energy to charge your vehicle sustainably and reduce reliance on traditional grids.
        </p>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-lg">
        <div class="text-green-500 mb-4">
          <svg class="w-12 h-12 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2z"/>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z"/>
          </svg>
        </div>
        <h3 class="text-xl font-semibold mb-4">On-the-Go Charging</h3>
        <p class="text-gray-600">
          Charge while driving with inductive wireless technology, making stops for charging a thing of the past.
        </p>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-lg">
        <div class="text-yellow-500 mb-4">
          <svg class="w-12 h-12 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2z"/>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-10S17.514 2 12 2z"/>
          </svg>
        </div>
        <h3 class="text-xl font-semibold mb-4">Eco-Friendly Solutions</h3>
        <p class="text-gray-600">
          Drive sustainability with technology designed to reduce emissions and promote renewable energy use.
        </p>
      </div>
    </div>
  </div>
</section>

<section
  class="py-16 bg-gradient-to-r from-green-50 via-white to-green-100 text-gray-900"
  style={{
    backgroundImage: `url(${cybertruckImage2})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
>
  <div class="max-w-7xl mx-auto px-6 lg:px-12 bg-black bg-opacity-30 w-full">
    <h2 class="text-3xl md:text-4xl font-extrabold text-center text-white mb-12">
      Building Sustainable Cities of Tomorrow
    </h2>
    <div class="flex flex-wrap justify-center gap-6">
    
      <div class="bg-white p-8 rounded-xl shadow-md transition-transform transform hover:scale-105 hover:shadow-lg w-full sm:w-1/2 lg:w-1/3">
        <div class="flex justify-center items-center text-green-500 mb-6">
          <svg
            class="w-14 h-14"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </div>
        <h3 class="text-lg font-semibold text-center mb-4">Smart Mobility</h3>
        <p class="text-gray-600 text-center">
          Dynamic EV charging integrated into urban infrastructure for seamless, congestion-free transportation.
        </p>
      </div>

      
      <div class="bg-white p-8 rounded-xl shadow-md transition-transform transform hover:scale-105 hover:shadow-lg w-full sm:w-1/2 lg:w-1/3">
        <div class="flex justify-center items-center text-yellow-500 mb-6">
          <svg
            class="w-14 h-14"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z"
            />
          </svg>
        </div>
        <h3 class="text-lg font-semibold text-center mb-4">Renewable Energy Integration</h3>
        <p class="text-gray-600 text-center">
          Harness solar power to reduce carbon emissions and support local energy independence.
        </p>
      </div>

      
      <div class="bg-white p-8 rounded-xl shadow-md transition-transform transform hover:scale-105 hover:shadow-lg w-full sm:w-1/2 lg:w-1/3">
        <div class="flex justify-center items-center text-blue-500 mb-6">
          <svg
            class="w-14 h-14"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12h6m-6 4h6m-9 4h12"
            />
          </svg>
        </div>
        <h3 class="text-lg font-semibold text-center mb-4">Green Infrastructure</h3>
        <p class="text-gray-600 text-center">
          Charging lanes embedded into roads to create a clean, visually appealing urban environment.
        </p>
      </div>

      
      <div class="bg-white p-8 rounded-xl shadow-md transition-transform transform hover:scale-105 hover:shadow-lg w-full sm:w-1/2 lg:w-1/3">
        <div class="flex justify-center items-center text-teal-500 mb-6">
          <svg
            class="w-14 h-14"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 10h18M9 21H3v-8m12 8h6V10m-6 0h-6"
            />
          </svg>
        </div>
        <h3 class="text-lg font-semibold text-center mb-4">Community Impact</h3>
        <p class="text-gray-600 text-center">
          Affordable and accessible EV charging empowers communities to transition to cleaner energy solutions.
        </p>
      </div>
    </div>
  </div>
</section>
<section class="py-16 bg-gradient-to-r from-pink-200 via-white to-blue-300 text-gray-800">
  <div class="max-w-6xl mx-auto px-8 text-center">
    <h2 class="text-4xl md:text-5xl font-extrabold mb-8 text-blue-600">
      What We Do
    </h2>
    <p class="text-lg md:text-xl leading-relaxed mb-8">
      At Roha Energy, we offer innovative solutions for electric vehicle charging that are both sustainable and efficient. Here’s what we focus on:
    </p>
    <ul class="list-none space-y-6 text-lg md:text-xl leading-relaxed text-gray-600">
      <li class="flex items-start space-x-3 p-4 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
        <span class="text-green-600 text-2xl">✔</span>
        <p><span class="font-semibold">Installing the chargers underground:</span> We seamlessly integrate our wireless charging system by embedding the chargers beneath the surface, ensuring minimal impact on the environment and urban aesthetics.</p>
      </li>
      <li class="flex items-start space-x-3 p-4 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
        <span class="text-green-600 text-2xl">✔</span>
        <p><span class="font-semibold">Monitoring the system:</span> Our advanced monitoring solutions ensure the smooth operation of the charging network, with real-time data on system performance and usage.</p>
      </li>
      <li class="flex items-start space-x-3 p-4 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
        <span class="text-green-600 text-2xl">✔</span>
        <p><span class="font-semibold">Integrating the system using IoT:</span> We leverage IoT technology to create an interconnected system where all charging units communicate efficiently and are easily managed remotely.</p>
      </li>
      <li class="flex items-start space-x-3 p-4 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
        <span class="text-green-600 text-2xl">✔</span>
        <p><span class="font-semibold">Making the whole ecosystem communicate:</span> Our solution enables seamless communication between vehicles, chargers, and the grid, optimizing energy usage and ensuring a reliable and efficient experience for users.</p>
      </li>
      <li class="flex items-start space-x-3 p-4 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
        <span class="text-green-600 text-2xl">✔</span>
        <p><span class="font-semibold">Solar Powered:</span> The entire system is powered by renewable solar energy, ensuring sustainability and reducing dependency on traditional power sources.</p>
      </li>
    </ul>
  </div>
</section>
<section class="py-16 bg-gray-50 text-gray-800">
  <div class="max-w-7xl mx-auto px-6 lg:px-12">
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-extrabold text-blue-600 mb-4">
        Underground EV Charger Installation & Engineering
      </h2>
      <p class="text-lg md:text-xl text-gray-600 leading-relaxed">
        At Roha Energy, we provide state-of-the-art underground EV charging solutions that integrate electrical, mechanical, and IoT technologies to ensure efficiency and sustainability in urban spaces.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
        <div class="text-blue-500 mb-4">
          <svg class="w-12 h-12 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </div>
        <h3 class="text-xl font-semibold text-blue-700 mb-4">Underground Installation Process</h3>
        <p class="text-gray-600">
          Our chargers are installed underground, offering an eco-friendly solution that blends seamlessly into urban landscapes. We use precise excavation techniques and durable materials to ensure long-lasting, high-performance installations.
        </p>
      </div>

      <div class="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
        <div class="text-green-500 mb-4">
          <svg class="w-12 h-12 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </div>
        <h3 class="text-xl font-semibold text-green-700 mb-4">Electrical Engineering</h3>
        <p class="text-gray-600">
          Our electrical engineering team designs reliable underground systems with high-performance cables, transformers, and safety mechanisms to ensure optimal energy distribution and long-term reliability.
        </p>
      </div>

      <div class="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
        <div class="text-yellow-500 mb-4">
          <svg class="w-12 h-12 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </div>
        <h3 class="text-xl font-semibold text-yellow-700 mb-4">Mechanical Engineering</h3>
        <p class="text-gray-600">
          Our mechanical engineers ensure that all underground installations are protected with durable, weather-resistant materials and robust systems that minimize downtime and ensure peak performance.
        </p>
      </div>
    </div>

    <div class="mt-16 text-center">
      <h3 class="text-2xl font-semibold text-blue-600 mb-6">IoT and Software System Integration</h3>
      <p class="text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
        Roha Energy integrates cutting-edge IoT devices and advanced software systems that communicate in real-time, ensuring seamless monitoring, diagnostics, and energy management across all charging units.
      </p>
      <p class="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
        Our backend cloud computing system enhances user experience with features like real-time charging status, energy usage tracking, and predictive maintenance alerts, allowing for an efficient and hassle-free EV charging process.
      </p>

      <a href="#more-info" class="bg-blue-600 text-white py-2 px-8 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300">
        Learn More
      </a>
    </div>

    <div id="more-info" class="mt-16 bg-gray-50 py-12 text-center">
      <h3 class="text-2xl font-semibold text-blue-600 mb-4">Further Insights</h3>
      <p class="text-lg md:text-xl text-gray-600 mb-6">
        Our innovative smart chargers contribute to reducing energy consumption and CO2 emissions, paving the way for a greener and more sustainable future in urban transportation. By incorporating IoT technology, we create a fully integrated and intelligent ecosystem for EV charging.
      </p>
      <p class="text-lg md:text-xl text-gray-600">
        Stay connected with real-time data and remote management capabilities directly from your mobile device, ensuring you always have control over your EV charging experience.
      </p>
      <a href="#more-info" class="bg-blue-600 text-white py-2 px-8 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300">
        Our Services
      </a>
    </div>
  </div>
</section>
<section class="py-16 bg-white text-gray-800">
  <div class="max-w-7xl mx-auto px-6 lg:px-12 text-center">
    <h2 class="text-3xl md:text-4xl font-extrabold text-blue-600 mb-8">
      We Work With
    </h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
      
      <div class="bg-blue-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div class="flex justify-center mb-4">
          
          <svg class="w-16 h-16 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l7 7-7 7z" />
          </svg>
        </div>
        <h3 class="text-xl font-semibold text-blue-600 mb-4">Startups</h3>
        <p class="text-gray-600"> 
          We assist startups in wireless charging solutions development by providing engineering teams to address specific challenges and fill resource gaps.
        </p> 
      </div>

      
      <div class="bg-green-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div class="flex justify-center mb-4">
          
          <svg class="w-16 h-16 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l7-7 7 7m-7-7v18" />
          </svg>
        </div>
        <h3 class="text-xl font-semibold text-green-600 mb-4">Enterprises</h3>
        <p class="text-gray-600">
          We develop innovative EV charger software & hardware systems for mid-sized businesses and large enterprises working in the automotive industry.
        </p>
      </div>

      
      <div class="bg-yellow-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div class="flex justify-center mb-4">
          
          <svg class="w-16 h-16 text-yellow-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </div>
        <h3 class="text-xl font-semibold text-yellow-600 mb-4">Tech Partners</h3>
        <p class="text-gray-600">
          We can be your technology partner, becoming an integral part of your project and building inductive charging solutions tailored to your objectives.
        </p>
      </div>
    </div>
  </div>
</section>
<footer class="bg-gray-800 text-white py-8">
  <div class="max-w-7xl mx-auto px-6 lg:px-12 text-center">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-6">
      
      <div>
        <h4 class="text-xl font-semibold mb-4">Quick Links</h4>
        <ul class="space-y-2">
          <li><a href="#about" class="hover:text-blue-400">About</a></li>
          <li><a href="#services" class="hover:text-blue-400">Services</a></li>
          <li><a href="#contact" class="hover:text-blue-400">Contact</a></li>
          <li><a href="#privacy" class="hover:text-blue-400">Privacy Policy</a></li>
        </ul>
      </div>

      
      <div>
        <h4 class="text-xl font-semibold mb-4">Contact Us</h4>
        <p class="text-gray-300">123 Innovation Drive, Tech City</p>
        <p class="text-gray-300">Phone: +123 456 7890</p>
        <p class="text-gray-300">Email: info@rohaenergy.com</p>
      </div>

      
      <div>
        <h4 class="text-xl font-semibold mb-4">Follow Us</h4>
        <div class="flex justify-center space-x-6">
          <a href="https://www.facebook.com" target="_blank" class="text-gray-300 hover:text-blue-500">
            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2h12c1.1 0 1.99-.9 1.99-2L20 4c0-1.1-.89-2-1.99-2zm-4 2v4h-2V4h-2v4H8V4H6v4H4V6h2V4h4V6h2z" />
            </svg>
          </a>
          <a href="https://twitter.com" target="_blank" class="text-gray-300 hover:text-blue-500">
            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M23 3a10.1 10.1 0 01-2.828.775A4.993 4.993 0 0022.458 2.5a9.995 9.995 0 01-3.208 1.226A4.957 4.957 0 0016.616 0c-2.735 0-4.966 2.226-4.966 4.96 0 .388.044.765.129 1.126A14.031 14.031 0 011.5 3.204a4.937 4.937 0 001.549 6.61A4.917 4.917 0 01.96 9.785v.06a4.954 4.954 0 003.967 4.867A4.922 4.922 0 010 17.7a7.307 7.307 0 004.73 1.294c6.29 0 9.828-5.143 9.828-9.697v-.07c0-.156 0-.311-.012-.465A6.943 6.943 0 0023 3z" />
            </svg>
          </a>
          <a href="https://www.linkedin.com" target="_blank" class="text-gray-300 hover:text-blue-500">
            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h16v16H4V4zm4 8h2v4H8v-4zm0-4h2v2H8V8zm5 0h2v2h-2V8zm0 4h2v4h-2v-4zm-5 0H7v4h2v-4z" />
            </svg>
          </a>
          <a href="https://www.instagram.com" target="_blank" class="text-gray-300 hover:text-blue-500">
            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3h14c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2zm7 12c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4-9c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z" />
            </svg>
          </a>
        </div>
      </div>
    </div>

    <div class="border-t border-gray-700 pt-6">
      <p class="text-gray-400 text-sm">
        &copy; 2024 Roha Energy. All rights reserved.
      </p>
    </div>
  </div>
</footer>



    </>
    
  );
}

export default Home;
