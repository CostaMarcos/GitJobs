import styled, { css, keyframes } from 'styled-components'
import { Schedule, Person } from '@styled-icons/material'

import general from '../styles/_general'

//////////////////////////////////////////////////////////////////////

const slide = keyframes`
    0% {
        left: -150px;
        top: 0;
    }
    100% {
        left: 800px;
        top: 0;
    }
`

const Component = styled.a`
    width: 46%;
    height: 150px;

    margin: 7.5px 0;
    padding: 10px;

    display: grid;
    grid-template-rows: 25px 100px 25px;

    position: relative;

    background: ${({ theme }) => theme.blue};
    border-radius: 10px;

    color: ${({ theme }) => theme.white.main};
    text-decoration: none;

    cursor: pointer;

    overflow: hidden;

    transition: 100ms;

    :hover {
        ${general.boxShadow};
        transform: scale(1.05);
    }
    :active { transform: scale(1.025); }

    ::before {
        width: 100px;
        height: 100%;

        content: '';

        position: absolute;
        top: 0;
        left: -150px;

        background: rgba(255,255,255, 0.3);
        background: linear-gradient(to right, rgba(255, 255, 255, 0.13) 0%, rgba(255, 255, 255, 0.13) 77%, rgba(255, 255, 255, 0.0) 100%);

        transform: skewX(-30deg);
    }
    :hover::before {
        animation-name: ${slide};
        animation-duration: 250ms;
        animation-delay: .1s;
        animation-timing-function: linear;
    }
`

const iconStyle = css`
    width: 20px;
    height: 20px;

    margin-right: 5px;
`
const ClockIcon = styled(Schedule)`${iconStyle}`
const UserIcon = styled(Person)`${iconStyle}`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    color: ${({ theme }) => theme.white.dark};
`

const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    text-align: justify;
`

const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    .label {
        margin: 0 5px;
        padding: 7.5px;

        background: ${({ theme }) => theme.green.main};
        border-radius: 12.5px;

        :last-child { margin-right: 0; }
    }
`

//////////////////////////////////////////////////////////////////////

function Card({ issueObject }:any) {
    if (issueObject.labels.length > 5) {
        const remainder = issueObject.labels.length - 5
        issueObject.labels = issueObject.labels.slice(0, 5)
        issueObject.labels.push(`+${remainder}`)
    }

    return (
        <Component href={issueObject.link} target="_blank">
            <Header>
                <p><i>{issueObject.issue}</i></p>
                <i><ClockIcon /><small>{issueObject.opened}</small></i>
            </Header>

            <Title><strong>{issueObject.title}</strong></Title>

            <Footer>
                <small><UserIcon />{issueObject.user}</small>
                <div>
                    {issueObject.labels.map((item: string) =>
                        <small key={item} className="label">{item}</small>
                    )}
                </div>
            </Footer>
        </Component>
    )
}

export default Card