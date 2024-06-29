import React from "react";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import Tippy from "@tippyjs/react";
// import 'tippy.js/dist/tippy.css';
import { followCursor } from "tippy.js";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Product({ item }) {
  const [selectedItem, setSelectedItem] = useState(null);

  // Function to handle item click
  const handleItemClick = (item) => {
    if (!selectedItem) {
      setSelectedItem(item);
    }
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <>
      <div className="gridPorfolio">
        {item.map((image, index) => (
          <Tippy
            className="Tippycontent"
            followCursor={true}
            plugins={[followCursor]}
            content={image.category}
          >
            <div key={index}>
              <LazyLoadImage
                src={image.thumbnail}
                alt=""
                className="images"
                onClick={() => handleItemClick(image)}
              />
            </div>
          </Tippy>
        ))}
      </div>

      {/* images */}
      {selectedItem && (
        <Modal
          show={true}
          onHide={closeModal}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>{selectedItem.category}</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ maxHeight: 'calc(100vh - 200px)', overflowY: 'auto', gap: "6" }}>
            {selectedItem.category === "image" && (
              <img
                src={selectedItem.src}
                alt={selectedItem.title}
                style={{ width: "100%" }}
              />
            )}
            {selectedItem.category === "youtube" && (
              <iframe
                width="100%"
                height="500"
                src={selectedItem.src}
                title={selectedItem.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
            {selectedItem.category === "Details" && (
              <div>
                <img src={selectedItem.src} alt="" style={{ width: "100%" }} />
                <h2>{selectedItem.title}</h2>
                <p>{selectedItem.description}</p>
              </div>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}

export default Product;
