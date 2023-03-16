import React, { useState, useEffect } from 'react'


const events = [
    "load",
    "mousemove",
    "mousedown",
    "click",
    "scroll",
    "keypress",
];

function SessionTimeout() {

    let timer;

    const handleLogoutTimer = () => {
        timer = setTimeout(() => {
            events.forEach((item) => {
                window.removeEventListener(item, resetTimer);
            });
            logoutAction();
        }, 5000);
    }

    const resetTimer = () => {
        if (timer) clearTimeout(timer);
    };

    useEffect(() => {
        events.forEach((item) => {
            window.addEventListener(item, () => {
                console.log(item)
                resetTimer();
                handleLogoutTimer();
            });
        });
    }, []);

    const logoutAction = () => {
        console.log("Session timed Out")
    };


    return (
        <div >
            <h1>You will see a "Session timed Out" message in the console if u are inactive for 5 seconds</h1>
        </div>
    )
}

export default SessionTimeout;