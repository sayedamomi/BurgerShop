import { Card, Col, Container, Row } from "react-bootstrap";
import Layout from "../../components/Layouts/Layout";
import "../../styles/AboutStyle.css";
import "../../styles/BlogStyle.css";
import "../../styles/HomeStyle.css";
import Section1 from "./Section1";

// Import images
import AboutImage from "../../assets/about/about-1.jpg";
import DeliveryImage from "../../assets/about/delivery-bike.png";
import PizzaImage from "../../assets/about/pizza.png";
import SaladImage from "../../assets/about/salad.png";

const About = () => {
  return (
    <>
      <Layout>
        {/* Hero Section */}
        <section className="hero_section">
          <Container>
            <Row className="justify-content-center">
              <Col lg={7} className="text-center">
                <div className="hero_text text-white">
                  <h1 className="text-white">About Us</h1>
                  <h2 className="text-white">Our Story</h2>
                  <p className="text-white fs-5">
                    Discover the passion and dedication behind every burger we
                    create. From farm-fresh ingredients to time-honored recipes.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Main About Section */}
        <Section1 />

        {/* Our Values Section */}
        <section className="menu_section">
          <Container>
            <Row className="mb-5">
              <Col lg={12}>
                <div className="text-center mb-5">
                  <h2 className="fs-1 mb-0">Our Values</h2>
                  <p className="para">What makes us different</p>
                </div>
              </Col>
            </Row>

            <Row>
              <Col lg={4} md={6} className="mb-4">
                <Card className="about-values-card text-center h-100 shadow-sm">
                  <Card.Body className="p-4">
                    <div className="mb-3">
                      <img
                        src={PizzaImage}
                        alt="Quality"
                        className="img-fluid"
                        style={{ maxWidth: "80px" }}
                      />
                    </div>
                    <Card.Title className="h4 mb-3">
                      Quality Ingredients
                    </Card.Title>
                    <Card.Text className="text-muted">
                      We source only the finest ingredients from local farms and
                      trusted suppliers to ensure every bite is fresh and
                      flavorful.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col lg={4} md={6} className="mb-4">
                <Card className="about-values-card text-center h-100 shadow-sm">
                  <Card.Body className="p-4">
                    <div className="mb-3">
                      <img
                        src={DeliveryImage}
                        alt="Fast Delivery"
                        className="img-fluid"
                        style={{ maxWidth: "80px" }}
                      />
                    </div>
                    <Card.Title className="h4 mb-3">Fast Delivery</Card.Title>
                    <Card.Text className="text-muted">
                      Get your favorite burgers delivered hot and fresh to your
                      doorstep within 30 minutes or it's free!
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col lg={4} md={6} className="mb-4">
                <Card className="about-values-card text-center h-100 shadow-sm">
                  <Card.Body className="p-4">
                    <div className="mb-3">
                      <img
                        src={SaladImage}
                        alt="Healthy Options"
                        className="img-fluid"
                        style={{ maxWidth: "80px" }}
                      />
                    </div>
                    <Card.Title className="h4 mb-3">Healthy Options</Card.Title>
                    <Card.Text className="text-muted">
                      We offer a variety of healthy alternatives including vegan
                      patties, fresh salads, and gluten-free options.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Statistics Section */}
        <section className="promotion_section">
          <Container>
            <Row className="text-center">
              <Col lg={3} md={6} className="mb-4">
                <div className="text-center">
                  <h2 className="display-4 text-warning mb-2">50K+</h2>
                  <h5>Happy Customers</h5>
                  <p className="text-muted">
                    Satisfied customers who keep coming back for more
                  </p>
                </div>
              </Col>
              <Col lg={3} md={6} className="mb-4">
                <div className="text-center">
                  <h2 className="display-4 text-warning mb-2">25+</h2>
                  <h5>Burger Varieties</h5>
                  <p className="text-muted">
                    Different types of delicious burgers to choose from
                  </p>
                </div>
              </Col>
              <Col lg={3} md={6} className="mb-4">
                <div className="text-center">
                  <h2 className="display-4 text-warning mb-2">10</h2>
                  <h5>Years Experience</h5>
                  <p className="text-muted">
                    Decade of experience in crafting perfect burgers
                  </p>
                </div>
              </Col>
              <Col lg={3} md={6} className="mb-4">
                <div className="text-center">
                  <h2 className="display-4 text-warning mb-2">24/7</h2>
                  <h5>Service Available</h5>
                  <p className="text-muted">
                    Round the clock service for your convenience
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Team Section */}
        <section className="menu_section">
          <Container>
            <Row className="mb-5">
              <Col lg={12}>
                <div className="text-center mb-5">
                  <h2 className="fs-1 mb-0">Meet Our Team</h2>
                  <p className="para">
                    The passionate people behind your favorite burgers
                  </p>
                </div>
              </Col>
            </Row>

            <Row>
              <Col lg={4} md={6} className="mb-4">
                <Card className="team-card text-center h-100 shadow-sm">
                  <div className="overflow-hidden">
                    <Card.Img
                      variant="top"
                      src={AboutImage}
                      style={{ height: "250px", objectFit: "cover" }}
                    />
                  </div>
                  <Card.Body className="p-4">
                    <Card.Title className="h4 mb-2">
                      Chef Marcus Rodriguez
                    </Card.Title>
                    <p className="text-warning mb-3">Head Chef</p>
                    <Card.Text className="text-muted">
                      With 15 years of culinary experience, Chef Marcus brings
                      creativity and passion to every burger creation.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col lg={4} md={6} className="mb-4">
                <Card className="blog-card text-center h-100 shadow-sm">
                  <div className="overflow-hidden">
                    <Card.Img
                      variant="top"
                      src={AboutImage}
                      style={{ height: "250px", objectFit: "cover" }}
                    />
                  </div>
                  <Card.Body className="p-4">
                    <Card.Title className="h4 mb-2">Sarah Johnson</Card.Title>
                    <p className="text-warning mb-3">Restaurant Manager</p>
                    <Card.Text className="text-muted">
                      Sarah ensures every customer has an exceptional dining
                      experience with her attention to detail and customer
                      service.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col lg={4} md={6} className="mb-4">
                <Card className="blog-card text-center h-100 shadow-sm">
                  <div className="overflow-hidden">
                    <Card.Img
                      variant="top"
                      src={AboutImage}
                      style={{ height: "250px", objectFit: "cover" }}
                    />
                  </div>
                  <Card.Body className="p-4">
                    <Card.Title className="h4 mb-2">Mike Thompson</Card.Title>
                    <p className="text-warning mb-3">Grill Master</p>
                    <Card.Text className="text-muted">
                      Mike's expertise on the grill ensures every patty is
                      cooked to perfection with the perfect char and juiciness.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </Layout>
    </>
  );
};

export default About;
