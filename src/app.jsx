import React from 'react';
import Random from './random';
// import Captcha from '../captcha';


const projects = [
  {
    title: 'Login And Signup',
    description: 'A brief description of Project One. This project involves using technologies X, Y, and Z.',
    imageUrl: 'https://img.freepik.com/free-vector/online-registration-form_23-2147980576.jpg?ga=GA1.1.1548694550.1725730273&semt=ais_hybrid',
    link: 'https://github.com/yourusername/project-one'
  },
  {
    title: 'News Channel Website',
    description: 'A brief description of Project Two. This project showcases skills in A, B, and C.',
    imageUrl: 'https://img.freepik.com/free-psd/flat-design-transport-template_23-2149329505.jpg?ga=GA1.1.1548694550.1725730273&semt=ais_hybrid',
    link: 'https://github.com/yourusername/project-two'
  },
  {
    title: 'Portfolio',
    description: 'A brief description of Project Three. This project focuses on technologies D, E, and F.',
    imageUrl: 'https://img.freepik.com/free-vector/gradient-interview-portfolio-template_23-2149228450.jpg?t=st=1725799636~exp=1725803236~hmac=c8ee80f3e50ed43bf5c97250be2c978b8d02a1121335626832b8bbe7e8be4faa&w=740',
    link: 'https://github.com/yourusername/project-three'
  }
];

const educationData = [
  {
    level: '10th Grade',
    institution: 'Abeda High School Muzaffarpur',
    year: '2018',
    details: 'Common Basic Subject',
  },
  {
    level: '12th Grade',
    institution: 'MPS Sinha Science College Muzaffarpur',
    year: '2020',
    details: 'Specialized in Science with Maths on Physics and Chemistry.',
  },
  {
    level: 'BTech',
    institution: 'IES University Bhopal',
    year: '2020-2024',
    details: 'Bachelor of Technology in Computer Science and Engineering.',
  },
];

const skills = [
  { name: 'HTML', percentage: 90 },
  { name: 'CSS', percentage: 85 },
  { name: 'JavaScript', percentage: 80 },
  { name: 'Node.js', percentage: 75 },
  { name: 'MongoDB', percentage: 70 },
  { name: 'React', percentage: 85 },
  { name: 'Tailwind CSS', percentage: 80 },
  { name: 'Bootstrap', percentage: 75 },
];


