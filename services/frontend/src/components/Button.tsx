import styled from 'styled-components'
import { Search } from '@styled-icons/material'

//////////////////////////////////////////////////////////////////////

const Component = styled.button`
    width: 200px;
    height: 50px;

    margin-left: -30px;

    display: flex;
    justify-content: space-around;
    align-items: center;

    background: ${({ theme }) => theme.green.main};
    border: none;
    border-radius: 10px;

    color: ${({ theme }) => theme.white.main};

    transition: 100ms;

    :hover { background: ${({ theme }) => theme.green.dark}; }
    :active { transform: scale(0.98) }
`
const SearchIcon = styled(Search)`
    width: 30px;
    height: 30px;
`

//////////////////////////////////////////////////////////////////////

function Button({ onClick }:any) {
    return (
        <Component onClick={onClick}>
            <SearchIcon /><p>Pesquisar Vagas</p>
        </Component>
    )
}

export default Button