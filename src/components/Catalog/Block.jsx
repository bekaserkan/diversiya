import React, { useState } from 'react'

const Block = ({ el }) => {
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    return (
        < div
            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
            className="img"
            style={{
                background: `url(${hovered ? el.image[1].img : el.image[0].img}) no-repeat center / cover`
            }}
        ></div >
    )
}

export default Block