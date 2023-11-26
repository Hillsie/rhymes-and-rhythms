// Temp component to experiment with the simplest examples
"use client"
import React from 'react';
import FretboardClass from '@/lib/fretboardClass';

const tuning = ['E', 'B', 'G', 'D', 'A', 'E'];
// Basic fretboard experiment with a class
export function FretBoardTemp() {
    const fretboard =  new FretboardClass(tuning)
    const notes = fretboard.getFretboard()
    const notesbyFret = fretboard.getAllNotesbyFret()
    const FretBoardGraph = fretboard.getGraph()
    const interval = fretboard.getIntervalBetweenNotes('E', 'A')
   // how can I get teh color property of the note?
    console.log(notesbyFret)


    return (
        <div>
            <>Interval between E and A</>
            
            <div>{interval}</div>
            {notes.map((string, index) => (
                <div key={index}>
                    {string.map((note, i) => (
                        <span key={i}>{note} </span>
                        // print the color of the note
                    ))}
                </div>
            ))}
        </div>
    )
}