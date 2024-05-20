import { Container, Row, Col } from 'react-bootstrap';
import data from './data';
import './footer.css';

const Footer = () => {
    return (
        <div id='footer'>
            <Container>
                <Row className='myparenttarget'>
                    <Col sm={12} md={6}>
                        <div>
                            <h2>خدمات ما</h2>
                            <ul className='myul'>
                                <li><a>نصب</a></li>
                                <li><a>فروش</a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col sm={12} md={6}>
                        <div>
                            <h2>در باره ما</h2>
                            <ul className='myul'>
                                <li><a>آدرس:</a><p>خیابان پیروزی خیابان کریمشاهیان پ1</p></li>
                            </ul>
                        </div>
                    </Col>
                    <Col md={12} >
                        <div>
                            <h2>تماس با ما</h2>
                            <div className="footer__socialss">
                                {
                                    data.map(item => <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">{item.icon}</a>)
                                }
                            </div>
                        </div>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Footer;