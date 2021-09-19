import React from 'react';
import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AccordionCustom = ({heading, description}) => {
    return (
        <Accordion sx={{
            '&.Mui-expanded': {
                background: '#ed9419',
                margin: 0,
            },
            background: '#262022',
            color: '#fff',
            my: '8px',
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

            <AccordionDetails sx={{
                background: '#fff',
                color: 'black',
            }}>

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