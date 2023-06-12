import Image from 'next/image'
import HomeImage from '@/layout/assets/images/home.png'
import GoogleIcon from '@/layout/assets/images/google.svg'
import RocketIcon from '@/layout/assets/images/rocket.svg'

export default function Home() {
  return (
    <main className="grow flex justify-center bg-Gray-800 py-5 text-white">
      <Image
        src={HomeImage}
        width={598}
        height={912}
        alt="Logo BookWise com fundo colorido e mulher lendo enquanto relaxa"
      />
      <div className="flex items-center justify-center px-56 pb-14">
        <section className="flex flex-col w-96">
          <h2 className="text-2xl">
            <strong>Boas vindas!</strong>
          </h2>
          <span className="text-Gray-200">
            Faça seu login ou acesse como visitante.
          </span>
          <div className="flex flex-col w-full mt-10 gap-y-4">
            <button className="w-full bg-Gray-600 rounded-lg flex items-center gap-x-5 text-Gray-200 py-5 px-6">
              <Image
                src={GoogleIcon}
                width={32}
                height={32}
                alt="Logo do Google"
              />
              <strong>Entrar com Google</strong>
            </button>
            <button className="w-full bg-Gray-600 rounded-lg flex items-center gap-x-5 text-Gray-200 py-5 px-6">
              <Image
                src={RocketIcon}
                width={32}
                height={32}
                alt="Ícone de foguete"
              />
              <strong>Acessar como visitante</strong>
            </button>
          </div>
        </section>
      </div>
    </main>
  )
}
