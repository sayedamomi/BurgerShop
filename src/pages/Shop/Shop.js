import { useState } from "react";
import {
  Badge,
  Button,
  Card,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Layout from "../../components/Layouts/Layout";
import { useCart } from "../../context/CartContext";
import "../../styles/BlogStyle.css";
import "../../styles/HomeStyle.css";
import "../../styles/ShopStyle.css";

// Import shop images
import AppStore from "../../assets/shop/appstore.png";
import EShop from "../../assets/shop/e-shop.png";
import GooglePlay from "../../assets/shop/googleplay.png";

// Import menu images for products
import Image1 from "../../assets/menu/burger-11.jpg";
import Image2 from "../../assets/menu/burger-12.jpg";
import Image3 from "../../assets/menu/burger-13.jpg";
import Image4 from "../../assets/menu/burger-14.jpg";
import Image5 from "../../assets/menu/burger-15.jpg";
import Image6 from "../../assets/menu/burger-16.jpg";
import Image7 from "../../assets/menu/burger-17.jpg";
import Image8 from "../../assets/menu/burger-18.jpg";

const Shop = () => {
  const {
    cart,
    addToCart: addItemToCart,
    removeFromCart,
    updateQuantity,
  } = useCart();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("name");

  // Enhanced product data for shop
  const products = [
    {
      id: "001",
      image: Image1,
      name: "Crispy Chicken Burger",
      description: "Juicy chicken breast with our signature crispy coating",
      category: "Burgers",
      price: 12.99,
      originalPrice: 15.99,
      rating: 5,
      inStock: true,
      isOnSale: true,
      tags: ["Popular", "Spicy"],
      deliveryTime: "25-30 min",
    },
    {
      id: "002",
      image: Image2,
      name: "Ultimate Bacon Burger",
      description: "Premium beef patty with crispy bacon and aged cheddar",
      category: "Burgers",
      price: 14.99,
      originalPrice: null,
      rating: 4.5,
      inStock: true,
      isOnSale: false,
      tags: ["Premium", "Bestseller"],
      deliveryTime: "30-35 min",
    },
    {
      id: "003",
      image: Image3,
      name: "Black Sheep Special",
      description: "Gourmet burger with avocado and house-made sauce",
      category: "Burgers",
      price: 13.5,
      originalPrice: null,
      rating: 4,
      inStock: true,
      isOnSale: false,
      tags: ["Gourmet", "New"],
      deliveryTime: "25-30 min",
    },
    {
      id: "004",
      image: Image4,
      name: "Garden Vegan Delight",
      description: "Plant-based patty with fresh vegetables",
      category: "Vegan",
      price: 11.99,
      originalPrice: 13.99,
      rating: 4.2,
      inStock: true,
      isOnSale: true,
      tags: ["Healthy", "Vegan"],
      deliveryTime: "20-25 min",
    },
    {
      id: "005",
      image: Image5,
      name: "Double Beast Burger",
      description: "Two juicy patties for the ultimate hunger satisfaction",
      category: "Burgers",
      price: 16.99,
      originalPrice: null,
      rating: 4.8,
      inStock: false,
      isOnSale: false,
      tags: ["Large", "Popular"],
      deliveryTime: "35-40 min",
    },
    {
      id: "006",
      image: Image6,
      name: "Turkey Club Special",
      description: "Lean turkey with fresh lettuce and tomato",
      category: "Healthy",
      price: 13.99,
      originalPrice: null,
      rating: 4.1,
      inStock: true,
      isOnSale: false,
      tags: ["Healthy", "Protein"],
      deliveryTime: "25-30 min",
    },
    {
      id: "007",
      image: Image7,
      name: "Smokey BBQ Burger",
      description: "Smoky BBQ sauce with crispy onion rings",
      category: "Burgers",
      price: 15.49,
      originalPrice: 17.99,
      rating: 4.6,
      inStock: true,
      isOnSale: true,
      tags: ["BBQ", "Smoky"],
      deliveryTime: "30-35 min",
    },
    {
      id: "008",
      image: Image8,
      name: "Classic American",
      description: "Traditional American-style burger",
      category: "Burgers",
      price: 10.99,
      originalPrice: null,
      rating: 4.3,
      inStock: true,
      isOnSale: false,
      tags: ["Classic", "Traditional"],
      deliveryTime: "20-25 min",
    },
  ];

  const categories = ["All", "Burgers", "Vegan", "Healthy"];

  // Filter and sort products
  const filteredProducts = products
    .filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        default:
          return a.name.localeCompare(b.name);
      }
    });

  // Helper function for adding to cart
  const addToCart = (product) => {
    addItemToCart(product);
  };

  // Calculate totals
  const subtotal = cart.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.08; // 8% tax
  const delivery = subtotal > 25 ? 0 : 4.99;
  const total = subtotal + tax + delivery;

  // Render rating stars
  const renderStars = (rating) => {
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
      stars.push(<i key={`empty-${i}`} className="bi bi-star text-muted"></i>);
    }

    return stars;
  };

  return (
    <Layout>
      {/* Shop Hero Section */}
      <section className="hero_section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={7} className="text-center">
              <div className="hero_text text-white">
                <h1 className="text-white">Online Shop</h1>
                <h2 className="text-white">Order & Delivery</h2>
                <p className="text-white fs-5">
                  Browse our full menu, customize your order, and get it
                  delivered hot and fresh to your doorstep in 30 minutes or
                  less!
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Shop Content */}
      <section className="menu_section">
        <Container>
          {/* Search and Filter Section */}
          <Row className="mb-4">
            <Col lg={12}>
              <Card className="blog-card p-4">
                <Row className="align-items-center">
                  <Col md={4}>
                    <InputGroup>
                      <Form.Control
                        type="text"
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                      <InputGroup.Text>
                        <i className="bi bi-search"></i>
                      </InputGroup.Text>
                    </InputGroup>
                  </Col>
                  <Col md={3}>
                    <Form.Select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </Form.Select>
                  </Col>
                  <Col md={3}>
                    <Form.Select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                    >
                      <option value="name">Sort by Name</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="rating">Highest Rated</option>
                    </Form.Select>
                  </Col>
                  <Col md={2}>
                    <div className="text-center">
                      <small className="text-muted">
                        {filteredProducts.length} items found
                      </small>
                    </div>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>

          <Row>
            {/* Products Column */}
            <Col lg={8}>
              <Row>
                {filteredProducts.map((product) => (
                  <Col lg={6} md={6} className="mb-4" key={product.id}>
                    <Card className="blog-card h-100 position-relative">
                      {/* Sale Badge */}
                      {product.isOnSale && (
                        <Badge
                          bg="danger"
                          className="position-absolute top-0 start-0 m-2"
                          style={{ zIndex: 10 }}
                        >
                          SALE
                        </Badge>
                      )}

                      {/* Stock Badge */}
                      {!product.inStock && (
                        <Badge
                          bg="secondary"
                          className="position-absolute top-0 end-0 m-2"
                          style={{ zIndex: 10 }}
                        >
                          Out of Stock
                        </Badge>
                      )}

                      <div className="overflow-hidden">
                        <Card.Img
                          variant="top"
                          src={product.image}
                          style={{
                            height: "200px",
                            objectFit: "cover",
                            filter: !product.inStock
                              ? "grayscale(100%)"
                              : "none",
                          }}
                        />
                      </div>

                      <Card.Body className="d-flex flex-column">
                        {/* Rating and Tags */}
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <div className="rating">
                            {renderStars(product.rating)}
                            <small className="text-muted ms-1">
                              ({product.rating})
                            </small>
                          </div>
                          <div className="wishlist">
                            <i
                              className="bi bi-heart text-muted"
                              style={{ cursor: "pointer" }}
                            ></i>
                          </div>
                        </div>

                        {/* Product Info */}
                        <Card.Title className="h5 mb-2">
                          {product.name}
                        </Card.Title>
                        <Card.Text className="text-muted small mb-2">
                          {product.description}
                        </Card.Text>

                        {/* Tags */}
                        <div className="mb-2">
                          {product.tags.map((tag, index) => (
                            <Badge
                              key={index}
                              bg="light"
                              text="dark"
                              className="me-1"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        {/* Delivery Time */}
                        <small className="text-muted mb-3">
                          <i className="bi bi-clock me-1"></i>
                          Delivery: {product.deliveryTime}
                        </small>

                        {/* Price and Actions */}
                        <div className="mt-auto">
                          <div className="d-flex justify-content-between align-items-center">
                            <div>
                              <h5 className="mb-0 text-warning fw-bold">
                                ${product.price}
                                {product.originalPrice && (
                                  <small className="text-muted text-decoration-line-through ms-2">
                                    ${product.originalPrice}
                                  </small>
                                )}
                              </h5>
                            </div>
                            <Button
                              variant="warning"
                              size="sm"
                              disabled={!product.inStock}
                              onClick={() => addToCart(product)}
                            >
                              <i className="bi bi-bag me-1"></i>
                              {product.inStock ? "Add to Cart" : "Out of Stock"}
                            </Button>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>

            {/* Cart Sidebar */}
            <Col lg={4}>
              <div className="sticky-top" style={{ top: "100px" }}>
                <Card className="blog-card">
                  <Card.Header className="bg-warning">
                    <h5 className="mb-0 text-dark">
                      <i className="bi bi-bag me-2"></i>
                      Your Order (
                      {cart.items.reduce((sum, item) => sum + item.quantity, 0)}
                      )
                    </h5>
                  </Card.Header>
                  <Card.Body style={{ maxHeight: "400px", overflowY: "auto" }}>
                    {cart.items.length === 0 ? (
                      <div className="text-center text-muted py-4">
                        <i className="bi bi-bag fs-1 d-block mb-2"></i>
                        <p>Your cart is empty</p>
                        <small>Add some delicious items!</small>
                      </div>
                    ) : (
                      <>
                        {cart.items.map((item) => (
                          <div
                            key={item.id}
                            className="cart-item border-bottom pb-2 mb-2"
                          >
                            <div className="d-flex justify-content-between align-items-start">
                              <div className="flex-grow-1">
                                <h6 className="mb-1">{item.name}</h6>
                                <small className="text-muted">
                                  ${item.price} each
                                </small>
                              </div>
                              <Button
                                variant="outline-danger"
                                size="sm"
                                onClick={() => removeFromCart(item.id)}
                              >
                                <i className="bi bi-trash"></i>
                              </Button>
                            </div>
                            <div className="d-flex justify-content-between align-items-center mt-2">
                              <div className="d-flex align-items-center">
                                <Button
                                  variant="outline-secondary"
                                  size="sm"
                                  onClick={() =>
                                    updateQuantity(item.id, item.quantity - 1)
                                  }
                                >
                                  -
                                </Button>
                                <span className="mx-2">{item.quantity}</span>
                                <Button
                                  variant="outline-secondary"
                                  size="sm"
                                  onClick={() =>
                                    updateQuantity(item.id, item.quantity + 1)
                                  }
                                >
                                  +
                                </Button>
                              </div>
                              <strong>
                                ${(item.price * item.quantity).toFixed(2)}
                              </strong>
                            </div>
                          </div>
                        ))}
                      </>
                    )}
                  </Card.Body>

                  {cart.items.length > 0 && (
                    <Card.Footer>
                      <div className="order-summary">
                        <div className="d-flex justify-content-between mb-1">
                          <span>Subtotal:</span>
                          <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="d-flex justify-content-between mb-1">
                          <span>Tax:</span>
                          <span>${tax.toFixed(2)}</span>
                        </div>
                        <div className="d-flex justify-content-between mb-2">
                          <span>Delivery:</span>
                          <span>
                            {delivery === 0
                              ? "FREE"
                              : `$${delivery.toFixed(2)}`}
                          </span>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between mb-3">
                          <strong>Total:</strong>
                          <strong className="text-warning">
                            ${total.toFixed(2)}
                          </strong>
                        </div>
                        {subtotal < 25 && (
                          <small className="text-muted d-block mb-2">
                            Add ${(25 - subtotal).toFixed(2)} more for free
                            delivery!
                          </small>
                        )}
                        <Link to="/contact" className="btn btn-warning w-100">
                          Proceed to Checkout
                        </Link>
                      </div>
                    </Card.Footer>
                  )}
                </Card>

                {/* App Download Section */}
                <Card className="blog-card mt-4">
                  <Card.Body className="text-center">
                    <img
                      src={EShop}
                      alt="Mobile App"
                      className="img-fluid mb-3"
                      style={{ maxWidth: "120px" }}
                    />
                    <h6>Download Our App</h6>
                    <p className="small text-muted mb-3">
                      Get exclusive deals and faster ordering
                    </p>
                    <div className="d-grid gap-2">
                      <button className="btn btn-outline-dark btn-sm">
                        <img
                          src={AppStore}
                          alt="App Store"
                          style={{ height: "20px" }}
                          className="me-2"
                        />
                        App Store
                      </button>
                      <button className="btn btn-outline-dark btn-sm">
                        <img
                          src={GooglePlay}
                          alt="Google Play"
                          style={{ height: "20px" }}
                          className="me-2"
                        />
                        Google Play
                      </button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default Shop;
