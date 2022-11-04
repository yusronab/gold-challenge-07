import '../styles/App.css'

export default function SectionTesti() {
    return (
        <div class="testimonial py-5" id="testimonial">
            <div class="text-center pt-3">
                <h3>Testimonial</h3>
                <p>Berbagai review positif dari para pelanggan kami</p>
            </div>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="container">
                    <div class="carousel-inner">
                        <div class="carousel-item active py-3 p-md-4">
                            <div class="card p-5">
                                <div class="card-body p-0 py-md-5">
                                    <div class="row">
                                        <div class="col-md-4 text-center text-md-end">
                                            <img src="https://www.dailysia.com/wp-content/uploads/2022/04/Vonny-Felicia.jpg"
                                                alt="" class="rounded-circle img-thumbnail" />
                                        </div>
                                        <div class="col-md-8 text-center text-md-start">
                                            <div
                                                class="d-flex flex-row justify-content-center justify-content-md-start my-3">
                                                <i class="bi bi-star-fill me-1"></i>
                                                <i class="bi bi-star-fill me-1"></i>
                                                <i class="bi bi-star-fill me-1"></i>
                                                <i class="bi bi-star-fill me-1"></i>
                                                <i class="bi bi-star-fill"></i>
                                            </div>
                                            <p class="pe-md-5">Lorem ipsum dolor sit arly consectetur adipisicing elit. Quo
                                                itaque dicta nostrum
                                                laboriosam quisquam! Iure, officiis! Praesentium ullam laudantium, tempore
                                                reiciendis delectus aut? Quaerat, dolor.
                                            </p>
                                            <p class="fw-bold">Vonny Felicia, 22? Jakarta</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item py-3 p-md-4">
                            <div class="card p-5">
                                <div class="card-body p-0 py-md-5">
                                    <div class="row">
                                        <div class="col-md-4 text-center text-md-end">
                                            <img src="https://i.pinimg.com/736x/0d/4c/c7/0d4cc7728140233e614c6414132136ce.jpg"
                                                alt="" class="rounded-circle img-thumbnail" />
                                        </div>
                                        <div class="col-md-8 text-center text-md-start">
                                            <div
                                                class="d-flex flex-row justify-content-center justify-content-md-start my-3">
                                                <i class="bi bi-star-fill me-1"></i>
                                                <i class="bi bi-star-fill me-1"></i>
                                                <i class="bi bi-star-fill me-1"></i>
                                                <i class="bi bi-star-fill me-1"></i>
                                                <i class="bi bi-star-fill"></i>
                                            </div>
                                            <p class="pe-md-5">Lorem ipsum dolor sit arly consectetur adipisicing elit. Quo
                                                itaque dicta nostrum
                                                laboriosam quisquam! Iure, officiis! Praesentium ullam laudantium, tempore
                                                reiciendis delectus aut? Quaerat, dolor.
                                            </p>
                                            <p class="fw-bold">Vonny Felicia, 22? Jakarta</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item py-3 p-md-4">
                            <div class="card p-5">
                                <div class="card-body p-0 py-md-5">
                                    <div class="row">
                                        <div class="col-md-4 text-center text-md-end">
                                            <img src="https://matalelaki.com/media/8b/67/f2/5c/8b67f25cf8c5f478d9581f205fc45fbd.jpg"
                                                alt="" class="rounded-circle img-thumbnail" />
                                        </div>
                                        <div class="col-md-8 text-center text-md-start">
                                            <div
                                                class="d-flex flex-row justify-content-center justify-content-md-start my-3">
                                                <i class="bi bi-star-fill me-1"></i>
                                                <i class="bi bi-star-fill me-1"></i>
                                                <i class="bi bi-star-fill me-1"></i>
                                                <i class="bi bi-star-fill me-1"></i>
                                                <i class="bi bi-star-fill"></i>
                                            </div>
                                            <p class="pe-md-5">Lorem ipsum dolor sit arly consectetur adipisicing elit. Quo
                                                itaque dicta nostrum
                                                laboriosam quisquam! Iure, officiis! Praesentium ullam laudantium, tempore
                                                reiciendis delectus aut? Quaerat, dolor.
                                            </p>
                                            <p class="fw-bold">Vonny Felicia, 22? Jakarta</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-center mb-4">
                    <button class="carousel-control-prev position-relative d-flex justify-content-end mx-4" type="button"
                        data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <i class="bi bi-chevron-left"></i>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next position-relative d-flex justify-content-start mx-4" type="button"
                        data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <i class="bi bi-chevron-right"></i>
                        <span class="visually-hidden ">Next</span>
                    </button>
                </div>
            </div>
        </div>
    )
}