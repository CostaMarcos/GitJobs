import styled from 'styled-components'
import { Snackbar } from "@material-ui/core"
import { HelpOutline } from '@styled-icons/material'

import general from '../styles/_general'

//////////////////////////////////////////////////////////////////////

const SnackBody = styled.div`
    width: 620px;
    height: 50px;

    padding: 0 10px;

    display: flex;
    justify-content: space-around;
    align-items: center;

    background: ${({ theme }) => theme.red};
    border-radius: 10px;
    ${general.boxShadow};

    color: ${({ theme }) => theme.white.main};
`
const HelpIcon = styled(HelpOutline)`
    width: 20px;
    height: 20px;

    color: ${({ theme }) => theme.white.dark};
`

//////////////////////////////////////////////////////////////////////

function Snack({ open, setOpen }:any) {
    return (
        <Snackbar
            open={open}
            onClose={() => {setOpen(false)}}
            autoHideDuration={4000}
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "right"
            }}>
                <SnackBody>
                    <HelpIcon />
                    Você deve selecionar todos os parâmetros antes de fazer a pesquisa!
                </SnackBody>
            </Snackbar>
    )
}

export default Snack