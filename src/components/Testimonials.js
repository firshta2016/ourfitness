import React from "react";
import styled from "styled-components";

export const Testimonials = () => {
  return (
    <StyledWrapper>
      <section className="pn_reviews">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center pb-5">
                What our Athletics has to say
              </h1>
            </div>

            <div className="col-md-12 col-lg-4">
              <div className="pn_testimonial_box mt-4">
                <p className="text-justify">
                  What does Lorem Ipsum mean? Derived from Latin dolorem ipsum
                  (“pain itself”), Lorem Ipsum is filler text used by publishers
                  and graphic designers used to demonstrate graphic elements.
                </p>

                <div className="row pt-3">
                  <div className="col-md-6 pn_review_profile">
                    <img
                      src="https://desklib.com/static/src/assets/images/v2/profile_1.svg"
                      className="border-radius-12 float-right"
                      alt="client image"
                    />{" "}
                    <span> Charles Boyle </span>{" "}
                  </div>
                  <div className="col-md-6 pn_review_rating d-flex justify-content-end">
                    {" "}
                    5 &nbsp;{" "}
                    <img
                      className="image-radius aligncenter"
                      src="https://desklib.com/static/src/assets/images/v2/star_rating.svg"
                      alt="client stars image"
                    />{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-4">
              <div className="pn_testimonial_box mt-4">
                <p className="text-justify">
                  What does Lorem Ipsum mean? Derived from Latin dolorem ipsum
                  (“pain itself”), Lorem Ipsum is filler text used by publishers
                  and graphic designers used to demonstrate graphic elements.
                </p>
                <div className="row pt-3">
                  <div className="col-md-6 pn_review_profile">
                    <img
                      src="https://desklib.com/static/src/assets/images/v2/profile_2.svg"
                      className="border-radius-12 float-right"
                      alt="client image"
                    />{" "}
                    <span> Gina Lannety </span>{" "}
                  </div>
                  <div className="col-md-6 pn_review_rating d-flex justify-content-end">
                    {" "}
                    5 &nbsp;{" "}
                    <img
                      className="image-radius aligncenter"
                      src="https://desklib.com/static/src/assets/images/v2/star_rating.svg"
                      alt="client stars image"
                    />{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-4">
              <div className="pn_testimonial_box mt-4">
                <p className="text-justify">
                  What does Lorem Ipsum mean? Derived from Latin dolorem ipsum
                  (“pain itself”), Lorem Ipsum is filler text used by publishers
                  and graphic designers used to demonstrate graphic elements.
                </p>
                <div className="row pt-3">
                  <div className="col-md-6 pn_review_profile">
                    <img
                      src="https://desklib.com/static/src/assets/images/v2/profile_3.svg"
                      className="border-radius-12 float-right"
                      alt="client image"
                    />{" "}
                    <span> Dug Judey </span>{" "}
                  </div>
                  <div className="col-md-6 pn_review_rating d-flex justify-content-end">
                    {" "}
                    5 &nbsp;{" "}
                    <img
                      className="image-radius aligncenter"
                      src="https://desklib.com/static/src/assets/images/v2/star_rating.svg"
                      alt="stars image"
                    />{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .pn_testimonial_box {
    font-weight: 300;
    padding: 2rem;
    margin: 2rem;
    border: 1px solid #405fbd;
    position: relative;
    transition: 1s;
    transform: scale(0.9);
    background-color: white;
    -webkit-border-radius: 4rem;
    -moz-border-radius: 4rem;
    -ms-border-radius: 4rem;
    border-radius: 4rem;
  }
  .pn_testimonial_box:hover {
    box-shadow: 2px 4px 8px #d6d8da;
    border: 1px solid #fff;
    transform: scale(1);
    position: relative;
    z-index: 1;
  }
  .pn_review_rating img {
    width: 20%;
  }
  .pn_review_profile img {
    position: absolute;
    margin: -1rem -5rem 0;
  }
  .pn_review_profile span {
    position: absolute;
  }
  .pn_reviews {
    background-color: #f8fdff;
  }
`;

//https://codepen.io/poojanahelia/pen/mdRRgvP
