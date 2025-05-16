
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Student {
  name: string;
}

const students: Student[] = [
  { name: "ADENILSON ALMEIDA TAPUDIMA" },
  { name: "ALEXANDRA FERREIRA MILITAO" },
  { name: "ALTERMAN LIMAO GUERREIRO" },
  { name: "AURIANE AIAMBO LIMA" },
  { name: "CAROLINE MARINHO DA SILVA" },
  { name: "CONCEICAO AZEVEDO DE ARAUJO" },
  { name: "EMINA LEOPOLDINO JOAQUIM" },
  { name: "EURENICE DA SILVA GOMES" },
  { name: "FERNANDA DA SILVA INACIO" },
  { name: "FRANCISCO NEGREIROS DA SILVA NETO" },
  { name: "GILZIANDRE GUIMARAES BATALHA" },
  { name: "JOSINEIA LIMA DE SOUZA" },
  { name: "KAULI ROCHA VEIGA" },
  { name: "KAUWANY FERNANDES ALVES" },
  { name: "MARIA DA CONCEICAO DOS SANTOS BRITO" },
  { name: "MARIA DOS REIS FARIAS" },
  { name: "MARQUILENE GOMES PESO" },
  { name: "NADIA ROBERTA DA SILVA NASCIMENTO" },
  { name: "NAYARA LIMA RODRIGUES" },
  { name: "NAYZE MOCAMBITE DE LIMA" },
  { name: "NILCIENE PEREIRA CASTILHO" },
  { name: "PATRICIA JUDITH DOS SANTOS CHAGAS" },
  { name: "PEDRO GUILHERME TAPUDIMA DA COSTA" },
  { name: "PEDRO VICTOR DA SILVA E SILVA" },
  { name: "REGINA DA COSTA BARBOSA" },
  { name: "RUBENS DA SILVA DE SOUZA" },
  { name: "SARAH QUEZIA DA SILVA ARIMATEIA" },
  { name: "TACIANY AZEVEDO DOS SANTOS" },
  { name: "VALDEMIRO RODRIGUES DA ROCHA FILHO" },
  { name: "VITORIA MARTINS TEIXEIRA" },
  { name: "WAGNER COELHO PEREIRA" },
  { name: "YANNE RAMOS CHUNHA" }
];

const StudentsSection = () => {
  return (
    <section id="alunos" className="bg-tech-950 py-16 animate-fade-in">
      <div className="container">
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-bold mb-3 text-white">Nossos Alunos</h2>
          <p className="text-tech-200 max-w-3xl mx-auto">
            Conheça os estudantes do curso Técnico em Administração que participaram da disciplina de Aplicativos Informatizados e desenvolveram os projetos apresentados.
          </p>
        </div>
        
        <div className="bg-tech-800/50 backdrop-blur-sm rounded-xl p-6 max-w-4xl mx-auto">
          <Carousel className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {students.map((student, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div 
                    className="flex items-center justify-center h-32 p-4 rounded-lg bg-tech-700/30 text-tech-100 hover:bg-tech-600/40 transition-all cursor-pointer animate-fade-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <h3 className="text-center font-medium">{student.name}</h3>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6 gap-2">
              <CarouselPrevious className="relative static left-auto transform-none" />
              <CarouselNext className="relative static right-auto transform-none" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default StudentsSection;
