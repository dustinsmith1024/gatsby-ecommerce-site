export default {
    colors: {
        text: 'red',
        background: '#fff',
        primary: 'teal',
        modes: {
            dark: {
                text: '#fff',
                background: '#333',
            }
        }
    },
    fonts: {
        heading: 'Georgia'
    },
    fontWeights: {
        body: 200,
        heading: 400
    },
    layout: {
        container: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }
    },
    heading: {
        fontFamily: 'heading',
        fontWeight: 'heading',
        textTransform: 'uppercase',
        color: 'primary',
        py: 2,
        my: 2,
        primary: 'red',
    },
    text: {
        default: {
            color: 'text',
            mb: 5
        },
        caps: {
            textTransform: 'uppercase',
            letterSpacing: '2em',
        }
    }
}