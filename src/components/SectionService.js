import '../styles/App.css'
import imgService from '../assets/img_service.png'

export default function SectionService() {
    return (
        <div className="our-services py-5" id="our-services">
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <img src={imgService} alt="img_service" />
                    </div>
                    <div className="col-md-6 d-flex justify-content-center align-items-start flex-column my-5">
                        <h3>Best Car Rental for any kind of trip in (Lokasimu)!</h3>
                        <p>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang
                            lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
                            wedding, meeting, dll.
                        </p>
                        <div className="custom-list">
                            <p className="custom-text pe-2"><i className="bi bi-check-lg me-3"></i>Sewa Mobil Dengan Supir di Bali
                                12 Jam
                            </p>
                            <p className="custom-text-2 pe-2"><i className="bi bi-check-lg me-3"></i>Sewa Mobil Lepas Kunci di Bali
                                24
                                Jam</p>
                            <p className="custom-text pe-2"><i className="bi bi-check-lg me-3"></i>Sewa Mobil Jangka Panjang Bulanan
                            </p>
                            <p className="custom-text pe-2"><i className="bi bi-check-lg me-3"></i>Gratis Antar - Jemput Mobil di
                                Bandara</p>
                            <p className="custom-text pe-2"><i className="bi bi-check-lg me-3"></i>Layanan Airport Transfer / Drop
                                In Out</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}