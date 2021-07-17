import Image from 'next/image'
import { useState } from 'react'
import { useWindowSize } from "react-use"
import styled, { css } from 'styled-components'
import { Badge, Assignment, Business, ErrorOutline } from '@styled-icons/material'
import axios from 'axios'

import general from '../styles/_general'

import niveisProfissionais from "../database/niveisProfissionais"
import tiposContratos from "../database/tiposContratos"
import unidadesFederativas from "../database/unidadesFederativas"

import Select from "../components/Select"
import Button from "../components/Button"
import Card from "../components/Card"
import Notify from "../components/Notify"
import Modal from '../components/Modal'
import Snack from '../components/Snack'

//////////////////////////////////////////////////////////////////////

interface MainProps { receivedWidth: any }

const Page = styled.div`
    display: grid;
    grid-template-rows: 450px auto 75px;
`

const Header = styled.header`
    display: grid;
    grid-template-rows: 325px 125px;

    position: relative;

    background: ${({ theme }) => theme.black.main};
    ${general.boxShadow};

    color: ${({ theme }) => theme.white.main};

    .website-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h2, h5 { margin: 5px; }
        h5 { color: ${({ theme }) => theme.white.dark}; }
    }
    .user-selections {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 240px;

        div {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
        }
    }
`

const iconStyle = css`
    width: 35px;
    height: 35px;

    margin-bottom: -20px;

    color: ${({ theme }) => theme.white.dark};
`
const LevelIcon = styled(Badge)`${iconStyle}`
const ContractIcon = styled(Assignment)`${iconStyle}`
const LocationIcon = styled(Business)`${iconStyle}`

const Main = styled.main<MainProps>`
    width: ${({ receivedWidth }) => receivedWidth};
    height: fit-content;

    padding: 5px 0;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

    /* TODO Cor Não Está no Design System */
    background: #272727;
`

const NotFound = styled.div`
    margin: 30px 0;
    padding-bottom: 10px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    color: ${({ theme }) => theme.white.dark};
    text-align: center;

    h5 { margin: 0; }
`
const AlertIcon = styled(ErrorOutline)`
    width: 300px;
    height: 300px;

    color: ${({ theme }) => theme.orange};
`

const Footer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-around;

    background: ${({ theme }) => theme.black.main};
    ${general.boxShadow};

    color: ${({ theme }) => theme.white.main};

    & > p > a {
        color: ${({ theme }) => theme.white.main};
        text-decoration: none;

        :hover { color: ${({ theme }) => theme.orange}; }
    }
`

//////////////////////////////////////////////////////////////////////

function index({ apiData }:any) {
    const {width} = useWindowSize()
    const [openSnack, setOpenSnack] = useState(false)
    const [openModal, setOpenModal] = useState(false)

    const [issuesArray, setIssuesArray] = useState(apiData)

    const [nivelProfissional, setNivelProfissional] = useState("")
    const [tipoContrato, setTipoContrato] = useState("")
    const [unidadeFederativa, setUnidadeFederativa] = useState("")

    const notFoundIssues = (
        <NotFound>
            <AlertIcon />
            <h5>Não foram encontradas vagas com base <br/> nos parâmetros de pesquisa passados</h5>
        </NotFound>
    )

    function filterIssues() {
        if(nivelProfissional && tipoContrato && unidadeFederativa) {
            const filteringResults = apiData.filter((object:any) => {
                if ((object.labels.includes(nivelProfissional) || nivelProfissional == "ALL") &&
                    (object.labels.includes(tipoContrato) || tipoContrato == "ALL") &&
                    (object.labels.includes(unidadeFederativa) || unidadeFederativa == "ALL")) {
                        return object
                }
            })
            setIssuesArray(filteringResults)
        } else {
            setOpenSnack(true)
        }
    }

    return (
        <Page>
            <Header>
                <div className="website-info">
                    <Image src="/images/gitjobs.svg" width={175} height={175}/>
                    <h2>GitJobs</h2>
                    <h5>WebSite de Vagas de Emprego Para Profissionais de Tecnologia</h5>

                    <Notify onClick={() => setOpenModal(true)}/>
                </div>

                <div className="user-selections">
                    <div>
                        <LevelIcon />
                        <Select label="Nível Profissional" itemsArray={niveisProfissionais} varState={nivelProfissional} setState={setNivelProfissional}/>
                    </div>
                    <div>
                        <ContractIcon />
                        <Select label="Tipo de Contrato" itemsArray={tiposContratos} varState={tipoContrato} setState={setTipoContrato}/>
                    </div>
                    <div>
                        <LocationIcon />
                        <Select label="Localização do Trabalho" itemsArray={unidadesFederativas} varState={unidadeFederativa} setState={setUnidadeFederativa}/>
                    </div>

                    <div>
                        <Button onClick={filterIssues} />
                    </div>
                </div>
            </Header>

            <Main receivedWidth={width}>
                {
                    issuesArray.length == 0?
                        notFoundIssues :
                        issuesArray.map((issueItem:any) => <Card key={issueItem.issue} issueObject={issueItem} />)
                }
            </Main>

            <Footer>
                <p>Arquitetura de Software - IFAM CMZL</p>
                <p><a href="https://github.com/CostaMarcos/GitJobs">Repositório do Projeto</a></p>
            </Footer>

            <Modal open={openModal} setOpen={setOpenModal} />
            <Snack open={openSnack} setOpen={setOpenSnack} />
        </Page>
    )
}

//////////////////////////////////////////////////////////////////////

export async function getServerSideProps() {
	const response = await axios.get("http://localhost:3000")
    const filteredData:any[] = []

    response.data.issues.map((responseItem:any) => {
        const filteredLabels:any[] = []
        responseItem.labels.map((labelObject:any) => {
            filteredLabels.push(labelObject.name)
        })

        filteredData.push({
            link: responseItem.url,
			issue: "#" + responseItem.issue_id.toString(),
			title: responseItem.title,
			user: "@" + responseItem.user,
			labels: filteredLabels,
			opened: responseItem.created_at.replace("T", "  =  ").replace("Z", "")
        })
    })

	return { props: { apiData: filteredData } }
}

//////////////////////////////////////////////////////////////////////

export default index