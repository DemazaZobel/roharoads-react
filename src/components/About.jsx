import Navbar from './Navbar';
import React from 'react';

function About() {
  return (
    <>
      {/* Navigation Bar */}
      <Navbar />
      
      {/* About Section */}
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center p-8">
        {/* About Title */}
        <h1 className="text-5xl font-extrabold text-blue-900 mb-8 text-center">About RohaRoads Energy</h1>

        {/* About Content */}
        <div className="bg-white p-12 rounded-lg shadow-xl max-w-6xl w-full text-center">
        <h2 className="text-3xl font-semibold text-blue-900 mb-6">Our Mission</h2>
<p className="text-lg text-gray-800 leading-relaxed mb-6">
  At Roha Energy, our mission is to spearhead the global transition towards sustainable energy by providing innovative solutions that address the pressing needs of the transportation and energy sectors. As the world moves towards cleaner, renewable energy sources, we are focused on facilitating this transformation through cutting-edge technologies and systems.
</p>
<p className="text-lg text-gray-800 leading-relaxed mb-6">
  A core aspect of our mission is revolutionizing electric vehicle (EV) charging infrastructure. As the demand for electric vehicles grows, it is crucial to develop a sustainable and reliable charging network. Roha Energy is committed to pioneering solutions that integrate solar power, dynamic inductive charging, and Internet of Things (IoT) technologies to create a seamless and efficient charging experience. We envision a world where EV charging is as accessible, fast, and reliable as traditional fuel stations, but with minimal environmental impact.
</p>
<p className="text-lg text-gray-800 leading-relaxed mb-6">
  Our approach is designed to address the key challenges facing the energy and transportation industries today, including grid dependency, high operational costs, and limited infrastructure. By leveraging the power of renewable energy and embracing emerging technologies, we aim to create a scalable, sustainable, and forward-thinking solution for the future of mobility.
</p>

<h2 className="text-3xl font-semibold text-blue-900 mb-6">Our Vision</h2>
<p className="text-lg text-gray-800 leading-relaxed mb-6">
  Our vision is to shape a future where clean, renewable energy is the foundation of our global energy systems. We believe that the future of transportation lies in the widespread adoption of electric vehicles, which can drastically reduce the carbon footprint of the transportation sector. However, for this vision to become a reality, it is essential to have an accessible and efficient charging infrastructure that supports this transition.
</p>
<p className="text-lg text-gray-800 leading-relaxed mb-6">
  We aim to be at the forefront of this revolution by developing smart, sustainable energy solutions that empower individuals, communities, and businesses. By integrating renewable energy sources like solar power with cutting-edge technologies such as dynamic inductive charging and IoT, we are building a more resilient, decentralized, and future-proof energy ecosystem. Our vision is to reduce dependence on fossil fuels, lower energy costs, and ensure a cleaner, more sustainable future for generations to come.
</p>
<p className="text-lg text-gray-800 leading-relaxed mb-6">
  Through innovation, collaboration, and a shared commitment to sustainability, we are creating solutions that go beyond just meeting the energy needs of today but also ensuring that future generations have access to a clean, reliable, and sustainable energy infrastructure. Our vision extends beyond technology – it is about fostering a global movement that prioritizes environmental responsibility, social equity, and economic sustainability.
</p>


          {/* Our Multidisciplinary Team Section */}
          <div className="bg-gradient-to-b from-blue-50 to-blue-100 py-12 px-8 md:px-20">
            <h2 className="text-4xl font-extrabold text-blue-900 mb-8 text-center">
              Our Multidisciplinary Team
            </h2>
            <p className="text-lg text-gray-800 leading-relaxed mb-6 text-center">
              At Roha Energy, we pride ourselves on our diverse and highly skilled team, bringing together a broad range of expertise to deliver innovative, sustainable solutions. Our team is composed of seasoned professionals in the fields of Electrical Engineering, Electromechanical Engineering, Mechanical Engineering, Software Engineering, Chemical Engineering, Civil Engineering, Architecture, and Environmental Engineering. This multidisciplinary approach allows us to tackle even the most complex projects, ensuring that every aspect of your EV charging infrastructure is carefully designed, implemented, and optimized.
            </p>

            <p className="text-lg text-gray-800 leading-relaxed mb-6 text-center">
              We are passionate about collaborating with startup enterprises, entrepreneurs, investors, as well as governmental and non-governmental organizations. Whether you're looking to launch a new sustainable energy project, expand your existing infrastructure, or drive innovation in clean energy solutions, we are ready to partner with you to create impactful and forward-thinking solutions.
            </p>

            {/* Team Member Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <div className="bg-white p-8 rounded-lg shadow-lg text-center w-full mx-auto">
                <img 
                  className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-blue-500" 
                  src="team-member-1.jpg" 
                  alt="Team Member"
                />
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Nathan Tagel</h3>
                <p className="text-lg text-gray-600 mb-2">Electromechanical Engineer</p>
                <p className="text-lg text-gray-600">Email: <a href="mailto:nathan@example.com" className="text-blue-500">nathan@example.com</a></p>
              </div>

              {/* Team Member 2 */}
              <div className="bg-white p-8 rounded-lg shadow-lg text-center w-full mx-auto">
                <img 
                  className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-blue-500" 
                  src="team-member-2.jpg" 
                  alt="Team Member"
                />
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Mohammed Mensur</h3>
                <p className="text-lg text-gray-600 mb-2">Chemical Engineer</p>
                <p className="text-lg text-gray-600">Email: <a href="mailto:mohammed@example.com" className="text-blue-500">mohammed@example.com</a></p>
              </div>

              {/* Team Member 3 */}
              <div className="bg-white p-8 rounded-lg shadow-lg text-center w-full mx-auto">
                <img 
                  className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-blue-500" 
                  src="team-member-3.jpg" 
                  alt="Team Member"
                />
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Fiker Abebe</h3>
                <p className="text-lg text-gray-600 mb-2">Architecture Engineer</p>
                <p className="text-lg text-gray-600">Email: <a href="mailto:fiker@example.com" className="text-blue-500">fiker@example.com</a></p>
              </div>

              {/* Team Member 4 */}
              <div className="bg-white p-8 rounded-lg shadow-lg text-center w-full mx-auto">
                <img 
                  className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-blue-500" 
                  src="team-member-4.jpg" 
                  alt="Team Member"
                />
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Hamdi Elias</h3>
                <p className="text-lg text-gray-600 mb-2">Electromechanical Engineer</p>
                <p className="text-lg text-gray-600">Email: <a href="mailto:hamdi@example.com" className="text-blue-500">hamdi@example.com</a></p>
              </div>

              {/* Team Member 5 */}
              <div className="bg-white p-8 rounded-lg shadow-lg text-center w-full mx-auto">
                <img 
                  className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-blue-500" 
                  src="team-member-5.jpg" 
                  alt="Team Member"
                />
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Hasset Elias</h3>
                <p className="text-lg text-gray-600 mb-2">Civil Engineer</p>
                <p className="text-lg text-gray-600">Email: <a href="mailto:hasset@example.com" className="text-blue-500">hasset@example.com</a></p>
              </div>

              {/* Team Member 6 */}
              <div className="bg-white p-8 rounded-lg shadow-lg text-center w-full mx-auto">
                <img 
                  className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-blue-500" 
                  src="team-member-6.jpg" 
                  alt="Team Member"
                />
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Betelhem Seleshi</h3>
                <p className="text-lg text-gray-600 mb-2">Software Engineer</p>
                <p className="text-lg text-gray-600">Email: <a href="mailto:betelhem@example.com" className="text-blue-500">betelhem@example.com</a></p>
              </div>

              {/* Team Member 7 */}
              <div className="bg-white p-8 rounded-lg shadow-lg text-center w-full mx-auto">
                <img 
                  className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-blue-500" 
                  src="team-member-7.jpg" 
                  alt="Team Member"
                />
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Rediet Birhanu</h3>
                <p className="text-lg text-gray-600 mb-2">Software Engineer</p>
                <p className="text-lg text-gray-600">Email: <a href="mailto:rediet@example.com" className="text-blue-500">rediet@example.com</a></p>
              </div>

              {/* Team Member 8 */}
              <div className="bg-white p-8 rounded-lg shadow-lg text-center w-full mx-auto">
                <img 
                  className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-blue-500" 
                  src="team-member-8.jpg" 
                  alt="Team Member"
                />
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Daniel Fantu</h3>
                <p className="text-lg text-gray-600 mb-2">Environmental Engineer</p>
                <p className="text-lg text-gray-600">Email: <a href="mailto:daniel@example.com" className="text-blue-500">daniel@example.com</a></p>
              </div>

              {/* Team Member 9 */}
              <div className="bg-white p-8 rounded-lg shadow-lg text-center w-full mx-auto">
                <img 
                  className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-blue-500" 
                  src="team-member-9.jpg" 
                  alt="Team Member"
                />
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Nahome Girma</h3>
                <p className="text-lg text-gray-600 mb-2">Electrical Engineer</p>
                <p className="text-lg text-gray-600">Email: <a href="mailto:nahome@example.com" className="text-blue-500">nahome@example.com</a></p>
              </div>

              {/* Team Member 10 */}
              <div className="bg-white p-8 rounded-lg shadow-lg text-center w-full mx-auto">
                <img 
                  className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-blue-500" 
                  src="team-member-10.jpg" 
                  alt="Team Member"
                />
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Nahom Meles</h3>
                <p className="text-lg text-gray-600 mb-2">Mechanical Engineer</p>
                <p className="text-lg text-gray-600">Email: <a href="mailto:nahom@example.com" className="text-blue-500">nahom@example.com</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
