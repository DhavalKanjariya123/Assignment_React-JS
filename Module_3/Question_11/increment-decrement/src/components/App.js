import React, { useState } from "react";

function Inc() {
    const [Inc, SetInc]=useState(0);

    function IncNum() {
        SetInc(Inc+1);
    }
    function DecNum() {
        SetInc(Inc-1);
    }
    function ResetNum() {
        SetInc(0);
    }

    return (
        <>
            <div className="increment-decrement">
                <h1 className="heading">React Web</h1>
                <p className="heading-degit">{Inc}</p>
                <button className="btn" type="button" onClick={DecNum}>Decrement</button>
                <button className="btn" type="button" onClick={IncNum}>Increment</button> <br/>
                <button className="btn" type="button" onClick={ResetNum}>Reset</button>
            </div>
        </>
    )
}

export default Inc;