import { useWindowScroll } from "react-use";
import React, { useEffect, useState } from "react";

const ScrollBuddy = () => {
    const [scrolled, setScrolled] = useState(0);
    const { y } = useWindowScroll();

    useEffect(() => {
        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        setScrolled((y / height) * 100);
    }, [y]);

    return (
        <div className="scroll-container">
            <div className="indicator" style={{ width: `${scrolled}%` }}></div>
        </div>
    );
};

export default ScrollBuddy;
