import FretboardClass from "@/lib/fretboardClass"

interface NoteButtonProps {
    note: string;
    fretNumber: number;
    isNoteInScale: boolean;
}

function NoteButton({ note, fretNumber, isNoteInScale }: NoteButtonProps) {
    return (
        <button id={note + "-" + fretNumber} className="grid grid-rows-3 text-xs h-5 w-5 divide-y divide-emerald-950 z-0">
            <span className="row-start-0 row-end-2 text-center z-20">
                <span style={{ visibility: isNoteInScale ? 'visible' : 'hidden' }}>
                    {note}
                </span>
            </span>
            <span className="z-10" />
        </button>)
}


interface FretNotesProps {
    fretNotes: string[];
    fretNumber: number;
    funcIsNoteInScale: (note: string) => boolean;
}

function Fret({ fretNotes = ["E", "B", "G", "D", "A", "E"], fretNumber = 0, funcIsNoteInScale }: FretNotesProps) {
    return (
        <div id={`fret${fretNumber}`} className="relative flex flex-col border-r-2 border-r-slate-800">
            {fretNotes.map((note, index) => (
                <NoteButton note={note} key={index} fretNumber={fretNumber} isNoteInScale={funcIsNoteInScale(note)} />
            ))}
            <button className={`${[3, 5, 7, 9, 12, 15, 17, 19, 21].includes(fretNumber) ? 'text-slate-800 border text-center text-xs border-slate-900 rounded-full h-5 w-5' : ' text-center text-xs text-slate-800 h-5 w-5'}`}>
                {fretNumber}
            </button>
        </div>
    )
}


export function FretBoardLayout() {
    const tuning = ['E', 'B', 'G', 'D', 'A', 'E'];
    const majorScaleIntervals = ['T', 'T', 'ST', 'T', 'T', 'T', 'ST'] // Major scale intervals
    const scaleKey = 'C'

    const fretboard = new FretboardClass(tuning)

    const handleIsNoteInScale = (note: string) => {
        return fretboard.isNoteInScale(note, scaleKey, majorScaleIntervals)
    }
    return (
        <div className="flex flex-row border border-gray-900 rounded-md p-3 shadow-neutral-950 shadow-md drop-shadow-md ">
            {[...Array(23)].map((_, index) => (
                <Fret
                    key={fretboard.getNotesByFret(index).join() + index}
                    fretNumber={index}
                    fretNotes={fretboard.getNotesByFret(index)}
                    funcIsNoteInScale={handleIsNoteInScale}
                />
            ))}
        </div>
    )
}