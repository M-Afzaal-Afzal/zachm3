import React from 'react';
import {Button} from "@mui/material";

const OutlinedSecondaryButton = React.forwardRef(({children,...props},ref) => {
    return (
        <Button color={'secondary'} variant={'outlined'} ref={ref}  {...props}>
            {children}
        </Button>
    );
});

export default OutlinedSecondaryButton;