import { Badge, Card, Col, Container, Row } from "react-bootstrap";
import Layout from "../../components/Layouts/Layout";
import "../../styles/BlogStyle.css";
import "../../styles/HomeStyle.css";

const Blog = () => {
  // Mock blog data
  const blogPosts = [
    {
      id: 1,
      title: "The Perfect Burger: A Guide to Creating Culinary Masterpieces",
      excerpt:
        "Discover the secrets behind crafting the perfect burger with fresh ingredients and time-tested techniques that will elevate your dining experience.",
      author: "Chef Marcus Rodriguez",
      date: "October 20, 2025",
      readTime: "5 min read",
      category: "Recipes",
      image: require("../../assets/blog/reviews.jpg"),
      content:
        "Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus...",
    },
    {
      id: 2,
      title: "From Farm to Table: The Journey of Fresh Ingredients",
      excerpt:
        "Follow the incredible journey of how we source our ingredients directly from local farms to ensure the highest quality and freshness in every meal.",
      author: "Sarah Johnson",
      date: "October 18, 2025",
      readTime: "7 min read",
      category: "Sustainability",
      image: require("../../assets/hero/hero-1.jpg"),
      content:
        "Aliquam a augue suscipit, luctus neque purus ipsum neque undo dolor primis libero tempus, blandit a cursus varius luctus neque magna...",
    },
    {
      id: 3,
      title: "5 Healthy Alternatives That Don't Compromise on Taste",
      excerpt:
        "Eating healthy doesn't mean sacrificing flavor. Explore our top 5 nutritious alternatives that will satisfy your cravings while keeping you on track.",
      author: "Dr. Emily Chen",
      date: "October 15, 2025",
      readTime: "4 min read",
      category: "Health",
      image: require("../../assets/menu/ads-1.jpg"),
      content:
        "Fringilla risus, luctus mauris orci auctor purus euismod pretium purus pretium ligula rutrum tempor sapien...",
    },
    {
      id: 4,
      title: "Behind the Scenes: A Day in Our Kitchen",
      excerpt:
        "Take an exclusive look behind the scenes and discover what makes our kitchen the heart of our operation, from prep to plate.",
      author: "Chef Antonio Silva",
      date: "October 12, 2025",
      readTime: "6 min read",
      category: "Behind the Scenes",
      image: require("../../assets/about/about-1.jpg"),
      content:
        "Etiam sapien sem at sagittis congue augue massa varius sodales sapien undo tempus dolor egestas magna suscipit magna tempus aliquet...",
    },
    {
      id: 5,
      title: "Customer Favorites: Top 10 Most Ordered Items",
      excerpt:
        "Based on thousands of orders, discover which dishes have captured the hearts and taste buds of our valued customers.",
      author: "Marketing Team",
      date: "October 10, 2025",
      readTime: "3 min read",
      category: "Popular",
      image: require("../../assets/menu/ads-2.jpg"),
      content:
        "Quaerat neque purus ipsum neque undo dolor primis libero tempus, blandit varius sodales sapien undo pretium...",
    },
    {
      id: 6,
      title: "The Art of Food Photography: Making Every Dish Instagram-Ready",
      excerpt:
        "Learn the techniques our photographers use to make every dish look absolutely irresistible in photos.",
      author: "Alex Rivera",
      date: "October 8, 2025",
      readTime: "5 min read",
      category: "Photography",
      image: require("../../assets/footer/banner-1.jpg"),
      content:
        "Nemo ipsam egestas volute turpis dolores ut aliquam quaerat sodales sapien undo pretium a purus mauris...",
    },
  ];

  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);

  const categories = [
    "All",
    "Recipes",
    "Health",
    "Sustainability",
    "Behind the Scenes",
    "Popular",
    "Photography",
  ];

  return (
    <Layout>
      {/* Blog Hero Section */}
      <section className="hero_section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={7} className="text-center">
              <div className="hero_text text-white">
                <h1 className="text-white">Blog</h1>
                <h2 className="text-white">Welcome to Momies kitchen</h2>
                <p className="text-white fs-5">
                  Discover the latest culinary trends, behind-the-scenes
                  stories, and delicious recipes from our kitchen to yours.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Blog Content Section */}
      <section className="menu_section">
        <Container>
          {/* Featured Post */}
          <Row className="mb-5">
            <Col lg={12}>
              <div className="text-center mb-4">
                <h2 className="fs-1 mb-0">Featured Story</h2>
                <p className="para">Don't miss our latest featured article</p>
              </div>
            </Col>
          </Row>

          <Row className="mb-5">
            <Col lg={6}>
              <Card className="border-0 h-100">
                <div className="overflow-hidden">
                  <Card.Img
                    variant="top"
                    src={featuredPost.image}
                    style={{ height: "300px", objectFit: "cover" }}
                  />
                </div>
              </Card>
            </Col>
            <Col lg={6} className="d-flex align-items-center">
              <div>
                <Badge bg="warning" className="mb-2 text-dark fs-6">
                  {featuredPost.category}
                </Badge>
                <h3 className="card-title mb-3">{featuredPost.title}</h3>
                <p className="card-text text-muted mb-3 fs-5">
                  {featuredPost.excerpt}
                </p>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <small className="text-muted">By {featuredPost.author}</small>
                  <small className="text-muted">{featuredPost.date}</small>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <small className="text-muted">{featuredPost.readTime}</small>
                  <button className="btn btn-outline-success">Read More</button>
                </div>
              </div>
            </Col>
          </Row>

          {/* Categories Filter */}
          <Row className="mb-4">
            <Col lg={12}>
              <div className="text-center blog-category-filter">
                <h3 className="mb-3">Browse by Category</h3>
                <div className="d-flex flex-wrap justify-content-center gap-2">
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      className={`btn ${
                        index === 0 ? "btn-warning" : "btn-outline-warning"
                      } me-2 mb-2`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </Col>
          </Row>

          {/* Blog Posts Grid */}
          <Row className="mb-5">
            <Col lg={12}>
              <div className="text-center mb-4">
                <h2 className="fs-1 mb-0">Latest Posts</h2>
                <p className="para">Stay updated with our newest content</p>
              </div>
            </Col>
          </Row>

          <Row>
            {regularPosts.map((post) => (
              <Col lg={4} md={6} sm={6} key={post.id} className="mb-4">
                <Card className="blog-card overflow-hidden h-100 shadow-sm">
                  <div className="overflow-hidden">
                    <Card.Img
                      variant="top"
                      src={post.image}
                      style={{
                        height: "200px",
                        objectFit: "cover",
                        transition: "transform 0.3s ease",
                      }}
                    />
                  </div>
                  <Card.Body className="d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <Badge className="blog-badge">{post.category}</Badge>
                      <small className="blog-metadata">{post.readTime}</small>
                    </div>
                    <Card.Title className="mb-2 fs-5">{post.title}</Card.Title>
                    <Card.Text className="blog-excerpt flex-grow-1">
                      {post.excerpt}
                    </Card.Text>
                    <div className="mt-auto">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <small className="blog-metadata">
                          By {post.author}
                        </small>
                        <small className="blog-metadata">{post.date}</small>
                      </div>
                      <div className="add_to_card text-center">
                        <button className="read-more-btn">
                          Read Full Article
                        </button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          {/* Newsletter Subscription */}
          <Row className="mt-5">
            <Col lg={8} className="mx-auto">
              <div className="newsletter-section">
                <h3 className="mb-3">Subscribe to Our Newsletter</h3>
                <p className="mb-4" style={{ color: "var(--bg-coffee)" }}>
                  Get the latest recipes, food tips, and behind-the-scenes
                  stories delivered straight to your inbox.
                </p>
                <Row className="justify-content-center">
                  <Col md={8}>
                    <div className="input-group">
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        placeholder="Enter your email address"
                      />
                      <button className="btn btn-lg px-4" type="button">
                        Subscribe
                      </button>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>

          {/* Load More Button */}
          <Row className="mt-4">
            <Col lg={12} className="load-more-section">
              <button className="load-more-btn">Load More Posts</button>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default Blog;
