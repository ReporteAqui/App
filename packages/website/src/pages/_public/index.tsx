import "@/styles.css";
import { createFileRoute, Link } from '@tanstack/react-router'
import logo from '@/logo.svg'
import { FaLeaf } from "react-icons/fa";
import { FiTrendingUp } from "react-icons/fi";
import Notices from '@/components/cards';
import { FaWrench } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";

export const Route = createFileRoute('/_public/')({
  component: App,
})

function App() {
  return (
    <>
      <div className="gap-y-8 py-8 pt-28 mb-8 md:px-[calc((100vw-736px)/2)] px-8 flex flex-col items-center bg-linear-to-br from-green-400 to-green-700">
        <FaLeaf className="lg:w-18 lg:h-18 w-15 h-15 fill-white"/>
        <h1 className="lg:text-4xl text-3xl font-bold text-center text-white">
          Bem-vindo ao Reporte Aqui
        </h1>
        <h5 className="text-[16px] text-center text-white">
          Sua voz é fundamental para melhorar o saneamento básico e o meio ambiente em nossa cidade. Reporte problemas, acompanhe soluções e contribua para uma Anápolis mais limpa e saudável.
        </h5>
      </div>

      <div className="gap-y-8 py-8 md:px-[calc((100vw-736px)/2)] px-8  flex flex-col items-center">
        <div className="w-full px-4 py-8 flex flex-col items-center gap-y-4 border shadow-inner border-black/20 bg-neutral-100 dark:bg-neutral-900 rounded-4xl shadow-black/20">
          <h1 className="text-xl font-bold text-center">
            Faça parte da mudança!
          </h1>
          <h3 className="text-sm text-center font-medium text-neutral-600 dark:text-neutral-400">
            Reporte problemas de saneamento ou ambiental e ajude a construir uma Anápolis melhor para todos.
          </h3>
          <Link to='/' className='px-4 py-2 text-center font-bold text-lg rounded-full shadow-md shadow-black/20 text-white dark:text-white bg-green-600'>
            Reportar Problema
          </Link>
        </div>
      </div>

      <div className="gap-y-8 py-8 md:px-[calc((100vw-736px)/2)] px-8  flex flex-col items-center">
        <div className="w-full px-4 py-8 gap-y-8 flex flex-col items-center gap-y-4 border shadow-inner border-black/20 bg-neutral-100 dark:bg-neutral-900 rounded-4xl shadow-black/20">
          <h1 className="text-xl font-bold text-center">
            Comunicados
          </h1>
          <h3 className="text-sm text-center font-medium text-neutral-600 dark:text-neutral-400">
            Veja alguns dos comunicados mais recentes
          </h3>

          <div className="w-full grid card-grid gap-4">
            <Notices title={'Esgoto'} body={'Problema resolvido'}>
              <FaWrench />
            </Notices>

            <Notices title={'Esgoto'} body={'Problema resolvido'}>
              <FaWrench />
            </Notices>

            <Notices title={'Esgoto'} body={'Problema resolvido'}>
              <FaWrench />
            </Notices>
          </div>

          <div>
            <Link to='/' className='text-sm text-center font-medium bg-green-600 text-white px-4 py-2 rounded-full'>Ver mais...</Link>
          </div>
          

          <div className="w-full flex items-center justify-center p-2 gap-4 rounded-xl shadow-lg bg-green-600 shadow-black/10">
            <FiTrendingUp className='w-8 h-8 stroke-white fill-none'/>
            <div className='flex flex-col'>
              <h2 className='font-bold text-lg text-white'>847 Problemas Resolvidos</h2>
              <h4 className='font-medium text-sm text-white'>Desde o lançamento da plataforma</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="gap-y-8 py-8 md:px-[calc((100vw-736px)/2)] px-8 flex flex-col items-center">
        <div className="w-full px-4 py-8 flex flex-col gap-y-4 border shadow-md border-black/20 bg-blue-600 rounded-4xl shadow-black/20">
          <div className="flex items-center justify-center gap-4">
            <div className="p-2 bg-white rounded-full">
              <FaUser className='w-6 h-6 stroke-blue-600 fill-blue-600'/>
            </div>

            <h2 className="text-lg font-bold text-start text-white">
              Prefeito Marcio
            </h2>
          </div>

          <div className="p-2 bg-blue-500 rounded-lg shadow-inner shadow-black/10">
            <h4 className="text-sm text-center text-white">
              Comprometida com a transparência e eficiência no atendimento às demandas da população
            </h4>
          </div>
        </div>
      </div>

      <div className="gap-y-8 py-8 md:px-[calc((100vw-736px)/2)] px-8  flex flex-col items-center">
        <div className="w-full px-4 py-8 flex flex-col gap-y-4 border shadow-inner border-black/20 bg-neutral-100 dark:bg-neutral-900 rounded-4xl shadow-black/20">
          <h1 className="text-xl font-bold text-center">
            Saneago
          </h1>
          <h3 className="text-sm text-center text-neutral-600 dark:text-neutral-400">
            Companhia de Saneamento de Goiás
          </h3>

          <h3 className="text-sm text-center text-neutral-600 dark:text-neutral-400">
            A SANEAGO é nossa parceira estratégica na execução dos serviços de água e esgoto em Anápolis. Com profissionais qualificados e equipamentos modernos, garantimos soluções rápidas e eficazes para todos os reportes recebidos.
          </h3>

          <div className="w-full flex items-center justify-center gap-4">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-md font-bold text-orange-500">
                24H
              </h1>
              <h4 className="text-sm text-center text-neutral-700 dark:text-neutral-300">
                Atendimento
              </h4>
            </div>

            <div className="flex flex-col items-center justify-center">
              <h1 className="text-md font-bold text-orange-500">
                90%
              </h1>
              <h4 className="text-sm text-center text-neutral-700 dark:text-neutral-300">
                Eficiencia
              </h4>
            </div>

            <div className="flex flex-col items-center justify-center">
              <h1 className="text-md font-bold text-orange-500">
                15 anos
              </h1>
              <h4 className="text-sm text-center text-neutral-700 dark:text-neutral-300">
                Experiencia
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}