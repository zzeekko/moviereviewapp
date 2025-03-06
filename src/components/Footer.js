

const Footer = () => {
    return (
        <footer className="footer bg-dark text-white py-4">
            <section className="py-3">
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <ul className="list-unstyled list-inline mb-0">
                                <li className="list-inline-item">
                                    <a href="#" className="text-white text-capitalize text-decoration-none">about</a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#" className="text-white text-capitalize text-decoration-none">contact</a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#" className="text-white text-capitalize text-decoration-none">locations</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-3">
                <div className="container text-center">
                    <p className="text-light mb-0">
                        Read <a href="https://tirkom.thecomicseries.com/" target="_blank" className="text-white text-decoration-none">Tirkom</a> &copy; 2025
                    </p>
                    <p className="text-light mb-0">
                        <a href="#header" className="text-white text-decoration-none">Back to Top</a>
                    </p>
                </div>
            </section>
        </footer>
    )
}

export default Footer;