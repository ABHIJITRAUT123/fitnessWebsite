import React from "react";
import styled from "styled-components";
// import img1 from "images\aboutus-hero-section-mob.png"

var Image = styled.img`
background-image: url(./images/aboutus-hero-section-mob.png);
background-size: cover;
height: 100%
`
var Description = styled.p`
background-color: purple;
color: white;`

export default function AboutUs(){
    return(
        <section className="container">
            <div className="mt-5 mb-5">
                <picture>
                    {/* <Image></Image> */}
                    <source media="(min-width:992px)" srcSet="public/images/aboutus-hero-section-web.png"></source>
                    <img src="public/images/aboutus-hero-section-mob.png" alt="fitness is nature"  height="100%" width="100%" />
                    {/* <img src={img1} alt="fitness is nature" /> */}
                </picture>
            </div>
            <Description>
                <h1>Get Healthy & Fit.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo autem exercitationem sed odio consequuntur est voluptate saepe quasi itaque inventore, ratione esse sequi recusandae dolore omnis fugit illo aspernatur asperiores.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo autem exercitationem sed odio consequuntur est voluptate saepe quasi itaque inventore, ratione esse sequi recusandae dolore omnis fugit illo aspernatur asperiores.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo autem exercitationem sed odio consequuntur est voluptate saepe quasi itaque inventore, ratione esse sequi recusandae dolore omnis fugit illo aspernatur asperiores.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo autem exercitationem sed odio consequuntur est voluptate saepe quasi itaque inventore, ratione esse sequi recusandae dolore omnis fugit illo aspernatur asperiores.</p>
            </Description>
        </section>
    )
}