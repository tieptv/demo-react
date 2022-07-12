import React, { useCallback, useEffect, useMemo, useState } from "react";

function HookComponent(props) {
    const [name, setName] = useState('EIS');
    const [member, setMember] = useState(17);

    useEffect(() => {
        console.log("useEffect")
    }, [name])

    const changeInput = (e, type) => {
        if (type === 'name') {
            setName(e.target.value)
        } else {
            setMember(e.target.value)
        }
        
    }

    const memoDiv = useMemo(() => <h3>Xin chào {name}</h3>, [name])


    const setDefault = useCallback(() => {
        console.log(name)
        setName("EIS")
    })


    return <div>
            <h3>Demo react hook</h3>
            <input value={name} onChange={e => changeInput(e, "name")} />
            {memoDiv}
            <br/>
            <input value={member} onChange={e => changeInput(e, "member")} />
            <br/>
            <br/>
            <button onClick={setDefault}>Reset</button>
            <p><a href="/">React life cycle</a></p>
        </div>
    }

export default HookComponent;