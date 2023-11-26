// Fretboard Class

interface Note {
    note: string;
    interval: string;
}

class FretboardClass {
    numberOfStrings: number = 6;
    numberOfFrets: number = 23;

    static musicalAlphabet: { asSharps: string[], asFlats: string[] } = {
        asSharps: ['E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#'],
        asFlats: ['E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb'],
    };

    private fretboard: string[][] = [];
    private graph: Record<string, Record<string, Note>> = {};

    constructor(tunning: string[]) {
        // Initialize the fretboard
        this.numberOfFrets = 23;
        for (let guitarString = 0; guitarString < this.numberOfStrings; guitarString++) {
            this.fretboard[guitarString] = [];
            for (let fret = 0; fret < this.numberOfFrets; fret++) {
                this.fretboard[guitarString][fret] = this.makeFretBoard(tunning, guitarString, fret); // Implement this function based on your tuning
            }
        }

        // Initialize the graph
        for (let guitarString = 0; guitarString < this.numberOfStrings; guitarString++) {
            for (let fret = 0; fret < this.numberOfFrets; fret++) {
                let note = this.fretboard[guitarString][fret];
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

    private makeFretBoard(tuning: string[], guitarString: number, fret: number): string {
        if (tuning.length !== this.numberOfStrings) throw new Error('Invalid tunning option.Tunning for 6 strings is required.');
        // todo: Tunning validation, tunning selection
        const notes = FretboardClass.musicalAlphabet.asFlats;
        const startingNote = tuning[guitarString];
        const startingIndex = notes.indexOf(startingNote);
        const noteIndex = (startingIndex + fret) % notes.length;
        return notes[noteIndex];
    }

    private createNoteObject(note: string, otherNote: string): Note {
        const interval = this.getInterval(note, otherNote);
        return { note, interval };
    }

    private getInterval(note1: string, note2: string): string {
        // wip: not sure if I am going to do it this way
        const notesInOctave = FretboardClass.musicalAlphabet.asFlats;
        const distance = (notesInOctave.indexOf(note2) - notesInOctave.indexOf(note1) + 12) % 12;
        const intervals = ['root', 'minor 2nd', 'major 2nd', 'minor 3rd', 'major 3rd', 'perfect 4th', 'augmented 4th/diminished 5th', 'perfect 5th', 'minor 6th', 'major 6th', 'minor 7th', 'major 7th'];
        return intervals[distance];
    }


    getGraph(): Record<string, Record<string, Note>> {
        return this.graph;
    }

    getFretboard(): string[][] {
        return this.fretboard;
    }

    getNotesByFret(fret: number): string[] {
        const notes: string[] = [];
        for (let guitarString = 0; guitarString < this.numberOfStrings; guitarString++) {
            notes.push(this.fretboard[guitarString][fret]);
        }
        return notes;
    }

    isNoteInScale(note: string, scaleKey: string, scaleIntervalPattern: string[]): boolean {
        const scaleNotes = this.getScaleNotes(scaleKey, scaleIntervalPattern);
        return scaleNotes.includes(note);
    }


    private getScaleNotes(scaleKey: string, scaleIntervalPattern: string[]): string[] {
        const startingNoteIndex = FretboardClass.musicalAlphabet.asFlats.indexOf(scaleKey);
        const scaleNotes: string[] = [];
        let currentIndex = startingNoteIndex;
        for (const interval of scaleIntervalPattern) {
            scaleNotes.push(FretboardClass.musicalAlphabet.asFlats[currentIndex]);
            currentIndex = (currentIndex + this.getIntervalSteps(interval)) % FretboardClass.musicalAlphabet.asFlats.length;
        }
        return scaleNotes;
    }




    private getIntervalSteps(interval: string): number {
        // 2 Frets = T Tone / Whole note
        // 1 Fret = ST Semitone ' Half note
        const intervalMap: Record<string, number> = {
            'ST': 1,
            'T': 2,
        };
        return intervalMap[interval];
    }

    getNotesInScale(scaleKey: string, scaleIntervalPattern: string[]): string[] {
        return this.getScaleNotes(scaleKey, scaleIntervalPattern);
    }


    getAllNotesbyFret(): string[][] {
        const notes: string[][] = [];
        for (let fret = 0; fret < this.numberOfFrets; fret++) {
            const notesAtFret: string[] = [];
            for (let guitarString = 0; guitarString < this.numberOfStrings; guitarString++) {
                notesAtFret.push(this.fretboard[guitarString][fret]);
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
