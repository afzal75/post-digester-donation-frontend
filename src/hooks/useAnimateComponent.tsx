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





// import { useAnimation, useInView } from "framer-motion";
// import { useEffect, useRef } from "react";

// const useAnimateComponent = () => {
//     const ref = useRef(null);
//     const { ref, inView } = useInView({ triggerOnce: true }); // Destructure inView directly from the useInView hook
//     const controls = useAnimation(); // Change control to controls for better readability
//     const variants = {
//         visible: {
//             y: 0,
//             opacity: 1,
//             transition: { duration: 0.7 },
//         },
//         hidden: { y: 180, opacity: 0 },
//     };

//     useEffect(() => {
//         if (inView) {
//             controls.start("visible"); // Use controls instead of control
//         } else {
//             controls.start("hidden"); // Use controls instead of control
//         }
//     }, [inView, controls]); // Add controls to the dependencies array

//     return { ref, variants, controls }; // Return controls instead of control
// };

// export default useAnimateComponent;
