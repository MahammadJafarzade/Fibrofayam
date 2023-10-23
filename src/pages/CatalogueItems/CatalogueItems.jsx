import React, { useState } from "react";
import whiteBlack from "../../Media/1 (7).jpeg";
import "./CatalogueItems.css";
import stone from "../../Media/Screenshot_6.png";
import { Modal, ModalContent } from "./Modal";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import camen from '../../Media/1665104704_1-amiel-club-p-resepshn-iz-kamnya-dizain-instagram-1.jpg'
import kitchen from '../../Media/kitchen.jpg'
const catalogueItems = [
  {
    image: whiteBlack,
    title: "Item 1",
    description: "Description for item 1",
  },
  {
    image: stone,
    title: "Item 1",
    description: "Description for item 1",
  },
  {
    image: camen,
    title: "Item 1",
    description: "Description for item 1",
  },
  {
    image: whiteBlack,
    title: "Item 1",
    description: "Description for item 1",
  },
  {
    image: kitchen,
    title: "Item 2",
    description: "Description for item 2",
  },
  // Add more items as needed
];

const CatalogueItem = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  const showModal = (itemIndex) => {
    setCurrentItemIndex(itemIndex);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const nextItem = (e) => {
    setCurrentItemIndex((prevIndex) => (prevIndex + 1) % catalogueItems.length);
    e.preventDefault();
  };

  const prevItem = (e) => {
    setCurrentItemIndex((prevIndex) =>
      prevIndex === 0 ? catalogueItems.length - 1 : prevIndex - 1
    );
    e.preventDefault();
  };

  return (
    <section id="catalogueItems">
      <div className="container">
        <div className="row">
          <div className="items-header">
            <h2>Məhsullarimiz</h2>
          </div>
          <div className="items">
            {catalogueItems.map((item, index) => (
              <div
                key={index}
                className="item col-12 col-lg-3 col-md-6 col-s-6 col-xs-12">
                <div className="item-img" onClick={() => showModal(index)}>
                  <img src={item.image} alt="item-img" />
                </div>
                <div className="item-description">
                  <div className="item-code">
                    <h3>{item.title}</h3>
                  </div>
                  <div className="item-name">
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
            {isOpen && (
              <ModalContent onClose={closeModal}>
                <div className="modal-btns">
                  <div className="left-btn">
                    <button onClick={prevItem}>
                      <AiOutlineLeft />
                    </button>
                  </div>
                  <div className="modal-carousel">
                    <div className="item-img col-lg-12 col-md-12">
                      <img
                        src={catalogueItems[currentItemIndex].image}
                        alt="modal-img"
                      />
                    </div>
                  </div>
                  <div className="right-btn">
                    <button onClick={nextItem}>
                      <AiOutlineRight />
                    </button>
                  </div>
                </div>
              </ModalContent>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CatalogueItem;
