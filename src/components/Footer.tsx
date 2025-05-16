
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-tech-950 py-10 mt-auto">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-white text-xl font-bold mb-2">
              <span className="text-tech-400">Tech</span>Admin
            </h2>
            <p className="text-tech-300 text-sm">
              Curso Técnico em Administração
            </p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-tech-300 text-sm">
              &copy; {currentYear} Todos os direitos reservados
            </p>
            <p className="text-tech-400 text-xs mt-1">
              Disciplina de Aplicativos Informatizados
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
