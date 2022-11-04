import '../styles/App.css'

export default function Footer() {
    return (
        <div class="footer">
            <div class="container pb-5">
                <div class="row">
                    <div class="col-md-4">
                        <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                        <p>binarcarrental@gmail.com</p>
                        <p>081-233-334-808</p>
                    </div>
                    <div class="col-md-2 d-flex flex-column">
                        <a href="#our-services" class="text-decoration-none mb-3">Our services</a>
                        <a href="#why-us" class="text-decoration-none mb-3">Why Us</a>
                        <a href="#testimonial" class="text-decoration-none mb-3">Testimonial</a>
                        <a href="#faq" class="text-decoration-none mb-3">FAQ</a>
                    </div>
                    <div class="col-md-3">
                        <p>Connect with us</p>
                        <div class="d-flex mb-3">
                            <a href="https://facebook.com" target="_blank" rel="noreferrer"><i class="bi bi-facebook"></i></a>
                            <a href="https://instagram.com/yusr0nab" target="_blank" rel="noreferrer"><i class="bi bi-instagram"></i></a>
                            <a href="https://twitter.com" target="_blank" rel="noreferrer"><i class="bi bi-twitter"></i></a>
                            <a href="https://mail.google.com" target="_blank" rel="noreferrer"><i class="bi bi-envelope"></i></a>
                            <a href="https://twitch.com" target="_blank" rel="noreferrer"><i class="bi bi-twitch"></i></a>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <p>Copyright Binar &copy; 2022</p>
                    </div>
                </div>
            </div>
        </div>
    )
}