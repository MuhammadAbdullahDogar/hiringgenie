import { createTheme } from '@material-ui/core';
const theme = createTheme({
    palette: {
        // mode:"dark",
        primary: {
            main: "#32B126",
        },
        secondary: {
            main: "#24A2E9"
        },
        Gradient: {
            main: "#24A2E9"
        },
        action: {
            // hover: '#19177E',
            // focus: '#19177E'
        }
    },
    typography: {
        fontFamily: 'Urbanist',
        color: "#19177E",
        HomeH2: {
            fontFamily: 'Comfortaa',
            fontWeight: 700,
            lineHeight: '1.6rem',
            fontSize: '1.51rem',
            color: '#19177E'
        },
        HomeH3: {
            fontFamily: 'Urbanist',
            fontWeight: 500,
            lineHeight: '1.8125rem',
            fontSize: '1.375rem',
            letterSpacing: '0.01em',
            color: '#074D75'
        },
        HomeGlassText: {
            fontFamily: 'Comfortaa',
            fontWeight: 700,
            lineHeight: '1.75rem',
            fontSize: '1.25rem',
            letterSpacing: '0.05em',
            color: '#19177E',
            '&:hover': {
                fontSize: '1.5625rem'
            }
        },
        hgTopHeading: {
            fontSize: "2.82rem",
            lineHeight: "3.13rem",
            textTransform: "capitalize",
            fontWeight: '600',
            fontFamily: 'Comfortaa',
            color: "#19177E"
        },
        profileLogoFont: {
            fontFamily: 'Urbanist',
            letterSpacing: '0.03em',
            fontWeight: '500',
            fontSize: '3.5vmin',
            color: "#19177E"
        },
        profileH1: {
            fontFamily: 'Urbanist',
            letterSpacing: '0.03em',
            fontWeight: '700',
            fontSize: '3vmin',
            color: "#19177E"
        },
        profileH2: {
            fontFamily: 'Urbanist',
            letterSpacing: '0.03em',
            fontWeight: '500',
            fontSize: '2.7vmin',
            color: "#19177E"
        },
        profileH3: {
            fontFamily: 'Urbanist',
            letterSpacing: '0.03em',
            fontWeight: '500',
            fontSize: '2.4vmin',
            color: '#0A5F8F'
        },

        hgLink: {
            fontFamily: 'Comfortaa',
            textTransform: "capitalize",
            color: "#19177E",
            fontWeight: '700',
            fontSize: "1rem",
            lineHeight: "1.2rem",
            letterSpacing: '0.01rem'
        }
    },
    components: {
        MuiButton: {
            defaultProps: {
                disableRipple: false
            }
        },
    },
    shape: {
        // borderRadius: '2.3vmin',
    }
})
export default theme