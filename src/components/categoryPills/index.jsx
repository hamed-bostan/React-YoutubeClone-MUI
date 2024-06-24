import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { categories } from "../../data/categories";
import { capitalizeFirstLetter } from "../../utility/Utilities";
import { BoxContainer, StyledButton } from "./styles";
import { DrawerHeader } from "../../Layout/sidebar/styles";

export const CategoryPills = () => {
    const [selectedCategory, setSelectedCategory] = useState(categories[0].categoryTitle)

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
