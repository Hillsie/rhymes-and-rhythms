import { FretBoardTemp } from '@/components/fretboard/fretBoardTemp'
import { FretBoardLayout } from '@/components/fretboard/fretboardlayout'

export default function FretBoard() {
    return (
        <main className="container mx-auto flex flex-col md:mt-20 lg:mt-44">
            <section className="flex justify-center place-self-center">
            <FretBoardLayout />
            </section>
            <FretBoardTemp/>
        </main>
    )
}
