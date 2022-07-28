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

    const memoDiv = useMemo(() =>{
        console.log("render xin chao")
        return <h3>Xin chào {name}</h3>
    } , [name])


    const setDefault = useCallback(() => {
        console.log(name)
        setName("EIS")
    }, [name])


    return <div>
            <h3>Demo react hook</h3>
            <p>Name</p>
            <input value={name} onChange={e => changeInput(e, "name")} />
            {memoDiv}
            <br/>
            <p>Member</p>
            <input value={member} onChange={e => changeInput(e, "member")} />
            <br/>
            <br/>
            <ChildComponent setDefault={setDefault}/>
            <p><a href="/">React life cycle</a></p>
        </div>
    }


    const ChildComponent = 
    //React.memo(
        (props) => {
        console.log("render child component")
        return <button onClick={props.setDefault}>Reset</button>
    }
    //)



export default HookComponent;