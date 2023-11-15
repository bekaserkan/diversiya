import React, { useState } from 'react'

const Block = ({ el }) => {
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    console.log(el.gallery[0].img);

    return (
        < div
            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
            className="img"
            style={{
                background: `url(${hovered ? el.gallery[1].img : el.gallery[0].img}) no-repeat center / cover`
            }}
        ></div >
    )
}

export default Block