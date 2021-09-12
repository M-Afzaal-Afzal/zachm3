import React from 'react';
import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AccordionCustom = ({heading,description}) => {
    return (
        <Accordion sx={{
            // '&.Mui-expanded': {
            //     margin: 0
            // }
        }}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography fontWeight={'bold'}>
                    {heading}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>

                {
                    description.map(desc => (
                        <Typography>
                            {desc}
                        </Typography>
                    ))
                }

            </AccordionDetails>
        </Accordion>
    );
};

export default AccordionCustom;