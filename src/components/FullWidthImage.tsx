'use client';

import Image from "react-bootstrap/Image"
import Col from "react-bootstrap/esm/Col"
import Row from "react-bootstrap/esm/Row"

const FullWidthImage = () => (
    <Row className="justify-content-md-center pt-3">
        <Col md="auto">
        <Image fluid src="/experience-islandsnow-bootstrap-main.png" alt="foo" />
        </Col>
    </Row>
);

export { FullWidthImage };