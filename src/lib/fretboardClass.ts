// Fretboard Class

interface Note {
    note: string;
    interval: string;
    color: string;
    shape: string;
    text: string;
}

class FretboardClass {
    numberOfStrings: number = 6;
    numberOfFrets: number = 13;
    
    static musicalAlphabet: {asSharps:string[],asFlats:string[]} = {
        asSharps:['E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#'],
        asFlats:['E', 'F', 'Gβ', 'G', 'Aβ', 'A', 'Bβ', 'B', 'C', 'Dβ', 'D', 'Eβ'],
    };

    private fretboard: string[][] = [];
    private graph: Record<string, Record<string, Note>> = {};

    constructor(tunning: string[]) {
        // Initialize the fretboard
        for (let string = 0; string < this.numberOfStrings; string++) {
            this.fretboard[string] = [];
            for (let fret = 0; fret < this.numberOfFrets; fret++) {
                this.fretboard[string][fret] = this.makeFretBoard(tunning, string, fret); // Implement this function based on your tuning
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
                        this.graph[note][otherNote] = this.createNoteObject(note, otherNote); // Implement this function based on your musical theory
                    }
                }
            }
        }
    }

    private makeFretBoard(tuning:string[], string: number, fret: number): string {
        if (tuning.length !== this.numberOfStrings) throw new Error('Invalid tunning option.Tunning for 6 strings is required.');
        // todo: Tunning validation, tunning selection
        const notes = FretboardClass.musicalAlphabet.asFlats;
        const startingNote = tuning[string];
        const startingIndex = notes.indexOf(startingNote);
        const noteIndex = (startingIndex + fret) % notes.length;
        return notes[noteIndex];
    }

    private createNoteObject(note: string, otherNote: string): Note {
        const interval = this.getInterval(note, otherNote);
        const color = this.getColorForNote(note);
        const shape = this.getShapeForNote(note);
        const text = this.getTextForNote(note);
        return { note, interval, color, shape, text };
    }

    private getInterval(note1: string, note2: string): string {
        const notesInOctave = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
        const distance = (notesInOctave.indexOf(note2) - notesInOctave.indexOf(note1) + 12) % 12;
        const intervals = ['unison', 'minor 2nd', 'major 2nd', 'minor 3rd', 'major 3rd', 'perfect 4th', 'augmented 4th/diminished 5th', 'perfect 5th', 'minor 6th', 'major 6th', 'minor 7th', 'major 7th'];
        return intervals[distance];
    }

    private getColorForNote(note: string): string {
        switch (note) {
            case 'C':
                return'rose'
            case 'C#':
                return 'fuchsia'
            case 'Dβ':
            case 'D':
                return 'violet'
            case 'D#':
            case 'Eβ':
            case 'E':
                return 'cyan'
            case 'F':
            case 'F#':
            case 'Gβ':
            case 'G':
                return 'emerald'
            case 'G#':
            case 'Aβ':
            case 'A':
            case 'A#':
            case 'Bβ':
            case 'B':
            default:
                return  'red'
        }
    }

    private getShapeForNote(note: string): string {
        // Implement your logic to determine the shape for each note
        // Return the shape based on the note
        // For example, you can use a switch statement or a lookup table
        // This is just a placeholder implementation
        return 'circle';
    }

    private getTextForNote(note: string): string {
        // Implement your logic to determine the text for each note
        // Return the text based on the note
        // For example, you can use a switch statement or a lookup table
        // This is just a placeholder implementation
        return note;
    }

    getColorOfNote(note: string): string {
        return this.graph[note][note].color;
      }

    getGraph(): Record<string, Record<string, Note>> {
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

    getIntervalBetweenNotes(note1: string, note2: string): string {
        return this.graph[note1][note2].interval;
    }
}

export default FretboardClass;
