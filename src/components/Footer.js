import React from "react";
import styled from "styled-components";

export const Footer = () => {
  return (
    <StyledWrapper>
      <footer className="text-center text-lg-start text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="" className="me-4 text-reset">
              <i className="fa fa-facebook-f"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fa fa-linkedin"></i>
            </a>
          </div>
        </section>
        <hr />
        <section className="">
          <div className="container text-center text-md-start">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>getfitwithme
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">About Us</h6>
                <h6 className="text-uppercase fw-bold mb-4">FAQs</h6>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fa fa-home me-3"></i>Seattle, WA 98550, US
                </p>
                <p>
                  <i className="fa fa-envelope me-3"></i>
                  info@example.com
                </p>
                <p>
                  <i className="fa fa-phone me-3"></i> + 01 206 567 88
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-4">
          © 2021 Copyright:
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
            getfit
          </a>
        </div>
      </footer>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .d-flex {
    margin: 0 19% 0 13%;
  }
  .text-center {
    background-color: #f8fdff;
  }
`;