const Header = () => {
  return (
    <div>
      <header className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-2xl font-bold bg-white shadow-md rounded-lg p-3 transition-transform duration-500 ease-in-out transform hover:scale-105 hover:text-green-500 hover:bg-blue-600">
            Portfolio
          </h1>
      

          <nav className=" text-white p-4">
      <div className="container mx-auto flex justify-between items-center">



        <div>
          <ul className="flex space-x-6">

            <li>
              <a href="#projects" className="hover:text-yellow-500 transition-colors">
                <div><h1>Projects</h1></div>
              </a>
            </li>

            <li>
              <a href="#education" className="hover:text-yellow-500 transition-colors">
                Education
              </a>
            </li>

            <li>
              <a href="#skills" className="hover:text-yellow-500 transition-colors">
                Skills
              </a>
            </li>

            <li>
              <a href="#footer" className="hover:text-yellow-500 transition-colors">
                Contact
              </a>
            </li>

            {/* Resume Download Link */}
            <li>
              <a
                href="https://drive.google.com/file/d/18ba5hzEHSh9h48uSDlf0p7VXq7ZiYUn4/view?usp=drivesdk" // <- Change this to the actual path of your PDF
                className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors"
                download
              >
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
        </div>
     
      <Random></Random>
      {/* <Captcha></Captcha> */}

        <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-10 bg-gray-100 mt-2">
          <div className="bg-white shadow-md rounded-lg w-full md:w-2/3 lg:w-1/2 flex flex-col md:flex-row p-6 transition-transform duration-500 ease-in-out transform hover:scale-105">
            <div className="w-full md:w-1/2 rounded-lg p-6 transition-transform duration-500 ease-in-out transform hover:scale-105">
              <img
                src="https://img.freepik.com/premium-photo/cartoon-3d-character-developer-designer-working-laptop-web-app-development-deploy-frontend-backend-project-team-engineers-website_1029476-383476.jpg?size=626&ext=jpg&ga=GA1.1.1548694550.1725730273&semt=ais_hybrid"
                alt="Frontend Developer"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="w-full md:w-1/2 rounded-lg p-6 transition-transform duration-500 ease-in-out transform hover:scale-105">
              <h2 className="text-2xl font-bold mb-2">
                Hello, I<span className='text-yellow-600'>'</span>m <span className='text-yellow-600'>Aakib Jawed</span>
              </h2>
              <p className="text-gray-700">
                As a Frontend Developer, you are at the forefront of creating visually engaging and user-friendly web experiences...
              </p>
            </div>
          </div>
        </div>
      </header>

      <section id="projects" className="py-7 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center rounded-lg p-6 transition-transform duration-500 ease-in-out transform hover:scale-105 bg-black">
            My Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 transition-transform duration-500 ease-in-out transform hover:scale-105"
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-t-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center rounded-lg p-6 transition-transform duration-500 ease-in-out transform hover:scale-105 bg-black">
            Education
          </h2>
          <div className="space-y-8">
            {educationData.map((education, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg p-6 transition-transform duration-500 ease-in-out transform hover:scale-105">
                <h3 className="text-xl font-semibold mb-2">{education.level}</h3>
                <p className="text-gray-700 mb-2"><strong>Institution:</strong> {education.institution}</p>
                <p className="text-gray-700 mb-2"><strong>Year:</strong> {education.year}</p>
                <p className="text-gray-700"><strong>Details:</strong> {education.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center rounded-lg p-6 transition-transform duration-500 ease-in-out transform hover:scale-105 bg-black">
            Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg p-6 transition-transform duration-500 ease-in-out transform hover:scale-105">
                <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                <div className="bg-gray-200 rounded-full h-4 mb-4">
                  <div className="bg-green-500 h-4 rounded-full" style={{ width: `${skill.percentage}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      <footer id='footer' className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Footer grid sections */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Me Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">About Me</h3>
            <p className="text-gray-400">
              I’m Aakib Jawed, a passionate Frontend Developer with expertise in creating user-friendly and visually engaging websites. I work with modern technologies like React, Tailwind CSS, and Node.js to develop interactive applications.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <a href="#projects" className="hover:text-yellow-500 transition-colors">
                  Projects
                </a>
              </li>
              <li className="mb-2">
                <a href="#education" className="hover:text-yellow-500 transition-colors">
                  Education
                </a>
              </li>
              <li className="mb-2">
                <a href="#skills" className="hover:text-yellow-500 transition-colors">
                  Skills
                </a>
              </li>
              <li className="mb-2">
                <a href="#courses" className="hover:text-yellow-500 transition-colors">
                  Courses
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-yellow-500 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div id='#contactinfo'>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <ul>
              <li className="mb-2">
                <span className="font-semibold">Email:</span>{' '}
                <a
                  href="mailto:your.email@example.com"
                  className="hover:text-yellow-500 transition-colors"
                >
                  aakibjawed033@gmail.com
                </a>
              </li>
              <li className="mb-2">
                <span className="font-semibold">Phone:</span> +91 7004961718
              </li>
              <li className="mb-2">
                <span className="font-semibold">Location:</span> Delhi, India
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Subscribe to Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Stay updated with my latest projects and blog posts by subscribing to my newsletter.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2 rounded-l-lg focus:outline-none text-gray-700"
              />
              <button
                type="submit"
                className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-r-lg hover:bg-yellow-600 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Additional Information Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Testimonials Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">What People Say</h3>
            <p className="text-gray-400 mb-2">
              "Aakib is a highly skilled and dedicated developer. His attention to detail and commitment to delivering top-quality projects are truly impressive."
            </p>
            <p className="text-gray-400 italic">– Client Name</p>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Me</h3>
            <div className="flex space-x-6">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                
                  <div><i class="ri-github-fill"></i></div>
              </a>
              <a
                href="https://www.linkedin.com/in/darkaj/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <div><h1><i class="ri-linkedin-fill"></i></h1></div>
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <div><h1><i class="ri-twitter-x-line"></i></h1></div>
              </a>
              <a
                href="mailto:your.email@example.com"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <div><h1><i class="ri-mail-add-line"></i></h1></div>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-12">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Aakib Jawed. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Built with <span className="text-yellow-600">React</span> and{' '}
            <span className="text-yellow-600">Tailwind CSS</span>.
          </p>
        </div>
      </div>
    </footer>

    </div>
  );
};


export default Header;