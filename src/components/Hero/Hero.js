import { Container, Carousel, Button, ButtonGroup } from "react-bootstrap";
import "./Hero.css";
import React from "react";

const Hero = () => {
  return (
    <div>
      <Container className="hero mt-5">
        <Carousel
          variant="dark"
          autoPlay={false}
          interval={2000}
          controls={false}
          indicators={false}
        >
          <Carousel.Item className="d-flex carousel">
            <div>
              <h1>
                Let's Start
                <br /> Cooking With Some <br /> Popular Recipies
              </h1>
              <p>
                Want to Learn to cook but confused how to start ? <br />
                No Need to worry again!
              </p>

              <Button className="HeroBtn" variant="success">
                Explore Recipies
              </Button>
              <Button
                className="HeroBtn"
                style={{ marginLeft: "1rem" }}
                variant="outline-success"
              >
                Post Recipies
              </Button>
            </div>
            <img
              src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              alt="First slide"
            />
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
};

export default Hero;
