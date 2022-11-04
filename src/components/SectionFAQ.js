import '../styles/App.css'
import { Accordion, Card } from 'react-bootstrap'

export default function SectionFAQ() {
    return (
        <div>
            <div class="banner py-5">
                <div class="container text-center py-5 d-flex justify-content-center align-items-center flex-column">
                    <h1 class="fw-bold">Sewa Mobil di (Lokasimu) Sekarang</h1>
                    <p class="w-50">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et
                        dolore magna aliqua. </p>
                    <a href="/blog" class="btn btn-success">Mulai Sewa Mobil</a>
                </div>
            </div>
            <div class="faq py-5" id="faq">
                <div class="container py-5">
                    <div class="row">
                        <div class="col-md-6">
                            <h3>Frequently Asked Question</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                        <div class="col-md-6">
                            <Accordion flush>
                                <Card className="mb-3">
                                    <Accordion.Item eventKey="0" style={{ margin: "4px" }}>
                                        <Accordion.Header ><p>Apa saja syarat yang dibutuhkan?</p></Accordion.Header>
                                        <Accordion.Body >
                                            <p>Lorem ipsum dolor sit arly consectetur adipisicing elit. Voluptatibus
                                                eligendi deleniti in tenetur distinctio repellendus ut quo dolorem dicta
                                                veniam!</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Card>
                                <Card className="mb-3">
                                    <Accordion.Item eventKey="1" style={{ margin: "4px" }}>
                                        <Accordion.Header><p>Berapa hari minimal sewa mobil lepas kunci?</p></Accordion.Header>
                                        <Accordion.Body >
                                            <p>Lorem ipsum dolor sit arly consectetur adipisicing elit. Voluptatibus
                                                eligendi deleniti in tenetur distinctio repellendus ut quo dolorem dicta
                                                veniam!</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Card>
                                <Card className="mb-3">
                                    <Accordion.Item eventKey="2" style={{ margin: "4px" }}>
                                        <Accordion.Header><p>Berapa hari sebelumnya sabaiknya booking sewa mobil?</p></Accordion.Header>
                                        <Accordion.Body >
                                            <p>Lorem ipsum dolor sit arly consectetur adipisicing elit. Voluptatibus
                                                eligendi deleniti in tenetur distinctio repellendus ut quo dolorem dicta
                                                veniam!</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Card>
                                <Card className="mb-3">
                                    <Accordion.Item eventKey="3" style={{ margin: "4px" }}>
                                        <Accordion.Header><p>Apakah Ada biaya antar-jemput?</p></Accordion.Header>
                                        <Accordion.Body >
                                            <p>Lorem ipsum dolor sit arly consectetur adipisicing elit. Voluptatibus
                                                eligendi deleniti in tenetur distinctio repellendus ut quo dolorem dicta
                                                veniam!</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Card>
                                <Card className="mb-3">
                                    <Accordion.Item eventKey="4" style={{ margin: "4px" }}>
                                        <Accordion.Header><p>Bagaimana jika terjadi kecelakaan?</p></Accordion.Header>
                                        <Accordion.Body >
                                            <p>Lorem ipsum dolor sit arly consectetur adipisicing elit. Voluptatibus
                                                eligendi deleniti in tenetur distinctio repellendus ut quo dolorem dicta
                                                veniam!</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Card>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}