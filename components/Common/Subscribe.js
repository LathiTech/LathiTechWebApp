import React from "react";

const Subscribe = () => {
  return (
    <>
      <div className="subscribe-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <div className="subscribe-content">
                <h2>Sign Up For Newsletter</h2>
                <span className="sub-title">
                  And Receive 15% Discount On First Project
                </span>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <form 
                className="newsletter-form"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  className="input-newsletter"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
                <button type="submit">Subscribe Now</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
