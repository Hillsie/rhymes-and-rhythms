import Image from 'next/image'
import plectrum from '@/images/icon.svg'
import { FretBoardLayout } from '@/components/fretboard/fretboardlayout'

export default function FretBoard() {
    return (
        <main className="container mx-auto flex flex-col  border border-red-700 h-screen">
            <Image
                src={plectrum}
                width={100}
                height={100}
                alt="Colorful plectrum"
            />
            <section className="flex justify-center place-self-center">
            <FretBoardLayout />
            </section>
        </main>
    )
}
