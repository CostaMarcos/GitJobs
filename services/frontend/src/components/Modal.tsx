import axios from 'axios'
import { useState } from 'react'
import styled from 'styled-components'
import { Modal as MaterialModal, Backdrop, Fade } from '@material-ui/core'
import { HighlightOff } from '@styled-icons/material'

import general from '../styles/_general'

import TextField from "./Text"

//////////////////////////////////////////////////////////////////////

const BackgroundModal = styled(MaterialModal)`
    display: flex;
    justify-content: center;
    align-items: center;
`

const ForegroundModal = styled.div`
    width: 500px;
    height: 300px;

	padding: 20px;

	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;

    position: relative;

    background: ${({ theme }) => theme.black.main};
    border-radius: 20px;
	${general.boxShadow};

	text-align: center;
	color: ${({ theme }) => theme.white.main};

	p { margin: 30px 0 0 0; }

	button {
		padding: 20px;

		background: ${({ theme }) => theme.green.main};
		border: none;
		border-radius: 10px;

		color: ${({ theme }) => theme.white.main};

		transition: 100ms;

		:hover { transform: scale(1.03); }
		:active {
			background: ${({ theme }) => theme.green.dark};
			transform: scale(0.99);
		}
	}
`
const CloseIcon = styled(HighlightOff)`
    width: 50px;
    height: 50px;

    position: absolute;
    top: 5px;
    right: 5px;

    color: ${({ theme }) => theme.red};

    cursor: pointer;

    transition: 100ms;

    :hover { transform: scale(1.05) rotate(360deg); }
    :active { transform: scale(0.98); }
`

//////////////////////////////////////////////////////////////////////

function Modal({open, setOpen}:any) {
	const [email, setEmail] = useState("")

	function postEmail(email:string) {
		axios.post("http://localhost:3000/email", { email })
	}

    return (
		<BackgroundModal
			closeAfterTransition
			open={open}
			onClose={() => setOpen(false)}
			BackdropComponent={Backdrop}
			BackdropProps={{ timeout: 500 }}
		>
			<Fade in={open}>
				<ForegroundModal>
					<CloseIcon onClick={() => setOpen(false)} />
					<p>Insira seu email no campo abaixo para ser notificado no seu email sobre novas vagas que surgirem</p>
					<TextField text={email} setText={setEmail}/>
					<button onClick={() => postEmail(email)}>Inscrever-se</button>
				</ForegroundModal>
			</Fade>
		</BackgroundModal>
	);
}

export default Modal