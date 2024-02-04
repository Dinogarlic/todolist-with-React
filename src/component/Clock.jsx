import React, { useState, useEffect } from 'react';

const DAY_OF_WEEK = {
    "0": "SUN",
    "1": "MON",
    "2": "TUE",
    "3": "WED",
    "4": "THUR",
    "5": "FRI",
    "6": "SAT",
}

export default function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const updateTimeIntervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(updateTimeIntervalId);
    }, []);

    return (
        <div id='clock'>
            <p>{time.toLocaleDateString()}{DAY_OF_WEEK[time.getDay()]}</p>
            <p>{time.toLocaleTimeString()}</p>
        </div>
    );
}