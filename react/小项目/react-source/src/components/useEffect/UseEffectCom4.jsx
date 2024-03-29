import {useEffect, useState} from "react";

export default function UseEffectCom4() {
    const [state] = useState(0)
    console.log(1)

    const start = Date.now()
    while (Date.now() - start < 50) {
        window.timestamp = Date.now()
    }

    useEffect(() => {
        console.log(2)
    }, [state])

    Promise.resolve().then(() => console.log(3))

    setTimeout(() => console.log(4), 0)

    return null
}
