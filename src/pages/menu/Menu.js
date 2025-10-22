import { useState } from "react";
import { Badge, Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Layout from "../../components/Layouts/Layout";
import { useCart } from "../../context/CartContext";
import "../../styles/BlogStyle.css";
import "../../styles/HomeStyle.css";
import "../../styles/MenuStyle.css";

// Import menu images
import Image1 from "../../assets/menu/burger-11.jpg";
import Image2 from "../../assets/menu/burger-12.jpg";
import Image3 from "../../assets/menu/burger-13.jpg";
import Image4 from "../../assets/menu/burger-14.jpg";
import Image5 from "../../assets/menu/burger-15.jpg";
import Image6 from "../../assets/menu/burger-16.jpg";
import Image7 from "../../assets/menu/burger-17.jpg";
import Image8 from "../../assets/menu/burger-18.jpg";

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { cart, addToCart } = useCart();

  // Enhanced menu data with categories
  const menuItems = [
    {
      id: "001",
      image: Image1,
      title: "Crispy Chicken Burger",
      description: "Chicken breast, chilli sauce, tomatoes, pickles, coleslaw",
      category: "Chicken",
      price: 12.99,
      rating: 5,
      isPopular: true,
      isNew: false,
      spiceLevel: 2,
      calories: 520,
      ingredients: [
        "Chicken breast",
        "Lettuce",
        "Tomato",
        "Pickles",
        "Spicy mayo",
      ],
    },
    {
      id: "002",
      image: Image2,
      title: "Ultimate Bacon Burger",
      description: "House patty, cheddar cheese, bacon, onion, mustard",
      category: "Beef",
      price: 14.99,
      rating: 4.5,
      isPopular: true,
      isNew: false,
      spiceLevel: 1,
      calories: 680,
      ingredients: [
        "Beef patty",
        "Bacon",
        "Cheddar cheese",
        "Onion",
        "Mustard",
      ],
    },
    {
      id: "003",
      image: Image3,
      title: "Black Sheep Special",
      description:
        "American cheese, tomato relish, avocado, lettuce, red onion",
      category: "Beef",
      price: 13.5,
      rating: 4,
      isPopular: false,
      isNew: true,
      spiceLevel: 1,
      calories: 590,
      ingredients: [
        "Beef patty",
        "American cheese",
        "Avocado",
        "Lettuce",
        "Tomato relish",
      ],
    },
    {
      id: "004",
      image: Image4,
      title: "Garden Vegan Burger",
      description: "Plant-based patty, vegan cheese, onion, lettuce, tomato",
      category: "Vegan",
      price: 11.99,
      rating: 4.2,
      isPopular: false,
      isNew: true,
      spiceLevel: 0,
      calories: 420,
      ingredients: [
        "Plant-based patty",
        "Vegan cheese",
        "Lettuce",
        "Tomato",
        "Onion",
      ],
    },
    {
      id: "005",
      image: Image5,
      title: "Double Beast Burger",
      description: "2 beef patties, cheddar cheese, mustard, pickles, tomatoes",
      category: "Beef",
      price: 16.99,
      rating: 4.8,
      isPopular: true,
      isNew: false,
      spiceLevel: 1,
      calories: 820,
      ingredients: [
        "Double beef patty",
        "Cheddar cheese",
        "Pickles",
        "Tomato",
        "Mustard",
      ],
    },
    {
      id: "006",
      image: Image6,
      title: "Turkey Club Burger",
      description:
        "Turkey patty, swiss cheese, onion, lettuce, tomatoes, pickles",
      category: "Turkey",
      price: 13.99,
      rating: 4.1,
      isPopular: false,
      isNew: false,
      spiceLevel: 0,
      calories: 480,
      ingredients: [
        "Turkey patty",
        "Swiss cheese",
        "Lettuce",
        "Tomato",
        "Pickles",
      ],
    },
    {
      id: "007",
      image: Image7,
      title: "Smokey BBQ Burger",
      description: "Beef patty, BBQ sauce, onion rings, lettuce, tomato",
      category: "Beef",
      price: 15.49,
      rating: 4.6,
      isPopular: true,
      isNew: false,
      spiceLevel: 2,
      calories: 720,
      ingredients: [
        "Beef patty",
        "BBQ sauce",
        "Onion rings",
        "Lettuce",
        "Tomato",
      ],
    },
    {
      id: "008",
      image: Image8,
      title: "Classic American",
      description:
        "Beef patty, american cheese, ketchup, mustard, pickles, onion",
      category: "Beef",
      price: 10.99,
      rating: 4.3,
      isPopular: false,
      isNew: false,
      spiceLevel: 0,
      calories: 550,
      ingredients: [
        "Beef patty",
        "American cheese",
        "Ketchup",
        "Mustard",
        "Pickles",
      ],
    },
  ];

  const categories = ["All", "Beef", "Chicken", "Vegan", "Turkey"];

  // Filter items based on selected category
  const filteredItems =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  // Rating stars component
  const renderRatingStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={i} className="bi bi-star-fill text-warning"></i>);
    }

    if (hasHalfStar) {
      stars.push(<i key="half" className="bi bi-star-half text-warning"></i>);
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <i key={`empty-${i}`} className="bi bi-star text-warning"></i>
      );
    }

    return stars;
  };

  // Spice level indicator
  const renderSpiceLevel = (level) => {
    const peppers = [];
    for (let i = 0; i < 3; i++) {
      peppers.push(
        <span key={i} className={i < level ? "text-danger" : "text-muted"}>
          🌶️
        </span>
      );
    }
    return peppers;
  };

  return (
    <Layout>
      {/* Menu Hero Section */}
      <section className="hero_section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={7} className="text-center">
              <div className="hero_text text-white">
                <h1 className="text-white">Our Menu</h1>
                <h2 className="text-white">Delicious Burgers</h2>
                <p className="text-white fs-5">
                  Discover our mouth-watering selection of gourmet burgers,
                  crafted with the finest ingredients and grilled to perfection.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Menu Content Section */}
      <section className="menu_section">
        <Container>
          {/* Category Filter */}
          <Row className="mb-5">
            <Col lg={12}>
              <div className="text-center menu-category-filter">
                <h2 className="fs-1 mb-3">Browse Our Menu</h2>
                <p className="para mb-4">
                  Filter by category to find your perfect burger
                </p>
                <div className="d-flex flex-wrap justify-content-center gap-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={
                        selectedCategory === category
                          ? "warning"
                          : "outline-warning"
                      }
                      className="me-2 mb-2 px-4"
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
            </Col>
          </Row>

          {/* Menu Items Grid */}
          <Row>
            {filteredItems.map((item) => (
              <Col lg={3} md={6} sm={6} key={item.id} className="mb-4">
                <Card className="menu-card h-100 overflow-hidden position-relative">
                  {/* Badges */}
                  <div
                    className="position-absolute top-0 start-0 m-2"
                    style={{ zIndex: 10 }}
                  >
                    {item.isNew && (
                      <Badge bg="success" className="me-1">
                        New
                      </Badge>
                    )}
                    {item.isPopular && <Badge bg="danger">Popular</Badge>}
                  </div>

                  {/* Image */}
                  <div className="overflow-hidden">
                    <Card.Img
                      variant="top"
                      src={item.image}
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                  </div>

                  <Card.Body className="d-flex flex-column">
                    {/* Rating and Wishlist */}
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <div className="item_rating">
                        {renderRatingStars(item.rating)}
                        <small className="text-muted ms-1">
                          ({item.rating})
                        </small>
                      </div>
                      <div className="wishlist">
                        <i
                          className="bi bi-heart text-muted"
                          style={{ cursor: "pointer" }}
                        ></i>
                      </div>
                    </div>

                    {/* Title and Category */}
                    <Card.Title className="h5 mb-2">{item.title}</Card.Title>
                    <small className="text-muted mb-2">
                      <i className="bi bi-tag me-1"></i>
                      {item.category}
                    </small>

                    {/* Description */}
                    <Card.Text className="text-muted small flex-grow-1">
                      {item.description}
                    </Card.Text>

                    {/* Additional Info */}
                    <div className="mb-3">
                      <div className="d-flex justify-content-between align-items-center mb-1">
                        <small className="text-muted">
                          <i className="bi bi-fire me-1"></i>
                          {item.calories} cal
                        </small>
                        <div>{renderSpiceLevel(item.spiceLevel)}</div>
                      </div>
                    </div>

                    {/* Price and Add to Cart */}
                    <div className="d-flex justify-content-between align-items-center mt-auto">
                      <div className="menu_price">
                        <h5 className="mb-0 text-warning fw-bold">
                          ${item.price}
                        </h5>
                      </div>
                      <Button
                        variant="warning"
                        size="sm"
                        className="menu-add-to-cart"
                        onClick={() => addToCart(item)}
                      >
                        <i className="bi bi-bag me-2"></i>
                        Add to Cart
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          {/* Special Offers Section */}
          <Row className="mt-5">
            <Col lg={12}>
              <div className="text-center mb-4">
                <h2 className="fs-1 mb-0">Special Offers</h2>
                <p className="para">Don't miss out on these amazing deals</p>
              </div>
            </Col>
          </Row>

          <Row>
            <Col sm={6} lg={6} className="mb-4">
              <div className="menu-offer-card">
                <h4 className="mb-2">Free Delivery</h4>
                <h5 className="mb-3">On Orders Over $25</h5>
                <Link
                  to="/contact"
                  className="btn btn-warning px-4 rounded-pill"
                >
                  Order Now
                </Link>
              </div>
            </Col>
            <Col sm={6} lg={6} className="mb-4">
              <div className="menu-offer-card">
                <h4 className="mb-2">Happy Hour</h4>
                <h5 className="mb-3">20% Off 3-6 PM</h5>
                <Link
                  to="/contact"
                  className="btn btn-warning px-4 rounded-pill"
                >
                  Learn More
                </Link>
              </div>
            </Col>
          </Row>

          {/* Cart Summary */}
          {cart.items.length > 0 && (
            <Row className="mt-5">
              <Col lg={8} className="mx-auto">
                <Card className="menu-cart-summary">
                  <Card.Body>
                    <h4 className="mb-3">
                      <i className="bi bi-bag me-2"></i>
                      Cart Summary (
                      {cart.items.reduce(
                        (sum, item) => sum + item.quantity,
                        0
                      )}{" "}
                      items)
                    </h4>
                    <div className="mb-3">
                      {cart.items.map((item) => (
                        <div
                          key={item.id}
                          className="d-flex justify-content-between align-items-center mb-2"
                        >
                          <div>
                            <strong>{item.title}</strong>
                            <small className="text-muted d-block">
                              Qty: {item.quantity}
                            </small>
                          </div>
                          <div className="text-warning fw-bold">
                            ${(item.price * item.quantity).toFixed(2)}
                          </div>
                        </div>
                      ))}
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between align-items-center">
                      <h5>
                        Total: $
                        {cart.items
                          .reduce(
                            (sum, item) => sum + item.price * item.quantity,
                            0
                          )
                          .toFixed(2)}
                      </h5>
                      <Link to="/contact" className="btn btn-warning btn-lg">
                        Proceed to Checkout
                      </Link>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          )}
        </Container>
      </section>
    </Layout>
  );
};

export default Menu;
