import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { categories } from "../../data/categories";
import { capitalizeFirstLetter } from "../../utility/Utilities";
import { BoxContainer, StyledButton } from "./styles";
import { Box } from "@mui/material";

export const CategoryPills = () => {
    const [selectedCategory, setSelectedCategory] = useState(categories[0].categoryTitle)
    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);

    return (
        <>
            <BoxContainer component={motion.div}
                ref={carousel}

            >
                <Box component={motion.div}
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}>
                    {categories.map((item) => {
                        const { id, categoryTitle } = item;
                        return (
                            <StyledButton key={id}
                                selectedCategory={selectedCategory} categoryTitle={categoryTitle}
                                variant="contained" disableRipple disableElevation
                                onClick={() => setSelectedCategory(categoryTitle)}>
                                {capitalizeFirstLetter(categoryTitle)}
                            </StyledButton>
                        )
                    }
                    )}
                </Box>
            </BoxContainer >
        </>
    );
};
