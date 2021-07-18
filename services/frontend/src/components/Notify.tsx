import styled from 'styled-components'
import { Notifications } from '@styled-icons/material'

import general from "../styles/_general"

//////////////////////////////////////////////////////////////////////

const Component = styled(Notifications)`
    width: 75px;
    height: 75px;

    position: absolute;
    top: 30px;
    right: 30px;

    cursor: pointer;

    :hover { animation: ${general.animations.sino} 100ms 4 linear; }
`

//////////////////////////////////////////////////////////////////////

function Notify({ onClick }:any) { return <Component onClick={onClick} title="Notificações por Email"/>}

export default Notify