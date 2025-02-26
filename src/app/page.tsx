import React from "react";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-gray-800 p-4 shadow-lg flex justify-between px-8">
        <h1 className="text-xl font-bold">Meu Portfólio</h1>
        <div className="space-x-4">
          <a href="#about" className="hover:text-gray-300">Sobre</a>
          <a href="#projects" className="hover:text-gray-300">Projetos</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-4">
        <h2 className="text-4xl font-bold">Olá, eu sou [Seu Nome]</h2>
        <p className="text-xl text-gray-400 mt-2">Frontend Developer apaixonado por criar interfaces incríveis.</p>
        <Button className="mt-4 bg-blue-500 hover:bg-blue-600">Saiba mais</Button>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-8 bg-gray-800 text-center">
        <h3 className="text-3xl font-semibold">Sobre mim</h3>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Sou um desenvolvedor frontend com experiência em tecnologias modernas, como React, Next.js e Tailwind CSS.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-8 text-center">
        <h3 className="text-3xl font-semibold">Projetos</h3>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Substitua pelos seus projetos reais */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h4 className="text-xl font-semibold">Projeto 1</h4>
            <p className="text-gray-400 mt-2">Descrição do projeto</p>
            <a href="#" className="text-blue-400 mt-2 block">Ver projeto</a>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h4 className="text-xl font-semibold">Projeto 2</h4>
            <p className="text-gray-400 mt-2">Descrição do projeto</p>
            <a href="#" className="text-blue-400 mt-2 block">Ver projeto</a>
          </div>
        </div>
      </section>
    </div>
  );
}