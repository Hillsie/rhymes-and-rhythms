'use client'
import { FretBoardLayout } from '@/components/fretboard/fretboardlayout'

export default function FretBoard() {
    return (
        <main className="flex flex-col md:mt-20 lg:mt-44">
            <section className="place-self-center my-20">
                <FretBoardLayout />
            </section>
        </main>
    )
}
