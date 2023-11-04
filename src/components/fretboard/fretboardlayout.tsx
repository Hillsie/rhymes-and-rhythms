// Nut
// Frets 22 Same as fender
// Strings
// Width
const GuitarString =() => <div className="h-1 w-24 bg-slate-900 self-center"/>

function HeadStockNotes(){
    return (
        <div className="h-64 w-7 grid grid-rows-6 justify-center place-content-center">
            <div className="p-2">E</div>
            <div className="p-2">B</div>
            <div className="p-2">G</div>
            <div className="p-2">D</div>
            <div className="p-2">A</div>
            <div className="p-2">E</div>
        </div>
    )
}

function Inlay(){
    return (
        <div className="z-0 rounded-full h-7 w-7 bg-slate-900 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        </div>
    )
}


function Fret(){
    return (
        <div className="grid grid-col-3 justify-end place-content-center z-0 relative">
        <div className="h-64 w-20 grid grid-rows-6 row-start-1 col-start-1 col-end-1 justify-end place-content-center z-30">
            <button className="border border-teal-600 rounded-full h-9 w-9 mr-2">F</button>
            <button className="border border-teal-600 rounded-full h-9 w-9 mr-2">C</button>
            <button className="border border-teal-600 rounded-full h-9 w-9 mr-2">A<span className="text-xs">β</span></button>
            <button className="border border-teal-600 rounded-full h-9 w-9 mr-2">E<span className="text-xs">β</span></button>
            <button className="border border-teal-600 rounded-full h-9 w-9 mr-2">B<span className="text-xs">β</span></button>
            <button className="border border-teal-600 rounded-full h-9 w-9 mr-2">F</button>
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
            <div className="p-2"></div>
            <div className="p-2"></div>
            <div className="p-2"></div>
            <div className="p-2"></div>
            <div className="p-2"></div>
            <div className="p-2"></div>
        </div>
            <div className="h-64 w-2 col-start-2 col-end-2 row-start-1 row-end-6">
            </div>
            <div className="h-64 col-start-1 col-end-3 row-start-1 row-end-6 grid grid-rows-6 place-content-center z-20">
            {Array.from({ length: 6 }).map((_, index) => (
                    <GuitarString key={index} />
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
    return (
        <div className="flex flex-row border border-gray-900 rounded-md p-3 shadow-neutral-950 shadow-md drop-shadow-md ">
            <HeadStockNotes />
            <Nut />
            {Array.from({ length: 12 }).map((_, index) => (
                <Fret key={index} />
            ))}
            <Last />
        </div>
    )
}