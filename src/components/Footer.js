import React from "react";
import styled from "styled-components";

export const Footer = () => {
  return (
    <StyledWrapper>
      <footer className="text-center text-lg-start text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between"></section>
        <hr />
        <hr />
        <section className="footer">
          <div className="container text-center text-md-start">
            <div className="row mt-3">
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact Us</h6>
                <h6 className="text-uppercase fw-bold mb-4">About Us</h6>
                <h6 className="text-uppercase fw-bold mb-4">FAQs</h6>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
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
  .text-center {
    background-color: #eff5f7;
  }
  .footer {
    padding: 2%;
  }
`;
