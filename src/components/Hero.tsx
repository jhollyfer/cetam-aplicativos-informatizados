
const Hero = () => {
  return (
    <section className="relative bg-tech-950 py-20 md:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-tech-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-40 -right-20 w-80 h-80 bg-tech-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-40 h-40 bg-tech-400/10 rounded-full blur-3xl"></div>
      </div>
      
      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Projetos de Aplicativos Informatizados
          </h1>
          
          <p className="text-lg md:text-xl text-tech-100 mb-8 max-w-2xl mx-auto">
            Trabalhos desenvolvidos pelos alunos do curso Técnico em Administração,
            explorando segurança digital, gerenciamento de dados, marketing digital e mais.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#projetos" 
              className="bg-tech-500 hover:bg-tech-600 text-white font-medium py-3 px-6 rounded-md transition-all focus:ring-2 focus:ring-tech-400"
            >
              Ver Projetos
            </a>
            <a 
              href="#sobre" 
              className="bg-tech-800 hover:bg-tech-700 text-tech-100 font-medium py-3 px-6 rounded-md transition-all focus:ring-2 focus:ring-tech-800"
            >
              Sobre a Disciplina
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
