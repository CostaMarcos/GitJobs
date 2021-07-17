import { keyframes, css } from 'styled-components'

const general = {
    boxShadow: css`box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px`,
    transition: css`transition: 100ms;`,
    animations: {
        sino: keyframes`
            0%,
            100% {
                transform: translateX(0%) scale(1.1);
                transform-origin: 50% 50%;
            },
            15% { transform: translateX(-30px) rotate(6deg) scale(1.1); }
            30% { transform: translateX(15px) rotate(-6deg) scale(1.1); }
            45% { transform: translateX(-15px) rotate(3.6deg) scale(1.1); }
            60% { transform: translateX(9px) rotate(-2.4deg) scale(1.1); }
            75% { transform: translateX(-6px) rotate(1.2deg) scale(1.1); }
        `
    }
}

export default general