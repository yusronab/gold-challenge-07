import '../styles/App.css'

export default function SectionWhyUs() {
    return (
        <div className="why-us py-5" id="why-us">
            <div className="container py-5">
                <h3>Why Us?</h3>
                <p>Mengapa harus pilih Binar Car Rental?</p>
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-3 my-2">
                        <div className="card">
                            <div className="card-body yellow">
                                <i className="bi bi-hand-thumbs-up"></i>
                                <p>Mobil Lengkap</p>
                                <p>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 my-2">
                        <div className="card">
                            <div className="card-body red">
                                <i className="bi bi-tag"></i>
                                <p>Harga Murah</p>
                                <p>Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 my-2">
                        <div className="card">
                            <div className="card-body blue">
                                <i className="bi bi-clock"></i>
                                <p>Layanan 24 Jam</p>
                                <p>Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 my-2">
                        <div className="card">
                            <div className="card-body green">
                                <i className="bi bi-award"></i>
                                <p>Sopir Profesional</p>
                                <p>Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}