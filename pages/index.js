import Head from 'next/head'
import { Col, Container, Row } from 'react-bootstrap'

export default function Home() {
	return (
		<>
			<Head>
				<title>Mylabs Simple Nextjs Boilerplate</title>
				<meta name='description' content='Mylabs Simple Nextjs Boilerplate' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Container>
				<Row>
					<Col>
						<h3>Welcome to Simple Nextjs</h3>
					</Col>
				</Row>
			</Container>
		</>
	)
}
