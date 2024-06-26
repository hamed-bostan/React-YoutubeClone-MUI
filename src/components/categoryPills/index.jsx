import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { categories } from "../../data/categories";
import { capitalizeFirstLetter } from "../../utility/Utilities";
import { BoxContainer, StyledButton, BoxWrapper } from "./styles";
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
            <BoxWrapper component={motion.div}
                ref={carousel}

            >
                <BoxContainer component={motion.div}
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}>
                    {categories.map((item) => {
                        const { id, categoryTitle } = item;
                        return (
                            <Box key={id} component={motion.div}>
                                <StyledButton
                                    selectedCategory={selectedCategory} categoryTitle={categoryTitle}
                                    variant="contained" disableRipple disableElevation
                                    onClick={() => setSelectedCategory(categoryTitle)}>
                                    {capitalizeFirstLetter(categoryTitle)}
                                </StyledButton>
                            </Box>
                        )
                    }
                    )}
                </BoxContainer>
            </BoxWrapper >
        </>
    );
};
