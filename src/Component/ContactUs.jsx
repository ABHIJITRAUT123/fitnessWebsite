import React from "react";
import styled from "styled-components";
import FormSection from "../Common/FormSection";


var Heading = styled.h1`
color: white;`

export default function ContactUs(){
    return(
        <>
            <section className="container">
                <Heading className="text-center mt-5 mb-5">Contact Us</Heading>
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15130.618825523137!2d73.91145!3d18.5444995!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c172f26df47d%3A0x8d508903a17ab0c1!2sUrbanFit%20Wellness%20Private%20Limited!5e0!3m2!1sen!2sin!4v1680783703881!5m2!1sen!2sin" width="100%" height="450" allowfullscreen="" ></iframe>
                        </div>
                    </div>
                </div>
            </section>
            <FormSection />
        </>
    )
}