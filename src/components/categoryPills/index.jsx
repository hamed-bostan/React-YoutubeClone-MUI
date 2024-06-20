import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { categories } from "../../data/categories"; 
import { Box, Button, Typography } from "@mui/material";
import { DrawerHeader } from "../../Layout/sidebar";
import { capitalizeFirstLetter } from "../../utility/Utilities";

export const CategoryPills = () => {
    const [selectedCategory, setSelectedCategory] = useState(categories[1].categoryTitle)

    return (
        <>
            <DrawerHeader />
            <Box sx={{ display: 'flex', columnGap: '0.75rem' }}>
                {categories.map((item) => (
                    <Button key={item.id} variant="contained" disableRipple disableElevation
                        onClick={() => setSelectedCategory(item.categoryTitle)}
                        sx={{
                            backgroundColor: selectedCategory === item.categoryTitle ? '#0f0f0f' : 'rgba(0,0,0,0.05)',
                            color: selectedCategory === item.categoryTitle ? '#fff' : '#0f0f0f',
                            padding: 0,
                            px: '0.75rem', py: '0.125rem',
                            fontSize: '0.87rem',
                            minHeight: 0,
                            minWidth: 0,
                            whiteSpace: 'nowrap', fontWeight: 500,
                            borderRadius: '0.5rem',
                            ":hover": {
                                bgcolor: "rgba(0,0,0,0.1)"
                            },
                        }}>
                        {capitalizeFirstLetter(item.categoryTitle)}
                    </Button>
                )
                )}
            </Box >
        </>
    );
};
