import '../styles/App.css'

export default function Footer() {
    return (
        <div className="footer">
            <div className="container pb-5">
                <div className="row">
                    <div className="col-md-4">
                        <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                        <p>binarcarrental@gmail.com</p>
                        <p>081-233-334-808</p>
                    </div>
                    <div className="col-md-2 d-flex flex-column">
                        <a href="#our-services" className="text-decoration-none mb-3">Our services</a>
                        <a href="#why-us" className="text-decoration-none mb-3">Why Us</a>
                        <a href="#testimonial" className="text-decoration-none mb-3">Testimonial</a>
                        <a href="#faq" className="text-decoration-none mb-3">FAQ</a>
                    </div>
                    <div className="col-md-3">
                        <p>Connect with us</p>
                        <div className="d-flex mb-3">
                            <a href="https://facebook.com" target="_blank" rel="noreferrer"><i className="bi bi-facebook"></i></a>
                            <a href="https://instagram.com/yusr0nab" target="_blank" rel="noreferrer"><i className="bi bi-instagram"></i></a>
                            <a href="https://twitter.com" target="_blank" rel="noreferrer"><i className="bi bi-twitter"></i></a>
                            <a href="https://mail.google.com" target="_blank" rel="noreferrer"><i className="bi bi-envelope"></i></a>
                            <a href="https://twitch.com" target="_blank" rel="noreferrer"><i className="bi bi-twitch"></i></a>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <p>Copyright Binar &copy; 2022</p>
                    </div>
                </div>
            </div>
        </div>
    )
}