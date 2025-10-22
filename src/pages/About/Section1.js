import { Col, Container, Row } from "react-bootstrap";
import PromotionImage from "../../assets/promotion/pro.png";

function Section1() {
  return (
    <>
      <section className="promotion_section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-center mb-5 mb-lg-0">
              <div className="about-image-container">
                <img
                  src={PromotionImage}
                  className="img-fluid"
                  alt="About Our Restaurant - Delicious Food"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>
            </Col>
            <Col lg={6} className="px-5">
              <div className="about-content">
                <h2 className="mb-4">
                  Nothing brings people together like a good burger
                </h2>
                <p className="lead mb-4">
                  Since our founding, we've been committed to serving the most
                  delicious, high-quality burgers made with fresh,
                  locally-sourced ingredients. Our passion for great food and
                  exceptional service has made us a favorite destination for
                  burger lovers everywhere.
                </p>
                <div className="about-features">
                  <div className="feature-item mb-3">
                    <i className="bi bi-check-circle-fill text-warning me-3"></i>
                    <span>
                      <strong>Fresh Ingredients:</strong> We source our
                      ingredients daily from local farms and trusted suppliers
                      to ensure the highest quality and freshness.
                    </span>
                  </div>
                  <div className="feature-item mb-3">
                    <i className="bi bi-check-circle-fill text-warning me-3"></i>
                    <span>
                      <strong>Expert Preparation:</strong> Our experienced chefs
                      prepare each burger with care and attention to detail,
                      ensuring perfect flavor every time.
                    </span>
                  </div>
                  <div className="feature-item mb-3">
                    <i className="bi bi-check-circle-fill text-warning me-3"></i>
                    <span>
                      <strong>Customer Satisfaction:</strong> We're committed to
                      providing an exceptional dining experience that keeps our
                      customers coming back for more.
                    </span>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-muted">
                    <em>
                      "Our mission is simple: to create memorable dining
                      experiences through exceptional food, outstanding service,
                      and a welcoming atmosphere."
                    </em>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* BG Parallax Scroll */}
      <section className="bg_parallax_scroll"></section>
    </>
  );
}

export default Section1;
