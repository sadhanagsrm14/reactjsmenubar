/* import React from react to make custome component like MainContent  */
import React,{ Component,Fragment } from "react";

/* import Footer component*/
import Footer from "./Footer";

/* This is Class Component*/
class ContactUs extends Component{
    render(){
        return(
            <Fragment>
            {/* Use fragment to render multiple tags of jsx Notes: To use Fragment we have to import Fragment at top*/}
            <div className="container">
                <div className="row">
                    {/* Content Section (Left Secton)*/}
                    <div className="col-lg-12">
                        <section class="mb-4">
                            <h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
                            <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                            a matter of hours to help you.</p>
                            <div class="row">
                                <div class="col-md-9 mb-md-0 mb-5">
                                    <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                                        <div class="row">
                                            <div class="col-md-6">
                                            <div class="md-form mb-0">
                                                <input type="text" id="name" name="name" class="form-control"/>
                                                <label for="name" class="">Your name</label>
                                            </div>
                                        </div>
                                            <div class="col-md-6">
                                        <div class="md-form mb-0">
                                            <input type="text" id="email" name="email" class="form-control"/>
                                            <label for="email" class="">Your email</label>
                                        </div>
                                    </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="md-form mb-0">
                                                    <input type="text" id="subject" name="subject" class="form-control"/>
                                                    <label for="subject" class="">Subject</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="md-form">
                                                    <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                                                    <label for="message">Your message</label>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <div class="text-center text-md-left">
                                    <a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
                                    </div>
                                    <div class="status"></div>
                                </div>
                                <div class="col-md-3 text-center">
                                    <ul class="list-unstyled mb-0">
                                    <li><i class="fas fa-map-marker-alt fa-2x"></i>
                                    <p>Uttar Pradesh, Lucknow-226017, India</p>
                                    </li>

                                    <li><i class="fas fa-phone mt-4 fa-2x"></i>
                                    <p>+ 91 234 567 89</p>
                                    </li>

                                    <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                                    <p>contact@rock@gmail.com</p>
                                    </li>
                                    </ul>
                                </div>
                            </div>
                        </section>                    
                    </div>
                </div>
            </div>
            <Footer />
            </Fragment>);
    }
}
//Export Footer Custom Component so that other component import it.
export default ContactUs;

