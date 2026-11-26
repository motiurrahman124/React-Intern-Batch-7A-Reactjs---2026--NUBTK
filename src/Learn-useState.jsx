import { useEffect, useState } from "react"

function LearnUseState() {
    const [value, setValue] = useState(0)
    const [totalCliked, setTotalClicked] = useState(0)

    useEffect(() => {
        // console.log("Learn useEffect");
        if (value === 0) {
            setTotalClicked(0)
        } else {
            setTotalClicked(totalCliked + 1)
        }
    }, [value])

    return (
        <div className="py-20 flex flex-col justify-center items-center gap-5">
            <h1 className="text-4xl">{value}</h1>
            <div className="space-x-4">
                <button onClick={() => setValue(value + 1)} className="bg-green-600 py-1 px-2 rounded-md border text-white">+1</button>
                <button onClick={() => setValue(value + 5)} className="bg-green-600 py-1 px-2 rounded-md border text-white">+5</button>
                <button onClick={() => setValue(value - 1)} className="bg-red-600 py-1 px-2 rounded-md border text-white">-1</button>
                <button onClick={() => setValue(0)} className="bg-sky-600 py-1 px-2 rounded-md border text-white">Reset</button>
            </div>

            <p>Total button clicked: {totalCliked}</p>
        </div>
    )
}

export default LearnUseState