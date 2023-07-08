import Image from 'next/image'

export function Avatar({ src }: { src: string }) {
  return (
    <Image
      src={src}
      width={40}
      height={40}
      alt="Foto de perfil de usuário"
      className="rounded-full w-[40px] h-[40px] object-cover"
      style={{
        border: `1.5px solid #7FD1CC`,
      }}
    />
  )
}
