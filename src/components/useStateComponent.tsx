import {useState} from 'react'

const UseStateComponent = () => {
    // with useState, you can create a variable and a set function that change the variable
    const [arr, setArr] = useState<number[]>([]);

    return <div>
        <button onClick={() => setArr([...arr, arr.length + 1])}>
            Add to Array
        </button>
        {JSON.stringify(arr)}
    </div>
}

export default UseStateComponent