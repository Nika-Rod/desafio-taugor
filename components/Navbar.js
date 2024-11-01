import Link from 'next/link';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';

const Navbar = ({ passoAtual, totalPassos }) => {
  const progresso = passoAtual && totalPassos ? (passoAtual / totalPassos) * 100 : 0;

  return (
    <>
      <div className="w-full border-b border-gray-300 grid grid-cols-8 items-center p-4">
        <div className="mr-4">
          <Link href={'/'}>
            <img src="images/taugor-logo-2.png" alt="Logo" width={200} />
          </Link>
        </div>

        {passoAtual && totalPassos ? (
          <div className='flex flex-col col-span-6'>
            <div className="text-gray-500 text-sm font-semibold">
              PASSO {passoAtual} DE {totalPassos}
            </div>

            <div className="text-base font-bold">
              {passoAtual === 1 ? "Informação de contato" :
               passoAtual === 2 ? "Detalhes do usuário" :
               "Experiência do usuário"}
            </div>
          </div>
        ) : (
          <div className="flex flex-col col-span-6">
            <div className="text-base font-bold text-gray-700">
              Bem-vindo ao sistema
            </div>
          </div>
        )}

        <div className='text-end'>
          <Link href={'/'}>
            <HomeSharpIcon />
          </Link>
        </div>
      </div>

      {passoAtual && totalPassos && (
        <div className="flex-grow h-1 rounded-full bg-gray-200 relative">
          <div
            className="absolute top-0 left-0 h-1 rounded-full bg-blue-500"
            style={{ width: `${progresso}%` }}
          ></div>
        </div>
      )}
    </>
  );
};

export default Navbar;
