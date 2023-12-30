import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <div className="footer-style container-fluid">
                <div className="row p-5 pb-2">
                    <div className="footer-div col-xl col-md-12 col-sm-12 col-xl-3 col-lg-12 mb-4 mb-lg-4">
                        <Link className="logo" to='/'>Trax</Link>
                        <div className="mt-1">
                            <span>Follow us</span>
                                <div className="d-flex justify-content-start justify-content-md-start mt-1">
                                    <i class="fa-brands fa-facebook"></i>
                                    <i class="fa-brands fa-instagram"></i>
                                    <i class="fa-brands fa-twitter"></i>
                                </div>
                        </div>
                    </div>
                    <div className="footer-div col-xl col-md-4 col-sm-12 col-xl-3 col-lg-4 mb-4 mb-lg-0">
                    <div className="categories d-flex">
                                    <span className="d-flex justify-content-start ms-2 align-items-center fw-bold footer-text">Categories</span>
                                    <span className="footer-items-text ms-2">Speakers</span>
                                    <span className="footer-items-text ms-2">Turntables</span>
                                    <span className="footer-items-text ms-2">Amplifiers</span>
                                    <span className="footer-items-text ms-2">Merch</span>
                                    <span className="footer-items-text ms-2">Records (coming soon)</span>
                                    <span className="footer-items-text ms-2">Headphones (coming soon)</span>
                                </div>
                    </div>
                    <div className="footer-div col-xl col-md-4 col-sm-12 col-xl-3 col-lg-4 mb-4 mb-lg-0">
                    <div className="categories d-flex">
                                    <span className="d-flex justify-content-start ms-2 align-items-center fw-bold footer-text">Categories</span>
                                    <span className="footer-items-text ms-2">Speakers</span>
                                    <span className="footer-items-text ms-2">Turntables</span>
                                    <span className="footer-items-text ms-2">Amplifiers</span>
                                    <span className="footer-items-text ms-2">Merch</span>
                                    <span className="footer-items-text ms-2">Records (coming soon)</span>
                                    <span className="footer-items-text ms-2">Headphones (coming soon)</span>
                                </div>
                    </div>
                    <div className="footer-div col-xl col-md-4 col-sm-12 col-xl-3 col-lg-4 mb-4 mb-lg-0">
                    <div className="categories d-flex">
                                    <span className="d-flex justify-content-start ms-2 align-items-center fw-bold footer-text">Categories</span>
                                    <span className="footer-items-text ms-2">Speakers</span>
                                    <span className="footer-items-text ms-2">Turntables</span>
                                    <span className="footer-items-text ms-2">Amplifiers</span>
                                    <span className="footer-items-text ms-2">Merch</span>
                                    <span className="footer-items-text ms-2">Records (coming soon)</span>
                                    <span className="footer-items-text ms-2">Headphones (coming soon)</span>
                                </div>
                    </div>
                    <div className="col-xs-12 text-center mt-3">
                        Desarrollado por Héctor Guzman, 2023.
                    </div>
                </div>
            </div>
            {/* <div className="footer-style">
                <div className='text-start'>
                    <div className="container">
                        <div className="row mx-0 my-0">
                            <div className="col-md-3 col-12">
                                <Link className='logo' to='/'>Trax</Link>
                                <div className="mt-10">
                                    <span>Follow us</span>
                                    <div className="d-flex justify-content-start justify-content-md-start mt-1">
                                        <i class="fa-brands fa-facebook"></i>
                                        <i class="fa-brands fa-instagram"></i>
                                        <i class="fa-brands fa-twitter"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="footer-column d-flex justify-content-center col-md-3 col-12">
                                <div className="categories d-flex">
                                    <span className="d-flex justify-content-start ms-2 align-items-center fw-bold footer-text">Categories</span>
                                    <span className="footer-items-text ms-2">Speakers</span>
                                    <span className="footer-items-text ms-2">Turntables</span>
                                    <span className="footer-items-text ms-2">Amplifiers</span>
                                    <span className="footer-items-text ms-2">Merch</span>
                                    <span className="footer-items-text ms-2">Records (coming soon)</span>
                                    <span className="footer-items-text ms-2">Headphones (coming soon)</span>
                                </div>

                            </div>
                            <div className="footer-column d-flex justify-content-center col-md-3 col-12">
                                
                            </div>
                            <div className="footer-column d-flex justify-content-md-center col-md-3 col-12">
                                d
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </footer>
    )
}

export default Footer