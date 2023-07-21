import Image from 'next/image'

export function Avatar({
  src,
  width = 40,
  height = 40,
}: {
  src: string
  width?: number
  height?: number
}) {
  return (
    <Image
      src={src}
      width={width}
      height={height}
      alt="Foto de perfil de usuário"
      className={`rounded-full w-[${width}px] h-[${height}px] object-cover`}
      style={{
        border: `1.5px solid #7FD1CC`,
      }}
    />
  )
}
