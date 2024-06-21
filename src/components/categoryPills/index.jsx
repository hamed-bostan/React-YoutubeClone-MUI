import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { categories } from "../../data/categories";
import { DrawerHeader } from "../../Layout/sidebar";
import { capitalizeFirstLetter } from "../../utility/Utilities";
import { BoxContainer, StyledButton } from "./styles";

export const CategoryPills = () => {
    const [selectedCategory, setSelectedCategory] = useState(categories[1].categoryTitle)

    return (
        <>
            <DrawerHeader />
            <BoxContainer>
                {categories.map((item) => {
                    const { id, categoryTitle } = item;
                    return (
                        <StyledButton selectedCategory={selectedCategory} categoryTitle={categoryTitle}
                            key={id} variant="contained" disableRipple disableElevation
                            onClick={() => setSelectedCategory(categoryTitle)}>
                            {capitalizeFirstLetter(categoryTitle)}
                        </StyledButton>
                    )
                }
                )}
            </BoxContainer >
        </>
    );
};
