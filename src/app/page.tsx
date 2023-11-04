import Image from 'next/image'
import plectrum from '@/images/icon.svg'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       <Image
      src={plectrum}
      width={100}
      height={100}
      alt="Colorful plectrum"
    />
    </main>
  )
}
