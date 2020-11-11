import React, { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";
import { RiArrowUpCircleFill } from 'react-icons/ri';

const ScrollToTop = () => {
    const { y: pageYOffset } = useWindowScroll();
    const [visible, setVisiblity] = useState(false);

    useEffect(() => {
        if (pageYOffset > 400) {
            setVisiblity(true);
        } else {
            setVisiblity(false);
        }
    }, [pageYOffset]);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    if (!visible) {
        return false;
    }

    return (
        <div
            className="scroll-to-top cursor-pointer"
            onClick={scrollToTop}
        >
           <RiArrowUpCircleFill color=" #97201c" size =" 50px"className="icon" />
        </div>
    );
};

export default ScrollToTop;
