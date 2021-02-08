import {useEffect, useState} from 'react'

function UseEffectComponent() {
    const [cnt, setCnt] = useState<number>(1);

    useEffect(() => {
        const timer = window.setInterval(() => {
            setCnt(cnt => cnt + 1);
        }, 1000);

        if (cnt == 10) {
            return (() => window.clearInterval(timer))
        }
    }, [])

    return <div>{ cnt }</div>
}

export default UseEffectComponent;