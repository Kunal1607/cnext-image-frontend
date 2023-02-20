import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaArrowLeft, FaArrowRight, FaSearch } from "react-icons/fa";
import { FcFolder } from "react-icons/fc";
import { FaPowerOff } from "react-icons/fa";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

function Explorer() {
  const [folder, setFolder] = useState([]);
  const [fildata, setFildata] = useState([]);

  const fetchAPI = async () => {
    const response = await axios.get(
      "https://63e5f0a583c0e85a86897d20.mockapi.io/folders"
    );
    const data = await response.data;
    setFolder(data);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  const handleFilter = (e) => {
    const searchWord = e.target.value;
    const newFilter = folder.filter((value) => {
      return value.folderName?.toLowerCase().includes(searchWord?.toLowerCase());
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
                <a href="#Back">
                  <FaArrowLeft />
                </a>{" "}
                <Link to="/explorer/images">
                  <FaArrowRight />
                </Link>
              </div>
            </Col>
            <Col md={7}>
              <div className="imgallery_foldertitle">
                <h3>Images</h3>
                <span>({folder.length})</span>
              </div>
            </Col>
            <Col md={3}>
              <div className="imgallery_searchbar">
                <InputGroup>
                  <Form.Control placeholder="Search" onChange={handleFilter} />
                  <InputGroup.Text><FaSearch /></InputGroup.Text>
                </InputGroup>
              </div>
            </Col>
            <Col md={1}>
              <div className="imgallery_logout">
                <Link to="/"><FaPowerOff /></Link>
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
                          <Link to="/explorer/images">
                            <div className="imgallery_folder_icon">
                              <FcFolder />
                            </div>
                          </Link>
                          <div className="imgallery_folder_name">
                            {value.folderName}
                          </div>
                        </div>
                      );
                    })}
                  </>
                ) : (
                  <>
                    {folder.map((item, i) => (
                      <>
                        <div className="imgallery_singlefolder" key={i}>
                          <Link to="/explorer/images">
                            <div className="imgallery_folder_icon">
                              <FcFolder />
                            </div>
                          </Link>
                          <div className="imgallery_folder_name">
                            {item.folderName}
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
    </>
  );
}

export default Explorer;
