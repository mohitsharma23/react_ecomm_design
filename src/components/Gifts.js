import React from "react";
import { Container, Row, Col, Button, Toast } from "react-bootstrap";
import "./CompCommon.css";
import Gift from "../containers/Gift";
import p1 from "../images/p1.jpg";
import p2 from "../images/p2.jpg";
import p4 from "../images/p4.jpg";
import p5 from "../images/p5.jpg";
import ThumbNail from "../containers/ThumbNail";

class Gifts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gifts:
        this.props.gifts !== null
          ? this.props.gifts
          : [
              {
                image: p1,
                name: "Emoji Mug - Heart Emoji",
                price: 899,
                count: 0,
              },
              {
                image: p2,
                name: "Emoji Mug - Cool Emoji",
                price: 899,
                count: 0,
              },
              {
                image: p1,
                name: "Emoji Mug - LOL Emoji",
                price: 899,
                count: 0,
              },
              {
                image: p4,
                name: "I Love You Lamp",
                price: 1299,
                count: 0,
              },
              {
                image: p5,
                name: "Avengers Lamp",
                price: 1999,
                count: 0,
              },
            ],
      total: this.props.total !== 0 ? this.props.total : 0,
      selectValue: "-1",
      itemAdded: "",
    };
  }

  filterItems = (filter) => {
    let giftsCopy = [...this.state.gifts];
    if (filter === "az") {
      giftsCopy = giftsCopy.sort(function (a, b) {
        let textA = a.name.toUpperCase();
        let textB = b.name.toUpperCase();
        return textA < textB ? -1 : textA > textB ? 1 : 0;
      });
    } else if (filter === "za") {
      giftsCopy = giftsCopy.sort(function (a, b) {
        let textA = a.name.toUpperCase();
        let textB = b.name.toUpperCase();
        return textA < textB ? 1 : textA > textB ? -1 : 0;
      });
    } else if (filter === "lh") {
      giftsCopy.sort((a, b) => a.price - b.price);
    } else if (filter === "hl") {
      giftsCopy.sort((a, b) => b.price - a.price);
    }

    this.setState({ gifts: giftsCopy });
  };

  calculateTotal = () => {
    let total = 0;
    this.state.gifts.forEach((gift) => {
      if (gift.count > 0) {
        let temp = gift.price * gift.count;
        total += temp;
      }
    });
    this.setState(
      {
        total: total,
      },
      () => {
        this.props.onSaveGifts(this.state.gifts, total);
      }
    );
  };

  addToBag = (gift) => {
    var giftsCopy = [...this.state.gifts];
    const index = giftsCopy.findIndex((item) => item.name === gift.name);
    if (gift.count > giftsCopy[index].count) {
      this.setState({
        itemAdded: gift.name,
      });
    }
    giftsCopy[index].count = gift.count;

    this.setState({ gifts: giftsCopy }, () => {
      this.calculateTotal();
    });
  };

  saveInBag = (gifts, total) => {
    this.props.onSaveGifts(gifts, total);
    this.props.history.push("/personalise");
  };

  handleChange = (e) => {
    this.setState({ selectValue: e.target.value });
    this.filterItems(e.target.value);
  };

  closeToast = () => {
    this.setState({
      itemAdded: "",
    });
  };

  render() {
    return (
      <div>
        <Container className="header">
          <h4>CHOOSE YOUR GIFTS</h4>
          <span>
            We've curated the best products in one place. Select from the items
            below and fill up your box!
          </span>
        </Container>
        <Container>
          <Container>
            <Row style={{ paddingLeft: "20px", paddingBottom: "10px" }}>
              <div style={{ width: "100%" }}>Fiters</div>
              <select
                value={this.state.selectValue}
                onChange={this.handleChange}
              >
                <option value="-1">Filter</option>
                <option value="az">A-Z</option>
                <option value="za">Z-A</option>
                <option value="hl">Price - High to Low</option>
                <option value="lh">Price - Low to High</option>
              </select>
            </Row>
          </Container>
          <Row>
            {this.state.gifts.map((item, i) => (
              <Col md={4} key={i}>
                <Gift gift={item} addToBag={this.addToBag} />
              </Col>
            ))}
          </Row>
        </Container>
        <Container className="toastStyle">
          <Toast
            onClose={this.closeToast}
            show={this.state.itemAdded !== "" ? true : false}
            delay={2000}
            autohide
          >
            <Toast.Body>Item Added {this.state.itemAdded}</Toast.Body>
          </Toast>
        </Container>
        {this.state.total > 0 && (
          <Container fluid className="footer">
            <Container>
              <Row>
                <Col lg={10}>
                  {this.state.gifts.map((gift, i) => {
                    if (gift.count > 0) {
                      return <ThumbNail image={gift.image} />;
                    }
                  })}
                </Col>
                <Col lg={2}>
                  <Button
                    varinat="primary"
                    block
                    onClick={() =>
                      this.saveInBag(this.state.gifts, this.state.total)
                    }
                  >
                    Add {this.state.total}
                  </Button>
                </Col>
              </Row>
            </Container>
          </Container>
        )}
      </div>
    );
  }
}

export default Gifts;
