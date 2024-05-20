import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import data from './data';
import { FaRegClock } from "react-icons/fa";
import './headertop.css';
function Headertop() {
  return (
    <div className='background'>
    <Container>
      <Row>
        <Col className='contact__dor'>
       <a href='#' className='themecolor'><FaRegClock/></a>
       <a href='#' className='nicktime'>  9.00 am-10.00 pm</a>
        </Col>
        {/* <Col>
        <div className="header__socialss">
              {
                data.map(item => <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">{item.icon}</a> )
              }
            </div>
        </Col> */}
      </Row>
    </Container>
    </div>
  );
}

export default Headertop;