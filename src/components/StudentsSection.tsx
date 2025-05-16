
import { ScrollArea } from "@/components/ui/scroll-area";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";

interface Student {
  name: string;
  finalScore: string;
}

const students: Student[] = [
  { name: "ADENILSON ALMEIDA TAPUDIMA", finalScore: "10,00" },
  { name: "ALEXANDRA FERREIRA MILITAO", finalScore: "9,30" },
  { name: "ALTERMAN LIMAO GUERREIRO", finalScore: "9,80" },
  { name: "AURIANE AIAMBO LIMA", finalScore: "9,50" },
  { name: "CAROLINE MARINHO DA SILVA", finalScore: "10,00" },
  { name: "CONCEICAO AZEVEDO DE ARAUJO", finalScore: "10,00" },
  { name: "EMINA LEOPOLDINO JOAQUIM", finalScore: "9,50" },
  { name: "EURENICE DA SILVA GOMES", finalScore: "10,00" },
  { name: "FERNANDA DA SILVA INACIO", finalScore: "9,50" },
  { name: "FRANCISCO NEGREIROS DA SILVA NETO", finalScore: "10,00" },
  { name: "GILZIANDRE GUIMARAES BATALHA", finalScore: "10,00" },
  { name: "JOSINEIA LIMA DE SOUZA", finalScore: "10,00" },
  { name: "KAULI ROCHA VEIGA", finalScore: "10,00" },
  { name: "KAUWANY FERNANDES ALVES", finalScore: "10,00" },
  { name: "MARIA DA CONCEICAO DOS SANTOS BRITO", finalScore: "10,00" },
  { name: "MARIA DOS REIS FARIAS", finalScore: "9,80" },
  { name: "MARQUILENE GOMES PESO", finalScore: "10,00" },
  { name: "NADIA ROBERTA DA SILVA NASCIMENTO", finalScore: "9,50" },
  { name: "NAYARA LIMA RODRIGUES", finalScore: "9,50" },
  { name: "NAYZE MOCAMBITE DE LIMA", finalScore: "9,50" },
  { name: "NILCIENE PEREIRA CASTILHO", finalScore: "10,00" },
  { name: "PATRICIA JUDITH DOS SANTOS CHAGAS", finalScore: "10,00" },
  { name: "PEDRO GUILHERME TAPUDIMA DA COSTA", finalScore: "10,00" },
  { name: "PEDRO VICTOR DA SILVA E SILVA", finalScore: "10,00" },
  { name: "REGINA DA COSTA BARBOSA", finalScore: "10,00" },
  { name: "RUBENS DA SILVA DE SOUZA", finalScore: "10,00" },
  { name: "SARAH QUEZIA DA SILVA ARIMATEIA", finalScore: "10,00" },
  { name: "TACIANY AZEVEDO DOS SANTOS", finalScore: "9,50" },
  { name: "VALDEMIRO RODRIGUES DA ROCHA FILHO", finalScore: "9,50" },
  { name: "VITORIA MARTINS TEIXEIRA", finalScore: "10,00" },
  { name: "WAGNER COELHO PEREIRA", finalScore: "10,00" },
  { name: "YANNE RAMOS CHUNHA", finalScore: "N/A" }
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
          <ScrollArea className="h-[500px] w-full">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-tech-100 font-bold">Nome do Aluno</TableHead>
                  <TableHead className="text-tech-100 font-bold text-right">Nota Final</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {students.map((student, index) => (
                  <TableRow 
                    key={index}
                    className="animate-fade-in text-tech-100 hover:bg-tech-700/30"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <TableCell className="font-medium">{student.name}</TableCell>
                    <TableCell className="text-right">{student.finalScore}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ScrollArea>
        </div>
      </div>
    </section>
  );
};

export default StudentsSection;
