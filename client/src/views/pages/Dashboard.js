import React, { Component } from 'react';
import reactFeature from '../../assets/images/react-feature.svg';
import sassFeature from '../../assets/images/sass-feature.svg';
import bootstrapFeature from '../../assets/images/bootstrap-feature.svg';
import responsiveFeature from '../../assets/images/responsive-feature.svg';
import { Card, CardBody, Row, Col } from 'reactstrap';

class Dashboard extends Component {
  render() {
    const heroStyles = {
      padding: '50px 0 70px'
    };

    return (
      <div>
        <Row>
          <Col md={6}>
            <div className="home-hero" style={heroStyles}>
              <h1>Welcome to Adda52.</h1>
              <p className="text-muted">
                Discover this UI dashboard framework that will help speed up
                your next web application project.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
