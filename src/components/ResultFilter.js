import { useDispatch, useSelector } from "react-redux"
import { Container, Row, Col, Card, OverlayTrigger, Tooltip } from "react-bootstrap"
import LoadingSpinner from "./LoadingSpinner"
import CarModal from './CarModal';
import { useState } from "react"
import { getDetailCar } from "../actions/CarsAction"

export default function ResultFilter() {
    const [modal, setModal] = useState(false)

    const { filteredCarsResult, filteredCarsLoading, filteredCarsError } = useSelector((state) => state.CarsReducer)

    const dispatch = useDispatch()

    const detailCar = (e, id) => {
        e.preventDefault()

        dispatch(getDetailCar({ carId: id }))

        setModal(true)
    }

    return (
        <div>
            <Container className="my-5">
                <CarModal
                    show={modal}
                    onHide={() => setModal(false)}
                />
                {filteredCarsResult ? (
                    <>
                        <p>Hasil ditemukan : {filteredCarsResult.length} mobil</p>
                        <Row>
                            {filteredCarsResult.map((car) => {
                                return (
                                    <Col key={car.id} md="4" sm="6" className="d-flex align-items-stretch">
                                        <Card className="w-100 mb-4">
                                            <Card.Img variant="top" src={"https://github.com/fnurhidayat/probable-garbanzo/blob/main/public" + car.image.slice(1) + "?raw=true"} style={{ height: "200px", objectFit: "cover" }} />
                                            <Card.Body className="d-flex flex-column">
                                                <Card.Title>{`${car.manufacture} ${car.model}`}</Card.Title>
                                                <div className="mb-2">
                                                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Kapasitas</Tooltip>}>
                                                        <span className="d-inline-block">
                                                            <div className="badge" style={{ background: "#0D28A6" }}><i className="bi bi-people-fill me-3"></i>{car.capacity}</div>
                                                        </span>
                                                    </OverlayTrigger>
                                                </div>
                                                <Card.Text>{car.description}</Card.Text>
                                                <div className="d-flex mt-auto mb-2">
                                                    <button className="btn btn-success" onClick={(e) => detailCar(e, car.id)}>Tampilkan Detail</button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )
                            })}
                        </Row>
                    </>
                ) : filteredCarsLoading ? (
                    <div className="text-center"><LoadingSpinner /></div>
                ) : (
                    <h2 className="text-center text-muted">{filteredCarsError ? filteredCarsError : "Belum ada hasil pencarian"}</h2>
                )}
            </Container>
        </div>
    )
}