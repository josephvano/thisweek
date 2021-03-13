import {createMuiTheme} from "@material-ui/core";
import {red} from "@material-ui/core/colors";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#212121',
        },
        secondary: {
            main: '#29b6f6',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#484848',
        },
    },
});

export default theme;