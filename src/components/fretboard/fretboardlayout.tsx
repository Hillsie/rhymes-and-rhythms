// Nut
// Frets 22 Same as fender
// Strings

import FretboardClass from "@/lib/fretboardClass"
import clsx from "clsx"

// Width
const GuitarString = () => <div className="h-1 w-24 bg-slate-900 self-center" />

interface HeadStockNotesProps {
    notes: string[];
}

function HeadStockNotes({ notes = ["y", "y", "y", "y", "y", "y"]}: HeadStockNotesProps) {
    return (
        <div className="h-64 w-7 grid grid-rows-6 justify-center place-content-center">
            {notes.map((note, index) => (
                <button key={note + index} className="p-2"
                >
                    {note}
                </button>
            ))}
        </div>
    );
}

function Inlay({ fretNumber = 0 }) {
    // if the fret number is 1, 3, 5, 7, 9 or 12 show the inlay
    switch (fretNumber) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 9:
            return <div className="z-0 rounded-full h-7 w-7 bg-slate-900 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        case 12:
            return (
                <div className="flex flex-col justify-between z-0 h-24 w-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" >
                    <div className="z-0  rounded-full h-7 w-7 bg-slate-900" />
                    <div className="z-0 rounded-full h-7 w-7 bg-slate-900" />
                </div>
            )
        default:
            return null
    }
}

interface NoteButtonProps {
    note: string;
    fretNumber: number;
    // key: Key | null | undefined;
}

function NoteButton(props: NoteButtonProps) {
    return <button className="border border-teal-600 rounded-full h-9 w-9 mr-2 mt-1">{props.note}</button>
}


interface FretNotesProps {
    fretNotes: string[];
    fretNumber: number;
}

function Fret({ fretNotes = ["x", "x", "x", "x", "x", "x"], fretNumber = 0 }: FretNotesProps) {
    return (
        <div id={`fret${fretNumber}`} className="grid grid-col-3 justify-end place-content-center z-0 relative">
            <div className="h-64 w-20 grid grid-rows-6 row-start-1 col-start-1 col-end-1 justify-end place-content-center z-30">
                {fretNotes.map((note, index) => (
                    <NoteButton note={note} key={index} fretNumber={fretNumber} />
                    // <button key={index} className="border border-teal-600 rounded-full h-9 w-9 mr-2 mt-1">{note}</button>
                ))}
            </div>
            <Inlay fretNumber={fretNumber} />
            <div className="h-64 col-start-1 col-end-3 row-start-1 row-end-6 grid grid-rows-6 place-content-center z-20">
                {Array.from({ length: 6 }).map((_, index) => (
                    <GuitarString key={index} />
                ))}
            </div>
            <div id={`thefret${fretNumber}`}
                className="h-64 w-2 col-start-2 col-end-2 row-start-1 row-end-6 rounded-md bg-gradient-to-r from-gray-900 to-slate-800 shadow-sm z-10"
            />
            <button className="col-start-1 text-center text-sm pl-5 mr-1 text-slate-800">
                {fretNumber}
            </button>
        </div>
    )
}

function LastFretStyle() {
    return (
        <div className="grid grid-col-3 justify-end place-content-center z-0">
            <div className="h-64 w-20 grid grid-rows-6 row-start-1 col-start-1 col-end-1 justify-end place-content-center z-30">
                {Array.from({ length: 6 }).map((_, index) => (
                    <div className="p-2" key={index + 1} />
                ))}
            </div>
            <div className="h-64 w-2 col-start-2 col-end-2 row-start-1 row-end-6" />
            <div className="h-64 col-start-1 col-end-3 row-start-1 row-end-6 grid grid-rows-6 place-content-center z-20 ">
                {Array.from({ length: 6 }).map((_, index) => (
                    <GuitarString key={index + 'string'} />
                ))}
            </div>
            <div className="col-start-1 text-center text-sm pl-5 mr-1 text-slate-800">
                &nbsp;
            </div>
        </div>
    )
}


function Nut() {
    return <div className="h-64 w-7 rounded-md bg-gradient-to-r from-violet-700  to-violet-800 shadow-xl" />
}



export function FretBoardLayout() {
    
    const tuning = ['E', 'A', 'D', 'G', 'B', 'E'];
    const fretboard = new FretboardClass(tuning)
    const notesByFret = fretboard.getAllNotesbyFret()
    console.log(fretboard.getGraph())
    return (
        <div className="flex flex-row border border-gray-900 rounded-md p-3 shadow-neutral-950 shadow-md drop-shadow-md ">
            <HeadStockNotes 
                notes={notesByFret[0]}
                />
            <Nut />
            {[...Array(12)].map((_, index) => (
                <Fret 
                key={notesByFret[index + 1].join()} 
                fretNumber={index + 1} 
                fretNotes={notesByFret[index + 1]} 
                />
            ))}
            <LastFretStyle />
        </div>
    )
}