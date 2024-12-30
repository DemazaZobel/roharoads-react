import Navbar from './Navbar';
import React from 'react';
import laneImage from './lane.jpg';
import truckImage from './truck.jpg';
function Services() {
  return (
    <>
      
      <Navbar />

   
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center p-8">
       
        <h1 className="text-5xl font-extrabold text-blue-900 mb-8">Our Services</h1>
        
      
        <div className="relative w-full max-w-6xl">
          <img
            className="rounded-lg shadow-lg object-cover w-full"
            src={laneImage}
            alt="Dynamic Inductive EV Charging"
          />
          <div className="absolute bottom-4 left-4 bg-gradient-to-r from-blue-900 to-blue-600 bg-opacity-80 text-white px-6 py-3 rounded-lg shadow-lg">
            <p className="text-xl font-bold">Dynamic Inductive EV Charging</p>
          </div>
        </div>
        
<div className="bg-gradient-to-b from-blue-100 to-white py-12 px-8 md:px-20">
  <h2 className="text-4xl font-bold text-blue-900 mb-8 text-center">
    What Is Wireless Charging of Electric Vehicles?
  </h2>
  <p className="text-lg text-gray-800 leading-relaxed mb-6">
    Unlike static charging, dynamic wireless charging of electric vehicles or in-motion charging allows electric cars and trucks to continuously charge on the go, so they do not need to stop to refuel or recharge. Instead, they receive a constant stream of energy across an air gap while the vehicle is in motion. In these systems, a high-frequency inverter is used to generate the alternating magnetic field necessary for transferring electrical energy wirelessly to the vehicle using the principle of electromagnetic induction. In other words, public infrastructure is used for advanced battery charging for EVs.
  </p>
  <p className="text-lg text-gray-800 leading-relaxed mb-6">
    However, inductive charging or inductive power transfer is not a new phenomenon, and you may already use this technology in your home with an electric toothbrush or wireless cell phone charger. Magnetic resonance wireless power transfer (WPT) uses induction charging with a pad on the ground and a receiver on the vehicle that is tuned to the same frequency. The advantage is the modules don’t need to be perfectly aligned to transfer power if they are on the same operating frequency.
  </p>
  <blockquote className="text-lg text-gray-800 italic border-l-4 border-blue-600 pl-4 mb-6">
    “Opening up new parts of the transportation sector to electrification is a key benefit of this technology,” said Burak Ozpineci, section head for Vehicle and Mobility Systems Research at the U.S. Department of Energy's (DOE) Oak Ridge National Laboratory (ORNL). “It’s not just about charging your vehicle really fast. It’s also about being able to convert to electricity long-haul trucks, which burn a significant portion of the vehicle fuel used in this country.”
  </blockquote>
  <p className="text-lg text-gray-800 leading-relaxed">
    Despite challenges, momentum is building, with companies coalescing around standardized technology and automakers and municipalities exploring use cases. Even Tesla has shown interest in wireless charging technology. Pilot projects are currently underway, with trials focusing on both passenger and commercial vehicles. Standardization efforts by SAE International are also underway, which could further boost dynamic wireless charging adoption.
  </p>
</div>

{/* Potential Advantages of Dynamic Charging Section */}
<div className="bg-gradient-to-b from-blue-100 to-white py-12 px-8 md:px-20">
  <h2 className="text-4xl font-bold text-blue-900 mb-8 text-center">
    Potential Advantages of Dynamic Charging
  </h2>
  <p className="text-lg text-gray-800 leading-relaxed mb-6">
    If wireless EV charging technology can be perfected and implemented in infrastructure, the widespread use of dynamic inductive power transfer has many potential advantages.
  </p>
  <ul className="list-disc pl-6 text-lg text-gray-800 mb-6">
    <li>Continuous electric vehicle battery charging can alleviate range anxiety because vehicles can charge as they move, potentially boosting their market share.</li>
    <li>Effective dynamic charging solutions reduce the need for plug-in charging stations, saving space.</li>
    <li>Ongoing charging allows for a smaller EV battery size with reduced weight, helping to decrease the cost of EVs and conserving materials.</li>
    <li>Dynamic charging is more convenient than using a gas station or stationary EV charging stations because it saves time, helping to boost the popularity and appeal of EVs.</li>
    <li>If wireless EV charging technology becomes widely used, it could accelerate the transition to cleaner energy sources and help mitigate climate change.</li>
    <li>Increases the potential uses for electric vehicles, including long-haul trucks.</li>
  </ul>
</div>
<div className="relative w-full max-w-6xl p-40">
  <img
    className="rounded-lg shadow-2xl object-cover w-full md:w-2/4 transform transition-transform duration-500 hover:scale-105 hover:shadow-xl"
    src={truckImage}
    alt="Dynamic Inductive EV Charging"
  />
  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-600 opacity-40 rounded-lg"></div>
  <div className="absolute bottom-8 left-8 text-white text-3xl font-extrabold z-10">
    <p>Dynamic Inductive Charging in Action</p>
  </div>
</div>
{/* Our Process: Tailored Solutions for Your EV Charging Needs */}
<div className="bg-gradient-to-b from-blue-50 to-blue-100 py-12 px-8 md:px-20">
  <h2 className="text-4xl font-bold text-blue-900 mb-8 text-center">
    Our Process: Tailored Solutions for Your EV Charging Needs
  </h2>
  <p className="text-lg text-gray-800 leading-relaxed mb-6 text-center">
    We provide a comprehensive and sustainable EV charging solution that will evolve with your needs. Our step-by-step process ensures the seamless integration of a solar-powered inductive charging system, IoT connectivity, and an automated billing system. Here’s how we do it:
  </p>

  {/* Stage 1 */}
  <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
    <h3 className="text-2xl font-semibold text-blue-900 mb-4">Stage 1: Underground Charger Installation with Safety and Risk Management</h3>
    <p className="text-lg text-gray-800 leading-relaxed">
      We begin by securely installing the EV chargers underground, ensuring the system is set up according to the highest safety standards. Our team will conduct a thorough site assessment, design the installation with safety in mind, and implement a risk management plan to prevent potential hazards. This ensures long-term reliability and safety for both your infrastructure and your users.
    </p>
  </div>

  {/* Stage 2 */}
  <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
    <h3 className="text-2xl font-semibold text-blue-900 mb-4">Stage 2: Solar Power Integration with Backup Source</h3>
    <p className="text-lg text-gray-800 leading-relaxed">
      We integrate a solar power system to provide sustainable energy for your charging stations. This includes installing solar panels that will power the chargers during the day, along with an alternative backup power source (either from the grid or a battery system) to keep the system running smoothly even in bad weather or power outages.
    </p>
  </div>

  {/* Stage 3 */}
  <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
    <h3 className="text-2xl font-semibold text-blue-900 mb-4">Stage 3: IoT Integration for Smart Monitoring</h3>
    <p className="text-lg text-gray-800 leading-relaxed">
      Your charging system will be equipped with smart sensors and IoT technology, enabling us to remotely monitor and manage the entire network. This integration will allow us to track key performance metrics such as power usage, system health, and energy efficiency, all while providing you with real-time data and alerts for any system issues.
    </p>
  </div>

  {/* Stage 4 */}
  <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
    <h3 className="text-2xl font-semibold text-blue-900 mb-4">Stage 4: Seamless Communication with Your Firm’s System</h3>
    <p className="text-lg text-gray-800 leading-relaxed">
      We ensure that the entire charging ecosystem communicates seamlessly with your internal systems. By establishing a secure and reliable communication channel, we enable real-time data sharing between the chargers, solar panels, and your firm’s control system. This means that you can monitor, manage, and optimize the charging network from one centralized platform.
    </p>
  </div>

  {/* Stage 5 */}
  <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
    <h3 className="text-2xl font-semibold text-blue-900 mb-4">Stage 5: Integration with Your Website</h3>
    <p className="text-lg text-gray-800 leading-relaxed">
      If you don't already have a website, we’ll build one for you. Your website will serve as a user-friendly interface for customers to locate charging stations, track availability, and monitor their usage. We will integrate the charging system with your website, allowing users to reserve spots, view session progress, and manage their accounts all in one place.
    </p>
  </div>

  {/* Stage 6 */}
  <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
    <h3 className="text-2xl font-semibold text-blue-900 mb-4">Stage 6: Monitoring and System Guidance</h3>
    <p className="text-lg text-gray-800 leading-relaxed">
      Once your system is live, we’ll guide you through the monitoring process. Our team will provide training to help you effectively use the monitoring tools and dashboards, allowing you to track charging sessions, energy usage, and system performance. Regular system updates and support will be provided to ensure everything runs smoothly.
    </p>
  </div>

  {/* Stage 7 */}
  <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
    <h3 className="text-2xl font-semibold text-blue-900 mb-4">Stage 7: RFID and Camera-Based Billing System</h3>
    <p className="text-lg text-gray-800 leading-relaxed">
      We’ll work with you to create an automated, smart billing system using RFID technology and camera recognition. Users will authenticate their sessions by tapping an RFID card, and cameras will monitor vehicle entry and exit to ensure accurate billing. We will also consult with you on how to design a payment system that is convenient, secure, and scalable, integrating payment gateways or subscription models based on your needs.
    </p>
  </div>
</div>

       

          
  </div>

  <footer className="bg-blue-900 text-white py-8 mt-16">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <h3 className="text-2xl font-semibold">Roha Energy</h3>
          <p className="text-lg">Innovating Sustainable Energy Solutions</p>
        </div>
        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://www.linkedin.com" className="text-white hover:text-blue-400">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a href="https://twitter.com" className="text-white hover:text-blue-400">
            <i className="fab fa-twitter fa-2x"></i>
          </a>
          <a href="https://www.facebook.com" className="text-white hover:text-blue-400">
            <i className="fab fa-facebook fa-2x"></i>
          </a>
        </div>
        <p className="text-lg">
          &copy; {new Date().getFullYear()} Roha Energy. All rights reserved.
        </p>
      </div>
    </footer>
      
    </>
  );
}

export default Services;
