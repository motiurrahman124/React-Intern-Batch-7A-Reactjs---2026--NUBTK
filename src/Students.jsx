
function Students() {

    const students = [
        {
            name: "Brishty Pain",
            id: 6546,
            department: "CSE",
            section: "7A"
        },
        {
            name: "Brishty Pain 1",
            id: 6546,
            department: "CSE",
            section: "7A"
        },
        {
            name: "Brishty Pain 2",
            id: 6546,
            department: "CSE",
            section: "7A"
        },
        {
            name: "Brishty Pain 3",
            id: 6546,
            department: "CSE",
            section: "7A"
        }
    ]

    const fruitlist = ['apple', 'banana', 'cherry'];

    // Fruit1 = apple

    return (
        <div className="py-10 px-20">
            <h1 className="text-center border-b pb-4 text-2xl">This is student page</h1>

            <div className="mt-10 grid grid-cols-4 gap-4">
                {
                    students.map((student, idx) => (
                        <div key={idx} className="border bg-amber-200 p-4 rounded-md">
                            <h1>Name: {student.name}</h1>
                            <p>ID: 646</p>
                            <p>Department: CSE</p>
                            <p>Section: 7A</p>
                        </div>
                    ))
                }
            </div>

            {/* {
                fruitlist.slice(0, 2).map((fruit, index)=> <p>Fruit{index+1} - {fruit}</p>)
            } */}


        </div>
    )
}

export default Students