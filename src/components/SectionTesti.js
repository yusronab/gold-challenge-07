import '../styles/App.css'

export default function SectionTesti() {
    return (
        <div className="testimonial py-5" id="testimonial">
            <div className="text-center pt-3">
                <h3>Testimonial</h3>
                <p>Berbagai review positif dari para pelanggan kami</p>
            </div>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="container">
                    <div className="carousel-inner">
                        <div className="carousel-item active py-3 p-md-4">
                            <div className="card p-5">
                                <div className="card-body p-0 py-md-5">
                                    <div className="row">
                                        <div className="col-md-4 text-center text-md-end">
                                            <img src="https://www.dailysia.com/wp-content/uploads/2022/04/Vonny-Felicia.jpg"
                                                alt="" className="rounded-circle img-thumbnail" />
                                        </div>
                                        <div className="col-md-8 text-center text-md-start">
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item py-3 p-md-4">
                            <div className="card p-5">
                                <div className="card-body p-0 py-md-5">
                                    <div className="row">
                                        <div className="col-md-4 text-center text-md-end">
                                            <img src="https://i.pinimg.com/736x/0d/4c/c7/0d4cc7728140233e614c6414132136ce.jpg"
                                                alt="" className="rounded-circle img-thumbnail" />
                                        </div>
                                        <div className="col-md-8 text-center text-md-start">
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item py-3 p-md-4">
                            <div className="card p-5">
                                <div className="card-body p-0 py-md-5">
                                    <div className="row">
                                        <div className="col-md-4 text-center text-md-end">
                                            <img src="https://matalelaki.com/media/8b/67/f2/5c/8b67f25cf8c5f478d9581f205fc45fbd.jpg"
                                                alt="" className="rounded-circle img-thumbnail" />
                                        </div>
                                        <div className="col-md-8 text-center text-md-start">
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center mb-4">
                    <button className="carousel-control-prev position-relative d-flex justify-content-end mx-4" type="button"
                        data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <i className="bi bi-chevron-left"></i>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next position-relative d-flex justify-content-start mx-4" type="button"
                        data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <i className="bi bi-chevron-right"></i>
                        <span className="visually-hidden ">Next</span>
                    </button>
                </div>
            </div>
        </div>
    )
}