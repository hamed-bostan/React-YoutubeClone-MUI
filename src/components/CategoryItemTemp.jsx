import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { categoryItems } from "../data";
import { Box } from "@mui/material";

export const CategoryItem = () => {
    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);

    return (
        <Box>
            <motion.div
                ref={carousel}
                whileTap={{ cursor: "grabbing" }}
            >
                <motion.div
                    drag="x"
                    dragConstraints={{ left: 0, right: width }}
                >
                    {categoryItems.map((item) => {
                        return (
                            <motion.div key={item.id}>
                                <span>{item.categoryText}</span>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </motion.div>
        </Box>
    );
};

