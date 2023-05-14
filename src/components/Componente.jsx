import { useState } from "react"

const Componente = () => {

    const rgb = "rgb(0,0,0)"
    const [color, setColor] = useState(rgb);
    const [intervalId, setIntervalId] = useState(0);


    const randomRgb = () => {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        return `rgb(${red}, ${green}, ${blue})`;
    };

    const onMouse = () => {
        const newIntervalId = setInterval(() => {
            setColor(randomRgb());
        }, 1000);
        setIntervalId(newIntervalId);
    }

    const onOut = () => {
        if (intervalId) {
            clearInterval(intervalId);
            setIntervalId(0);
            return;
        }
    }
    const dobleClick = () => {
        if (intervalId) {
            clearInterval(intervalId);
            setIntervalId(0);
            return;
        }
    }

    return (
        <div className="padre">
            <div
            className="cuadrado"
            style={{ backgroundColor: color }}
            onMouseOver={onMouse}
            onMouseOut={onOut}
            onDoubleClick={dobleClick}
            >
            </div>
        </div>

    )
}

export default Componente