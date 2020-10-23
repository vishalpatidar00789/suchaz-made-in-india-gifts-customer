import { DefaultTheme } from 'styled-components';
const palette = {
    black: '#000000',
    white: '#ffffff',
    transparent: 'transparent',
    primary: {
        regular: '#c3404e', // primary color
        light: '#c9535f',
        dark: '#75262e',
        text: '#666',
        hover: '#019376',
        alternate: '#028489',
    },
    secondary: {
        regular: '#ff5b60',
        hover: '#FF282F',
        alternate: '#fc5c63',
    },
    red: {
        regular: '#ea4d4a',
    },
    yellow: {
        regular: '#FFAD5E',
        hover: '#FFB369',
        alternate: '#f4c243',
        light: '#ffd55e',
    },
    blue: {
        a: '#2e70fa',
        dark: '#161F6A',
        light: '#666D92',
        link: '#4285f4',
    },
    text: {
        bold: '#0D1136', // heading color
        medium: '#424561',
        regular: '#666', // regular text color
        light: '#909090',
        label: '#767676',
    },
    gray: {
        100: '#f9f9f9',
        200: '#F7F7F7',
        300: '#f4f4f4',
        400: '#F3F3F3',
        500: '#f1f1f1', // border alt color
        600: '#EdEdEd',
        700: '#E6E6E6', // border color
        800: '#C2C3CC',
        900: '#bdbdbd',
    },
    success: '#669900',
    danger: '#ec0101',
    warning: '#faa806',
};

export const defaultTheme: DefaultTheme = {
    colors: {
        ...palette,
        body: {
            bg: '',
            text: '',
        },
        majorColor: palette['primary']['regular'],
        borderColor: palette['gray']['500'],
        headingsColor: palette['text']['bold'],
        subheadingsColor: '',
        textColor: palette['text']['regular'],
        buttonColor: palette['white'],
        buttonBgColor: palette['primary']['regular'],
        buttonBgHoverColor: palette['primary']['hover'],
        buttonBorderColor: palette['primary']['regular'],
        linkColor: palette['primary']['regular'],
        input: {
            text: '',
            bg: '',
            border: '',
            focus: '',
            placeholder: '',
        },
    },
    fonts: {
        body: 'Work Sans, sans-serif',
        heading: 'Poppins, sans-serif',
        monospace: 'Menlo, monospace',
    },
    boxSizing: 'border-box',
    borderRadius: '4px',
    breakpoints: ['767px', '991px', '70em', '90em'],
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
    // fontSizes: [10, 13, 15, 19, 21, 30, 45],
    // fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
    fontSizes: {
        xs: 12,
        sm: 13,
        base: 14,
        md: 19,
        lg: 21,
        xl: 24,
        '2xl': 30,
        '3xl': 36,
        '4xl': 42,
        '5xl': 48,
    },
    // fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    fontWeights: {
        body: 400,
        heading: 700,
        thin: 100,
        light: 300,
        regular: 400,
        medium: 500,
        bold: 700,
        bolder: 900,
    },
    lineHeights: {
        body: 1.5,
        // body: 1.625,
        heading: 1.125,
        // heading: 1.25,
    },
    shadows: {
        base: '0 3px 6px rgba(0, 0, 0, 0.16)',
        medium: '0 6px 12px rgba(0, 0, 0, 0.16)',
        big: '0 21px 36px rgba(0, 0, 0, 0.16)',
        header: '0 1px 2px rgba(0, 0, 0, 0.06)',
    },
    // Custom Theme keys
    customs: {
        // transitions: {
        //   base: '.3s ease-out',
        // },
        transition: 'all 0.35s ease',
    },
    // letterSpacings: {
    //   normal: 'normal',
    //   tracked: '0.1em',
    //   tight: '-0.05em',
    //   mega: '0.25em',
    // },
    // borders: {
    //   0,
    //   sm:'1px solid',
    //   medium:'2px solid',
    //   large:'3px solid',
    //   '4px solid',
    //   '5px solid',
    //   '6px solid',
    // },
    // radius: [3, 4, 5, 6, '50%'],
    // widths: [36, 40, 44, 48, 54, 70, 81, 128, 256],
    // heights: [36, 40, 44, 48, 50, 54, 70, 81, 128],
    // maxWidths: [16, 32, 64, 128, 256, 512, 768, 1024, 1536],
    globals: {
        // body: {
        //   backgroundColor: 'red',
        //   fontFamily: 'body',
        //   lineHeight: 'body',
        //   fontWeight: 'body',
        // },
    },
};

// xs: 0,
// sm: 576px,
// md: 768px,
// lg: 992px,
// xl: 1200px,
// xxl: 1400px
