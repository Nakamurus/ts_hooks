import {useEffect, useState} from 'react'

function UseEffectComponent() {
    const [cnt, setCnt] = useState<number>(1);

    useEffect(() => {
        window.setInterval(() => {
            setCnt(cnt => cnt + 1);
        }, 1000);
    }, [])

    return <div>{ cnt }</div>
}

export default UseEffectComponent;