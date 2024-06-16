import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { categoryItems } from "../data";
import { Box, Typography } from "@mui/material";
import { DrawerHeader } from "../Layout/sidebar";
import { capitalizeFirstLetter } from "../utility/Utilities";

export const CategoryItem = () => {

    return (
        <>
            <DrawerHeader />
            <Box sx={{ display: 'flex', columnGap: '0.75rem', }}>
                {categoryItems.map((item) => (
                    <Typography key={item.id}
                        sx={{
                            bgcolor: 'rgba(0,0,0,0.05)', color: '#0f0f0f', px: '0.75rem', py: '0.125rem',
                            whiteSpace: 'nowrap', fontWeight: 500, borderRadius: '0.5rem',
                        }}>
                        {capitalizeFirstLetter(item.categoryText)}
                    </Typography>
                )
                )}
            </Box>
        </>
    );
};

