
import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import StudentsSection from "@/components/StudentsSection";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const filteredProjects = selectedCategory
    ? projects.filter(project => project.categories.includes(selectedCategory))
    : projects;
  
  const categories = Array.from(
    new Set(projects.flatMap(project => project.categories))
  );

  const handleCategoryClick = (category: string | null) => {
    setSelectedCategory(category);
    
    // Smooth scroll to projects section when category is clicked
    const projectsSection = document.getElementById("projetos");
    if (projectsSection) {
      setTimeout(() => {
        projectsSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-tech-950 to-tech-900">
      <Header />
      <Hero />
      
      <section id="projetos" className="container py-12 md:py-16 animate-fade-in">
        <div className="mb-8 md:mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">Projetos dos Alunos</h2>
          <p className="text-tech-200 max-w-3xl mx-auto px-4 md:px-0">
            Conheça os projetos desenvolvidos pelos alunos da disciplina de Aplicativos Informatizados
            do curso Técnico em Administração.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-10 px-2">
          <button
            onClick={() => handleCategoryClick(null)}
            className={`px-3 py-1 md:px-4 md:py-2 rounded-full text-sm font-medium transition-all
              ${selectedCategory === null 
                ? 'bg-tech-500 text-white' 
                : 'bg-tech-800 text-tech-200 hover:bg-tech-700'}`}
          >
            Todos
          </button>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`px-3 py-1 md:px-4 md:py-2 rounded-full text-sm font-medium transition-all
                ${selectedCategory === category 
                  ? 'bg-tech-500 text-white' 
                  : 'bg-tech-800 text-tech-200 hover:bg-tech-700'}`}
            >
              {category}
            </button>
          ))}
        </div>

        <ProjectGrid projects={filteredProjects} />
      </section>

      <StudentsSection />

      <section id="sobre" className="bg-tech-900 py-12 md:py-16">
        <div className="container px-4 md:px-8">
          <div className="bg-tech-800/50 backdrop-blur-sm rounded-xl p-4 md:p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-white text-center">Sobre a Disciplina</h2>
            <p className="text-tech-100 mb-4">
              A disciplina de Aplicativos Informatizados do curso Técnico em Administração 
              tem como objetivo capacitar os alunos com conhecimentos práticos sobre as tecnologias 
              utilizadas no ambiente empresarial moderno.
            </p>
            <p className="text-tech-100 mb-4">
              Durante o curso, abordamos temas essenciais como segurança da informação,
              gerenciamento de dados, armazenamento em nuvem, CRM (Customer Relationship Management),
              estratégias de marketing digital e gerenciamento de redes.
            </p>
            <p className="text-tech-100 mb-4">
              Os projetos apresentados nesta página são resultado do trabalho aplicado
              dos alunos, demonstrando sua compreensão sobre as ferramentas digitais
              e sua aplicação prática no contexto administrativo.
            </p>
            <div className="flex flex-col md:flex-row items-center bg-tech-700/50 rounded-lg p-4 mt-6">
              <div className="md:w-1/4 flex justify-center mb-4 md:mb-0">
                <div className="w-24 h-24 rounded-full bg-tech-500 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">CETAM</span>
                </div>
              </div>
              <div className="md:w-3/4 md:pl-6">
                <h3 className="text-xl font-bold text-white mb-2">Centro Educacional Tecnológico do Amazonas</h3>
                <p className="text-tech-100">
                  Esta disciplina foi ministrada pelo CETAM, instituição referência em educação profissional e tecnológica no estado do Amazonas, 
                  comprometida com o desenvolvimento de competências profissionais alinhadas às demandas do mercado de trabalho regional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
