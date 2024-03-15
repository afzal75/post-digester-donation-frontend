import { useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const useAnimateComponent = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    const control = useAnimation();
    const variants = {
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.7 },
        },
        hidden: { y: 180, opacity: 0 },
    };
    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [inView, control]);
    return { ref, variants, control };
};

export default useAnimateComponent;
