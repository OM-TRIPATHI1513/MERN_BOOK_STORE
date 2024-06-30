import React from 'react'
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import './about.css';

const Blog = () => {
  return (

    <div className="blog-page">
      <Container>
        <Row>
          <Col md={8}>
            <Card>
              <Card.Img variant="top" src="https://picsum.photos/200/300" />
              <Card.Body>
                <Card.Title>Bookworm's Paradise: A Guide to the Best Bookstores in Churk Ghurma</Card.Title>
                <Card.Text>
                  Churk Ghurma is a haven for book lovers, with a plethora of bookstores catering to every taste and genre. Whether you're a voracious reader in search of the latest releases or a casual browser seeking hidden gems, you're sure to find something to your liking in this vibrant city.
                </Card.Text>
                <a href="#" className="btn btn-primary">Read More</a>
              </Card.Body>
            </Card>

            <Card>
              <Card.Img variant="top" src="https://picsum.photos/200/301" />
              <Card.Body>
                <Card.Title>The Joy of Reading: Rediscovering the Magic of Books</Card.Title>
                <Card.Text>
                  In a world dominated by digital distractions, the simple act of reading has become a cherished pastime. Escaping into the pages of a good book offers a welcome respite from the daily grind, allowing us to explore new worlds, connect with diverse characters, and expand our horizons.
                </Card.Text>
                <a href="#" className="btn btn-primary">Read More</a>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>What's New in Literature: Upcoming Book Releases</Card.Title>
                <Card.Text>
                  Stay up-to-date on the latest literary trends with our curated list of upcoming book releases. From captivating fiction to thought-provoking non-fiction, there's something for everyone to discover.
                </Card.Text>
                <a href="#" className="btn btn-primary">Read More</a>
              </Card.Body>
            </Card>

            <Card>
              <Card.Body>
                <Card.Title>Book Club Corner: Share Your Reading Journey</Card.Title>
                <Card.Text>
                  Join our lively book club discussions and share your thoughts on the latest reads. Connect with fellow bookworms, exchange ideas, and discover new perspectives on your favorite books.
                </Card.Text>
                <a href="#" className="btn btn-primary">Read More</a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Blog
