// Temp component to experiment with the simplest examples
"use client"
import React from 'react';
import ClassFretboard from '@/lib/classFretboard';

const tuning = ['E', 'A', 'D', 'G', 'B', 'E'];
// Basic fretboard experiment with a class
export function FretBoardTemp() {
    const fretboard =  new ClassFretboard()
    const notes = fretboard.getFretboard()
    const notesbyFret = fretboard.getAllNotesbyFret()
    const FretBoardGraph = fretboard.getGraph()
    const interval = fretboard.getIntervalBetweenNotes('E', 'A')

    console.log('interval', fretboard.getIntervalBetweenNotes('E', 'A'))

    return (
        <div>
            {notes.map((string, index) => (
                <div key={index}>
                    {index === 0 ? <span style={{color: 'red'}}>{string[0]}</span> : string[0]}
                    {string.slice(1).map((note, i) => (
                        <span key={i}>{note}</span>
                    ))}
                </div>
            ))}
        </div>
    )
}