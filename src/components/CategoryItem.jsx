import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { categoryItems } from "../data";
import { Box, Button, Typography } from "@mui/material";
import { DrawerHeader } from "../Layout/sidebar";
import { capitalizeFirstLetter } from "../utility/Utilities";

export const CategoryItem = () => {
    const [highlighted, setHighlighted] = useState(false)

    return (
        <>
            <DrawerHeader />
            <Box sx={{ display: 'flex', columnGap: '0.75rem' }}>
                {categoryItems.map((item) => (
                    <Button key={item.id} variant="contained" disableRipple disableElevation
                        sx={{
                            bgcolor: 'rgba(0,0,0,0.05)',
                            color: '#0f0f0f',
                            padding: 0,
                            px: '0.75rem', py: '0.125rem',
                            fontSize: '0.87rem',
                            // fontSize: '5vh',
                            minHeight: 0,
                            minWidth: 0,
                            whiteSpace: 'nowrap', fontWeight: 500,
                            borderRadius: '0.5rem',
                            ":hover": {
                                bgcolor: "rgba(0,0,0,0.1)"
                            },
                        }}>
                        {capitalizeFirstLetter(item.categoryText)}
                    </Button>
                )
                )}
            </Box >
        </>
    );
};
