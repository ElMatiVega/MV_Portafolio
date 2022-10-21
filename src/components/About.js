import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hola 👋 soy Matías.
            <br className="hidden lg:inline-block" />Full Stack Web Developer.
          </h1>
          <p className="mb-8 leading-relaxed">
          Soy de una pequeña ciudad de Argentina, desde hace 15 años trabajo en un servicio de emergencias médicas como Chofer de Ambulancias, en esta hermosa profesión como Técnico Superior en Emergencia Médica he aprendido a desarrollar habilidades como trabajar en equipo, el liderazgo, toma de decisiones en distintas situaciones y contextos.
          Me gusta hacer deportes y disfruto mucho las actividades al aire libre.
          El mundo IT siempre me llamó la atención y como todo niño curioso he decidido dar un giro profesional.
          No dejo de asombrarme en cada nuevo paso que doy, me motiva mucho. Tengo buena predisposición de aprender nuevas tecnologías para seguir creciendo.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Contactame
            </a>
            <a 
            
              href="./CV Vega Matías Lucas Gabriel.pdf" 
              target="_blank"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg ">
              Mi CV      
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded rounded-full"
            alt="hero"
            src="./selfie.jpg"
          />
        </div>
      </div>
    </section>
  );
}
