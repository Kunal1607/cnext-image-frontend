import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  FaArrowLeft,
  FaArrowRight,
  FaSearch,
  FaPowerOff,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import treeimg from "../assets/images/tree-736885__480.jpg";
import {
  Container,
  Row,
  Col,
  Form,
  InputGroup,
  Button,
  Modal,
  Toast,
} from "react-bootstrap";
import { Link } from "react-router-dom";

function ImgExplorer() {
  const [image, setImage] = useState([]);
  const [show, setShow] = useState(false);
  const [toast, setToast] = useState(false);
  const handleToast = () => setToast(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [fildata, setFildata] = useState([]);
  const fetchAPI = async () => {
    const response = await axios.get(
      "https://63e5f0a583c0e85a86897d20.mockapi.io/images"
    );
    const data = await response.data;
    setImage(data);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  const handleFilter = (e) => {
    const searchWord = e.target.value;
    const newFilter = image.filter((value) => {
      return value.name?.toLowerCase().includes(searchWord?.toLowerCase());
    });
    setFildata(newFilter);
  };

  return (
    <>
      <Container fluid className="imgallery_container">
        <div className="imgallery_explorer_box">
          <Row className="imgallery_navbar">
            <Col md={1}>
              <div className="imgallery_backforw">
                <Link to="/explorer">
                  <FaArrowLeft />
                </Link>
                <a href="#Forward">
                  <FaArrowRight />
                </a>{" "}
              </div>
            </Col>
            <Col md={7}>
              <div className="imgallery_foldertitle">
                <h3>Dashboard Images</h3>
                <span>({image.length})</span>
              </div>
            </Col>
            <Col md={3}>
              <div className="imgallery_searchbar">
                <InputGroup>
                  <Form.Control placeholder="Search" onChange={handleFilter} />
                  <InputGroup.Text>
                    <FaSearch />
                  </InputGroup.Text>
                </InputGroup>
              </div>
            </Col>
            <Col md={1}>
              <div className="imgallery_logout">
                <Link to="/">
                  <FaPowerOff />
                </Link>
              </div>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col>
              <div className="imgallery_folders d-flex align-content-start flex-wrap">
                {fildata.length > 0 ? (
                  <>
                    {fildata.map((value, i) => {
                      return (
                        <div className="imgallery_singlefolder" key={i}>
                          <div className="imgallery_folder_icon">
                            <a href="#Dashboard_Images" onClick={handleShow}>
                              <img src={value.image} alt="images" />
                            </a>
                          </div>
                          <div className="imgallery_folder_name">
                            {value.name}
                          </div>
                          <div className="imgallery_imgbutton">
                            <Button onClick={handleToast}>Download</Button>
                          </div>
                        </div>
                      );
                    })}
                  </>
                ) : (
                  <>
                    {image.map((item, i) => (
                      <>
                        <div className="imgallery_singlefolder" key={i}>
                          <div className="imgallery_folder_icon">
                            <a href="#Dashboard_Images" onClick={handleShow}>
                              <img src={item.image} alt="images" />
                            </a>
                          </div>
                          <div className="imgallery_folder_name">
                            {item.name}
                          </div>
                          <div className="imgallery_imgbutton">
                            <Button onClick={handleToast}>Download</Button>
                          </div>
                        </div>
                      </>
                    ))}
                  </>
                )}
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <Modal show={show} onHide={handleClose} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>ABC.jpg</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <div className="imgallery_modal_img">
                <img src={treeimg} alt="treeimg" />
              </div>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Toast
        show={toast}
        className="toast"
        bg="light"
        onClose={() => setToast(false)}
        delay={3000}
        autohide
      >
        <Toast.Header className="toast_header" closeButton="true">
          ABC.jpg
        </Toast.Header>
        <Toast.Body>Your file has been downloaded.</Toast.Body>
      </Toast>
    </>
  );
}

export default ImgExplorer;
