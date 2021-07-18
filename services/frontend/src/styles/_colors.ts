import { lighten, darken } from 'polished'

const colors = {
    blue: "#4078c0",
    red: "#bd2c00",
    orange: "#c9510c",
    violet: "#6e5494",
    gray: "#f5f5f5",
    green: {
        light: lighten(0.15, "#6cc644"),
        main: "#6cc644",
        dark: darken(0.15, "#6cc644")
    },
    white: {
        light: lighten(0.3, "#fafafa"),
        main: "#fafafa",
        dark: darken(0.3, "#fafafa")
    },
    black: {
        light: lighten(0.15, "#333"),
        main: "#333",
        dark: darken(0.15, "#333")
    }
}

export default colors