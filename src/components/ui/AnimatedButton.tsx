import { ReactNode } from "react";
import { motion } from "framer-motion";

const AnimatedButton = ({ children }: { children: ReactNode }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedButton;
