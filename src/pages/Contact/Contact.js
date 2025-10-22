import { useState } from "react";
import {
  Alert,
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";
import Layout from "../../components/Layouts/Layout";
import "../../styles/BlogStyle.css";
import "../../styles/ContactStyle.css";
import "../../styles/HomeStyle.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    setShowAlert(true);

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

    // Hide alert after 5 seconds
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  return (
    <Layout>
      {/* Contact Hero Section */}
      <section className="hero_section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={7} className="text-center">
              <div className="hero_text text-white">
                <h1 className="text-white">Contact Us</h1>
                <h2 className="text-white">Get In Touch</h2>
                <p className="text-white fs-5">
                  We'd love to hear from you! Send us a message and we'll
                  respond as soon as possible.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Information & Form Section */}
      <section className="menu_section">
        <Container>
          {/* Contact Info Cards */}
          <Row className="mb-5">
            <Col lg={12}>
              <div className="text-center mb-5">
                <h2 className="fs-1 mb-0">Contact Information</h2>
                <p className="para">Multiple ways to reach us</p>
              </div>
            </Col>
          </Row>

          <Row className="mb-5">
            <Col lg={4} md={6} className="mb-4">
              <Card className="contact-info-card text-center h-100 shadow-sm">
                <Card.Body className="p-4">
                  <div className="contact-icon">
                    <i className="bi bi-geo-alt-fill"></i>
                  </div>
                  <Card.Title className="h4 mb-3">Our Location</Card.Title>
                  <Card.Text className="text-muted">
                    5505 Waterford District
                    <br />
                    Dr, Miami, FL 33126
                    <br />
                    United States
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} md={6} className="mb-4">
              <Card className="contact-info-card text-center h-100 shadow-sm">
                <Card.Body className="p-4">
                  <div className="contact-icon">
                    <i className="bi bi-telephone-fill"></i>
                  </div>
                  <Card.Title className="h4 mb-3">Phone Number</Card.Title>
                  <Card.Text className="text-muted">
                    Call us for reservations
                    <br />
                    or food delivery:
                    <br />
                    <a
                      href="tel:9998887777"
                      className="calling text-decoration-none"
                    >
                      999-888-7777
                    </a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} md={6} className="mb-4">
              <Card className="contact-info-card text-center h-100 shadow-sm">
                <Card.Body className="p-4">
                  <div className="contact-icon">
                    <i className="bi bi-clock-fill"></i>
                  </div>
                  <Card.Title className="h4 mb-3">Working Hours</Card.Title>
                  <Card.Text className="text-muted">
                    Mon-Fri: 9:00AM - 10:00PM
                    <br />
                    Saturday: 10:00AM - 8:30PM
                    <br />
                    Sunday: 12:00PM - 5:00PM
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Contact Form */}
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="text-center mb-4">
                <h2 className="fs-1 mb-0">Send Us a Message</h2>
                <p className="para">
                  Fill out the form below and we'll get back to you soon
                </p>
              </div>

              {showAlert && (
                <Alert variant="success" className="mb-4">
                  <i className="bi bi-check-circle-fill me-2"></i>
                  Thank you for your message! We'll get back to you within 24
                  hours.
                </Alert>
              )}

              <Card className="contact-form shadow-sm">
                <Card.Body className="p-4">
                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Full Name *</Form.Label>
                          <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Enter your full name"
                            required
                            className="form-control-lg"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Email Address *</Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Enter your email"
                            required
                            className="form-control-lg"
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Phone Number</Form.Label>
                          <Form.Control
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="Enter your phone number"
                            className="form-control-lg"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Subject *</Form.Label>
                          <Form.Select
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            required
                            className="form-control-lg"
                          >
                            <option value="">Select a subject</option>
                            <option value="general">General Inquiry</option>
                            <option value="reservation">Reservation</option>
                            <option value="catering">Catering</option>
                            <option value="complaint">Complaint</option>
                            <option value="feedback">Feedback</option>
                            <option value="other">Other</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group className="mb-4">
                      <Form.Label>Message *</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us how we can help you..."
                        required
                        className="form-control-lg"
                      />
                    </Form.Group>

                    <div className="text-center">
                      <Button
                        type="submit"
                        className="read-more-btn px-5 py-3"
                        size="lg"
                      >
                        Send Message
                      </Button>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Map Section */}
          <Row className="mt-5">
            <Col lg={12}>
              <div className="text-center mb-4">
                <h2 className="fs-1 mb-0">Find Us</h2>
                <p className="para">Visit our restaurant location</p>
              </div>
            </Col>
          </Row>

          <Row>
            <Col lg={12}>
              <Card className="blog-card shadow-sm overflow-hidden">
                <div
                  style={{ height: "400px", background: "#f8f9fa" }}
                  className="d-flex align-items-center justify-content-center"
                >
                  <div className="text-center text-muted">
                    <i className="bi bi-map fs-1 mb-3 d-block"></i>
                    <h4>Interactive Map</h4>
                    <p>Google Maps integration would go here</p>
                    <small>5505 Waterford District Dr, Miami, FL 33126</small>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>

          {/* Additional Contact Options */}
          <Row className="mt-5">
            <Col lg={12}>
              <div className="newsletter-section text-center">
                <h3 className="mb-3">Follow Us on Social Media</h3>
                <p className="mb-4" style={{ color: "var(--bg-coffee)" }}>
                  Stay connected with us for updates, promotions, and
                  behind-the-scenes content
                </p>
                <div className="d-flex justify-content-center gap-3">
                  <button
                    className="btn btn-outline-dark btn-lg rounded-circle"
                    style={{
                      width: "60px",
                      height: "60px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <i className="bi bi-facebook fs-4"></i>
                  </button>
                  <button
                    className="btn btn-outline-dark btn-lg rounded-circle"
                    style={{
                      width: "60px",
                      height: "60px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <i className="bi bi-twitter fs-4"></i>
                  </button>
                  <button
                    className="btn btn-outline-dark btn-lg rounded-circle"
                    style={{
                      width: "60px",
                      height: "60px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <i className="bi bi-instagram fs-4"></i>
                  </button>
                  <button
                    className="btn btn-outline-dark btn-lg rounded-circle"
                    style={{
                      width: "60px",
                      height: "60px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <i className="bi bi-youtube fs-4"></i>
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default Contact;
