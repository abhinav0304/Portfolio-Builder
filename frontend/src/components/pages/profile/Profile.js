import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Profile() {
  const user = useSelector((state) => state.auth.user);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      <Row className="text-center mb-4">
        <Col>
          <Image src={user.pic} roundedCircle style={{ width: '150px' }} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          {/* <p>{user._id}</p> */}

        </Col>
      </Row>
      
    </Container>
  );
}

export default Profile;
