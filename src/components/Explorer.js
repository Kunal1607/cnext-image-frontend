import React from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaSearch,
} from "react-icons/fa";            
import { FcFolder } from "react-icons/fc";           
import { FaPowerOff } from "react-icons/fa";

import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Row,
  Col,
  Form,
  InputGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";

function Explorer() {
  return (
    <>
      <Container fluid className="imgallery_container">
        <div className="imgallery_explorer_box">
          <Row className="imgallery_navbar">
            <Col md={1}>
              <div className="imgallery_backforw">
                <a href="#Back">
                  <FaArrowLeft />
                </a>{" "}
                <Link to='/explorer/images'><FaArrowRight /></Link>
              </div>
            </Col>
            <Col md={7}>
              <div className="imgallery_foldertitle">
                <h3>Images</h3>
                <span>(0)</span>
              </div>
            </Col>
            <Col md={3}>
              <div className="imgallery_searchbar">
                <InputGroup>
                  <Form.Control placeholder="Search" />
                  <InputGroup.Text>
                    <a href="#Search">
                      <FaSearch />
                    </a>
                  </InputGroup.Text>
                </InputGroup>
              </div>
            </Col>
            <Col md={1}>
                <div className="imgallery_logout">
                    <Link to='/'><FaPowerOff /></Link>
                </div>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col>
              <div className="imgallery_folders d-flex align-content-start flex-wrap">
                <div className="imgallery_singlefolder">
                  <Link to='/explorer/images'><div className="imgallery_folder_icon"><a href="#Dashboard_Images"><FcFolder /></a></div></Link>
                  <div className="imgallery_folder_name">Dashboard Images</div>
                </div>
                <div className="imgallery_singlefolder">
                  <Link to='/explorer/images'><div className="imgallery_folder_icon"><a href="#Dashboard_Images"><FcFolder /></a></div></Link>
                  <div className="imgallery_folder_name">Dashboard Images</div>
                </div>
                <div className="imgallery_singlefolder">
                  <Link to='/explorer/images'><div className="imgallery_folder_icon"><a href="#Dashboard_Images"><FcFolder /></a></div></Link>
                  <div className="imgallery_folder_name">Dashboard Images</div>
                </div>
                <div className="imgallery_singlefolder">
                  <Link to='/explorer/images'><div className="imgallery_folder_icon"><a href="#Dashboard_Images"><FcFolder /></a></div></Link>
                  <div className="imgallery_folder_name">Dashboard Images</div>
                </div>
                <div className="imgallery_singlefolder">
                  <Link to='/explorer/images'><div className="imgallery_folder_icon"><a href="#Dashboard_Images"><FcFolder /></a></div></Link>
                  <div className="imgallery_folder_name">Dashboard Images</div>
                </div>
                <div className="imgallery_singlefolder">
                  <Link to='/explorer/images'><div className="imgallery_folder_icon"><a href="#Dashboard_Images"><FcFolder /></a></div></Link>
                  <div className="imgallery_folder_name">Dashboard Images</div>
                </div>
                <div className="imgallery_singlefolder">
                  <Link to='/explorer/images'><div className="imgallery_folder_icon"><a href="#Dashboard_Images"><FcFolder /></a></div></Link>
                  <div className="imgallery_folder_name">Dashboard Images</div>
                </div>
                <div className="imgallery_singlefolder">
                  <Link to='/explorer/images'><div className="imgallery_folder_icon"><a href="#Dashboard_Images"><FcFolder /></a></div></Link>
                  <div className="imgallery_folder_name">Dashboard Images</div>
                </div>
                <div className="imgallery_singlefolder">
                  <Link to='/explorer/images'><div className="imgallery_folder_icon"><a href="#Dashboard_Images"><FcFolder /></a></div></Link>
                  <div className="imgallery_folder_name">Dashboard Images</div>
                </div>
                <div className="imgallery_singlefolder">
                  <Link to='/explorer/images'><div className="imgallery_folder_icon"><a href="#Dashboard_Images"><FcFolder /></a></div></Link>
                  <div className="imgallery_folder_name">Dashboard Images</div>
                </div>
                <div className="imgallery_singlefolder">
                  <Link to='/explorer/images'><div className="imgallery_folder_icon"><a href="#Dashboard_Images"><FcFolder /></a></div></Link>
                  <div className="imgallery_folder_name">Dashboard Images</div>
                </div>
                <div className="imgallery_singlefolder">
                  <Link to='/explorer/images'><div className="imgallery_folder_icon"><a href="#Dashboard_Images"><FcFolder /></a></div></Link>
                  <div className="imgallery_folder_name">Dashboard Images</div>
                </div>
                <div className="imgallery_singlefolder">
                  <Link to='/explorer/images'><div className="imgallery_folder_icon"><a href="#Dashboard_Images"><FcFolder /></a></div></Link>
                  <div className="imgallery_folder_name">Dashboard Images</div>
                </div>
                <div className="imgallery_singlefolder">
                  <Link to='/explorer/images'><div className="imgallery_folder_icon"><a href="#Dashboard_Images"><FcFolder /></a></div></Link>
                  <div className="imgallery_folder_name">Dashboard Images</div>
                </div>
                <div className="imgallery_singlefolder">
                  <Link to='/explorer/images'><div className="imgallery_folder_icon"><a href="#Dashboard_Images"><FcFolder /></a></div></Link>
                  <div className="imgallery_folder_name">Dashboard Images</div>
                </div>
                <div className="imgallery_singlefolder">
                  <Link to='/explorer/images'><div className="imgallery_folder_icon"><a href="#Dashboard_Images"><FcFolder /></a></div></Link>
                  <div className="imgallery_folder_name">Dashboard Images</div>
                </div>
                <div className="imgallery_singlefolder">
                  <Link to='/explorer/images'><div className="imgallery_folder_icon"><a href="#Dashboard_Images"><FcFolder /></a></div></Link>
                  <div className="imgallery_folder_name">Dashboard Images</div>
                </div>
                <div className="imgallery_singlefolder">
                  <Link to='/explorer/images'><div className="imgallery_folder_icon"><a href="#Dashboard_Images"><FcFolder /></a></div></Link>
                  <div className="imgallery_folder_name">Dashboard Images</div>
                </div>
                <div className="imgallery_singlefolder">
                  <Link to='/explorer/images'><div className="imgallery_folder_icon"><a href="#Dashboard_Images"><FcFolder /></a></div></Link>
                  <div className="imgallery_folder_name">Dashboard Images</div>
                </div>
                <div className="imgallery_singlefolder">
                  <Link to='/explorer/images'><div className="imgallery_folder_icon"><a href="#Dashboard_Images"><FcFolder /></a></div></Link>
                  <div className="imgallery_folder_name">Dashboard Images</div>
                </div>
                <div className="imgallery_singlefolder">
                  <Link to='/explorer/images'><div className="imgallery_folder_icon"><a href="#Dashboard_Images"><FcFolder /></a></div></Link>
                  <div className="imgallery_folder_name">Dashboard Images</div>
                </div>
                <div className="imgallery_singlefolder">
                  <Link to='/explorer/images'><div className="imgallery_folder_icon"><a href="#Dashboard_Images"><FcFolder /></a></div></Link>
                  <div className="imgallery_folder_name">Dashboard Images</div>
                </div>
                <div className="imgallery_singlefolder">
                  <Link to='/explorer/images'><div className="imgallery_folder_icon"><a href="#Dashboard_Images"><FcFolder /></a></div></Link>
                  <div className="imgallery_folder_name">Dashboard Images</div>
                </div>
                <div className="imgallery_singlefolder">
                  <Link to='/explorer/images'><div className="imgallery_folder_icon"><a href="#Dashboard_Images"><FcFolder /></a></div></Link>
                  <div className="imgallery_folder_name">Dashboard Images</div>
                </div>
                <div className="imgallery_singlefolder">
                  <Link to='/explorer/images'><div className="imgallery_folder_icon"><a href="#Dashboard_Images"><FcFolder /></a></div></Link>
                  <div className="imgallery_folder_name">Dashboard Images</div>
                </div>
                <div className="imgallery_singlefolder">
                  <Link to='/explorer/images'><div className="imgallery_folder_icon"><a href="#Dashboard_Images"><FcFolder /></a></div></Link>
                  <div className="imgallery_folder_name">Dashboard Images</div>
                </div>
                <div className="imgallery_singlefolder">
                  <Link to='/explorer/images'><div className="imgallery_folder_icon"><a href="#Dashboard_Images"><FcFolder /></a></div></Link>
                  <div className="imgallery_folder_name">Dashboard Images</div>
                </div>
                <div className="imgallery_singlefolder">
                  <Link to='/explorer/images'><div className="imgallery_folder_icon"><a href="#Dashboard_Images"><FcFolder /></a></div></Link>
                  <div className="imgallery_folder_name">Dashboard Images</div>
                </div>
                <div className="imgallery_singlefolder">
                  <Link to='/explorer/images'><div className="imgallery_folder_icon"><a href="#Dashboard_Images"><FcFolder /></a></div></Link>
                  <div className="imgallery_folder_name">Dashboard Images</div>
                </div>
                <div className="imgallery_singlefolder">
                  <Link to='/explorer/images'><div className="imgallery_folder_icon"><a href="#Dashboard_Images"><FcFolder /></a></div></Link>
                  <div className="imgallery_folder_name">Dashboard Images</div>
                </div>
                <div className="imgallery_singlefolder">
                  <Link to='/explorer/images'><div className="imgallery_folder_icon"><a href="#Dashboard_Images"><FcFolder /></a></div></Link>
                  <div className="imgallery_folder_name">Dashboard Images</div>
                </div>
                <div className="imgallery_singlefolder">
                  <Link to='/explorer/images'><div className="imgallery_folder_icon"><a href="#Dashboard_Images"><FcFolder /></a></div></Link>
                  <div className="imgallery_folder_name">Dashboard Images</div>
                </div>
                <div className="imgallery_singlefolder">
                  <Link to='/explorer/images'><div className="imgallery_folder_icon"><a href="#Dashboard_Images"><FcFolder /></a></div></Link>
                  <div className="imgallery_folder_name">Dashboard Images</div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}

export default Explorer;
