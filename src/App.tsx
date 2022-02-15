import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { hourSelector, minuteState } from "./atoms";

function App() {
    const [minutes, setMinutes] = useRecoilState(minuteState)
    const onMinutesChange = (event:React.FormEvent<HTMLInputElement>) => {
        setMinutes(+event.currentTarget.value)
    }
    return (
        <div>
            <input
                type="number"
                placeholder="Minutes"
                value={minutes}
                onChange={onMinutesChange}
            />
            <input type="number" placeholder="Hours"/>
        </div>
    );
}
