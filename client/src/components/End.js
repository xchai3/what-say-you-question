import React from 'react';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";

function End() {
    return (
        <MuiThemeProvider>
            <React.Fragment>
        <AppBar title="Sports: What say you?"/>
        <div className="container2">
            <h2>Submitted!</h2>
            <p> We heard your voice, thanks for your participation!</p>
        </div>
            </React.Fragment>
        </MuiThemeProvider>
    );
}

export default End;
