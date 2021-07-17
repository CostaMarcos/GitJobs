import styled from 'styled-components'
import { TextField } from "@material-ui/core"

//////////////////////////////////////////////////////////////////////

const StyledField = styled(TextField)`
    width: 400px;

    label { color: ${({ theme }) => theme.white.dark}; }
    div > input { color: ${({ theme }) => theme.white.main}; }

    .MuiFilledInput-underline:before { border-bottom: 2px solid ${({ theme }) => theme.gray}; }
    .MuiFilledInput-underline:hover:before { border-bottom: 2px solid ${({ theme }) => theme.violet}; }
    .MuiFilledInput-underline:after { border-bottom: 2px solid ${({ theme }) => theme.green.main}; }
`

//////////////////////////////////////////////////////////////////////

function Text({text, setText}:any) {
    return (
        <StyledField
            label="Email"
            placeholder="Insira seu email aqui..."
            variant="filled"
            value={text}
            onChange={(event:any) => setText(event.target.value)} />
    )
}

export default Text