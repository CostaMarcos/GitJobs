import styled from 'styled-components'
import { transparentize } from 'polished'
import { FormControl, InputLabel, Select as MaterialSelect, MenuItem } from '@material-ui/core'

import general from '../styles/_general'

//////////////////////////////////////////////////////////////////////

const Form = styled(FormControl)`
    label {
        margin-top: 2.5px;
        margin-left: 10px;

        color: ${({ theme }) => theme.white.dark };
    }
`

const StyledSelect = styled(MaterialSelect)`
    && { color: ${({ theme }) => theme.white.main }; }

    div {
        width: 250px;
        height: 25px;

        background: ${({ theme }) => transparentize(0.9, theme.white.main)};
        border-radius: 10px;

        ${general.transition};

        :hover {
            ${general.boxShadow};
            transform: scale(1.05);
        }
        :focus {
            background: ${({ theme }) => transparentize(0.7, theme.green.main)};
            border-radius: 10px;
        }
    }
`

//////////////////////////////////////////////////////////////////////

function Select({label, itemsArray, varState, setState}:any) {
    return (
        <Form>
            <InputLabel>{label}</InputLabel>

            <StyledSelect disableUnderline value={varState} onChange={(event: any) => setState(event.target.value)}>
                {itemsArray.map((item: any) => <MenuItem key={item} value={item}>{item}</MenuItem>)}
                <MenuItem value={"ALL"}>Todas as Opções</MenuItem>
            </StyledSelect>
        </Form>
    )
}

export default Select