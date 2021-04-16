import {Container, Row, Col} from 'react-bootstrap';
import Header from '../../Components/Header';

const Dashboard = () =>
{
    return (
        <Container fluid>
            <Row>
                <Col>
                    <Header/>
                </Col>
            </Row>
            <Row>
                <Col md={3}>
                    {/* <Menu/> */}
                </Col>
                <Col md={9}>
                    {/* <Content>

                    </Content> */}
                </Col>
            </Row>
        </Container>
    );
}

export default Dashboard;