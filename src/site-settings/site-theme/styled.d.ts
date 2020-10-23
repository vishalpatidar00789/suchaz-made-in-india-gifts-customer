import 'styled-components';
interface IPalette {
    regular?: string;
    light?: string;
    dark?: string;
    text?: string;
    hover?: string;
    alternate?: string;
    bold?: string;
    medium?: string;
    label?: string;
    link?: string;
    a?: string;
}
declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            black: string;
            white: string;
            transparent: string;
            primary: IPalette;
            secondary: IPalette;
            red: IPalette;
            yellow: IPalette;
            blue: IPalette;
            text: IPalette;
            gray: { [key: number]: string };
            success: string;
            danger: string;
            warning: string;
            body: {
                bg: string;
                text: string;
            };
            majorColor: string;
            borderColor: string;
            headingsColor: string;
            subheadingsColor: '';
            textColor: string;
            buttonColor: string;
            buttonBgColor: string;
            buttonBgHoverColor: string;
            buttonBorderColor: string;
            linkColor: string;
            input: {
                text: string;
                bg: string;
                border: string;
                focus: string;
                placeholder: string;
            };
        };
        fonts: {
            body: string;
            heading: string;
            monospace: string;
        };
        boxSizing: string;
        borderRadius: string;
        breakpoints: string[];
        space: number[];
        fontSizes: { [key: any]: number };
        fontWeights: {
            body: number;
            heading: number;
            thin: number;
            light: number;
            regular: number;
            medium: number;
            bold: number;
            bolder: number;
        };
        lineHeights: {
            body: number;
            heading: number;
        };
        shadows: {
            base: string;
            medium: string;
            big: string;
            header: string;
        };
        customs: { [key: any]: any };
        globals: any;
    }
}
