import {useState} from 'react'

const UseStateComponent = () => {
    const [arr, setArr] = useState<number[]>([]);

    return <div>
        <button onClick={() => setArr([...arr, arr.length + 1])}>
            Add to Array
        </button>
        {JSON.stringify(arr)}
    </div>
}

export default UseStateComponent