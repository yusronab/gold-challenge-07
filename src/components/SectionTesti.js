import '../styles/App.css'
import { Carousel, Container, Card, Row, Col } from 'react-bootstrap'
import { useState } from 'react';

export default function SectionTesti() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div className="testimonial py-5" id="testimonial">
            <div className="text-center pt-3">
                <h3>Testimonial</h3>
                <p>Berbagai review positif dari para pelanggan kami</p>
            </div>
            <Carousel
                activeIndex={index}
                onSelect={handleSelect}
                controls={true}
                nextIcon={
                    <div className="w-100" style={{ position: "absolute", bottom: -75, right: 450 }}>
                        <div className="d-flex">
                            <i className="bi bi-chevron-right"></i>
                        </div>
                    </div>
                }
                prevIcon={
                    <div className="w-100" style={{ position: "absolute", bottom: -75, left: 550 }}>
                        <div className="d-flex">
                            <i className="bi bi-chevron-left"></i>
                        </div>
                    </div>
                }
                indicators={false}>
                <Carousel.Item>
                    <Container>
                        <Card>
                            <Card.Body>
                                <Row>
                                    <Col md="4" className="d-flex justify-content-end align-items-center">
                                        <img
                                            className="d-block rounded-circle img-thumbnail"
                                            src="https://www.dailysia.com/wp-content/uploads/2022/04/Vonny-Felicia.jpg"
                                            alt="First slide"
                                        />
                                    </Col>
                                    <Col md="8" className="text-center text-md-start">
                                        <div
                                            className="d-flex flex-row justify-content-center justify-content-md-start my-3">
                                            <i className="bi bi-star-fill me-1"></i>
                                            <i className="bi bi-star-fill me-1"></i>
                                            <i className="bi bi-star-fill me-1"></i>
                                            <i className="bi bi-star-fill me-1"></i>
                                            <i className="bi bi-star-fill"></i>
                                        </div>
                                        <p className="pe-md-5">Lorem ipsum dolor sit arly consectetur adipisicing elit. Quo
                                            itaque dicta nostrum
                                            laboriosam quisquam! Iure, officiis! Praesentium ullam laudantium, tempore
                                            reiciendis delectus aut? Quaerat, dolor.
                                        </p>
                                        <p className="fw-bold">Vonny Felicia, 22? Jakarta</p>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Container>
                </Carousel.Item>
                <Carousel.Item>
                    <Container>
                        <Card>
                            <Card.Body>
                                <Row>
                                    <Col md="4" className="d-flex justify-content-end align-items-center">
                                        <img
                                            className="d-block rounded-circle img-thumbnail"
                                            src="https://matalelaki.com/media/8b/67/f2/5c/8b67f25cf8c5f478d9581f205fc45fbd.jpg"
                                            alt="First slide"
                                        />
                                    </Col>
                                    <Col md="8" className="text-center text-md-start">
                                        <div
                                            className="d-flex flex-row justify-content-center justify-content-md-start my-3">
                                            <i className="bi bi-star-fill me-1"></i>
                                            <i className="bi bi-star-fill me-1"></i>
                                            <i className="bi bi-star-fill me-1"></i>
                                            <i className="bi bi-star-fill me-1"></i>
                                            <i className="bi bi-star-fill"></i>
                                        </div>
                                        <p className="pe-md-5">Lorem ipsum dolor sit arly consectetur adipisicing elit. Quo
                                            itaque dicta nostrum
                                            laboriosam quisquam! Iure, officiis! Praesentium ullam laudantium, tempore
                                            reiciendis delectus aut? Quaerat, dolor.
                                        </p>
                                        <p className="fw-bold">Vonny Felicia, 22? Jakarta</p>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Container>
                </Carousel.Item>
                <Carousel.Item>
                    <Container>
                        <Card>
                            <Card.Body>
                                <Row>
                                    <Col md="4" className="d-flex justify-content-end align-items-center">
                                        <img
                                            className="d-block rounded-circle img-thumbnail"
                                            src="https://i.pinimg.com/736x/0d/4c/c7/0d4cc7728140233e614c6414132136ce.jpg"
                                            alt="First slide"
                                        />
                                    </Col>
                                    <Col md="8" className="text-center text-md-start">
                                        <div
                                            className="d-flex flex-row justify-content-center justify-content-md-start my-3">
                                            <i className="bi bi-star-fill me-1"></i>
                                            <i className="bi bi-star-fill me-1"></i>
                                            <i className="bi bi-star-fill me-1"></i>
                                            <i className="bi bi-star-fill me-1"></i>
                                            <i className="bi bi-star-fill"></i>
                                        </div>
                                        <p className="pe-md-5">Lorem ipsum dolor sit arly consectetur adipisicing elit. Quo
                                            itaque dicta nostrum
                                            laboriosam quisquam! Iure, officiis! Praesentium ullam laudantium, tempore
                                            reiciendis delectus aut? Quaerat, dolor.
                                        </p>
                                        <p className="fw-bold">Vonny Felicia, 22? Jakarta</p>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Container>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}