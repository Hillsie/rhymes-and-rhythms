// Nut
// Frets 22 Same as fender
// Strings

import ClassFretboard from "@/lib/classFretboard"

// Width
const GuitarString =() => <div className="h-1 w-24 bg-slate-900 self-center"/>

interface HeadStockNotesProps {
    notes: string[];
}

function HeadStockNotes({ notes = ["y", "y", "y", "y", "y", "y"] }: HeadStockNotesProps) {
    return (
        <div className="h-64 w-7 grid grid-rows-6 justify-center place-content-center">
            {notes.map((note, index) => (
                <button key={note + index} className="p-2">
                    {note}
                </button>
            ))}
        </div>
    );
}

function Inlay(){
    return (
        <div className="z-0 rounded-full h-7 w-7 bg-slate-900 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        </div>
    )
}

interface FretNotesProps {
    fretNotes: string[];
}

function Fret({fretNotes=["x", "x", "x", "x", "x", "x"]}: FretNotesProps){
    return (
        <div className="grid grid-col-3 justify-end place-content-center z-0 relative">
        <div className="h-64 w-20 grid grid-rows-6 row-start-1 col-start-1 col-end-1 justify-end place-content-center z-30">
            {fretNotes.map((note, index) => (
                <button key={index} className="border border-teal-600 rounded-full h-9 w-9 mr-2">{note}</button>
            ))}
        </div>
            <div className="h-64 w-2 col-start-2 col-end-2 row-start-1 row-end-6 rounded-md bg-gradient-to-r from-gray-900 to-slate-800 shadow-sm z-10">
            </div>
            <div className="h-64 col-start-1 col-end-3 row-start-1 row-end-6 grid grid-rows-6 place-content-center z-20">
                {Array.from({ length: 6 }).map((_, index) => (
                    <GuitarString key={index} />
                ))}
            </div>
            <Inlay />
        </div>
    )
}

function Last(){
    return (
        <div className="grid grid-col-3 justify-end place-content-center z-0">
        <div className="h-64 w-20 grid grid-rows-6 row-start-1 col-start-1 col-end-1 justify-end place-content-center z-30">
            <div className="p-2" key="1"/>
            <div className="p-2" key="2"/>
            <div className="p-2" key="3"/>
            <div className="p-2" key="4"/>
            <div className="p-2" key="5"/>
            <div className="p-2" key="6"/>
        </div>
            <div className="h-64 w-2 col-start-2 col-end-2 row-start-1 row-end-6">
            </div>
            <div className="h-64 col-start-1 col-end-3 row-start-1 row-end-6 grid grid-rows-6 place-content-center z-20">
            {Array.from({ length: 6 }).map((_, index) => (
                    <GuitarString key={index + 'string'} />
                ))}
            </div>

        </div>
    )
}


function Nut(){
    return (
        <div className="h-64 w-7 rounded-md bg-gradient-to-r from-violet-700  to-violet-800 shadow-xl">
            
        </div>
    )
}

export function FretBoardLayout(){
    const fretboard =  new ClassFretboard()
    const notesByFret = fretboard.getAllNotesbyFret()
    return (
        <div className="flex flex-row border border-gray-900 rounded-md p-3 shadow-neutral-950 shadow-md drop-shadow-md ">
            <HeadStockNotes notes={notesByFret[0]}/>
            <Nut />
            {[...Array(11)].map((_, index) => (
                <Fret key={notesByFret[index + 1].join()} fretNotes={notesByFret[index + 1]} />
            ))}
            <Last />
        </div>
    )
}