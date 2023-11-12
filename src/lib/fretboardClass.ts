// Fretboard Class


class FretboardClass {
    numberOfStrings: number = 6;
    numberOfFrets: number = 13;
    private fretboard: string[][] = [];
    private graph: Record<string, Record<string, string>> = {};


    constructor() {
        // Initialize the fretboard
        for (let string = 0; string < this.numberOfStrings; string++) {
            this.fretboard[string] = [];
            for (let fret = 0; fret < this.numberOfFrets; fret++) {
                this.fretboard[string][fret] = this.makeFretBoard(string, fret); // Implement this function based on your tuning
            }
        }

        // Initialize the graph
        for (let string = 0; string < this.numberOfStrings; string++) {
            for (let fret = 0; fret < this.numberOfFrets; fret++) {
                let note = this.fretboard[string][fret];
                if (!this.graph[note]) {
                    this.graph[note] = {};
                }
                // Add edges to all other notes
                for (let otherString = 0; otherString < this.numberOfStrings; otherString++) {
                    for (let otherFret = 0; otherFret < this.numberOfFrets; otherFret++) {
                        let otherNote = this.fretboard[otherString][otherFret];
                        this.graph[note][otherNote] = this.getInterval(note, otherNote); // Implement this function based on your musical theory
                    }
                }
            }
        }
    }

    private makeFretBoard(string: number, fret: number): string {
        const notes = ['E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#'];
        const tuning = ['E', 'A', 'D', 'G', 'B', 'E'];
        const startingNote = tuning[string];
        const startingIndex = notes.indexOf(startingNote);
        const noteIndex = (startingIndex + fret) % notes.length;
        return notes[noteIndex];
    }

    getGraph(): Record<string, Record<string, string>> {
        return this.graph;
    }

    getFretboard(): string[][] {
        return this.fretboard;
    }

    getNotesByFret(fret: number): string[] {
        const notes: string[] = [];
        for (let string = 0; string < this.numberOfStrings; string++) {
            notes.push(this.fretboard[string][fret]);
        }
        return notes;
    }

    getAllNotesbyFret(): string[][] {
        const notes: string[][] = [];
        for (let fret = 0; fret < this.numberOfFrets; fret++) {
            const notesAtFret: string[] = [];
            for (let string = 0; string < this.numberOfStrings; string++) {
                notesAtFret.push(this.fretboard[string][fret]);
            }
            notes.push(notesAtFret);
        }
        return notes;
    }

    private getInterval(note1: string, note2: string): string {
        const notesInOctave = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
        const distance = (notesInOctave.indexOf(note2) - notesInOctave.indexOf(note1) + 12) % 12;
        const intervals = ['unison', 'minor 2nd', 'major 2nd', 'minor 3rd', 'major 3rd', 'perfect 4th', 'augmented 4th/diminished 5th', 'perfect 5th', 'minor 6th', 'major 6th', 'minor 7th', 'major 7th'];
        return intervals[distance];
    }

    getIntervalBetweenNotes(note1: string, note2: string): string {
        return this.graph[note1][note2];
    }

}

export default FretboardClass;

/*
musical interval between two notes. In music theory, an interval is the difference in pitch between two sounds.
const notesInOctave = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']; - This line defines an array of musical notes in an octave. 
An octave is a series of eight notes. 
The octave used here is the chromatic scale, which includes all 12 notes (including sharps).
const distance = (notesInOctave.indexOf(note2) - notesInOctave.indexOf(note1) + 12) % 12; -
calculates the distance between the two notes in terms of their positions in the chromatic scale. 
The + 12 ensures that the result is positive (since we're dealing with a circular scale), 
and % 12 ensures that the result is within the range 0-11 (since there are 12 notes in an octave).

const intervals = ['unison', 'minor 2nd', 'major 2nd', 'minor 3rd', 'major 3rd', 'perfect 4th', 'augmented 4th/diminished 5th', 'perfect 5th', 'minor 6th', 'major 6th', 'minor 7th', 'major 7th']; 
- Defines an array of musical intervals. These are the names given to the distances between notes. 
For example, a "unison" means the notes are the same, a "major 3rd" is four steps apart on the chromatic scale, and so on.

return intervals[distance]; - returns the name of the interval corresponding to the calculated distance.
called getInterval('C', 'E'), the function would return 'major 3rd', because E is a major 3rd interval from C.
*/