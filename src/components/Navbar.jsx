import React from "react";

import {
    AppBar, 
    Toolbar, 
    Typography
} from "@material-ui/core";

const Navbar = () => {

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">
                        Weather
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navbar;