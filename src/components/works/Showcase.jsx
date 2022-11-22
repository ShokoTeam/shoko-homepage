import React, { useState } from 'react'
import './showcase.css';
import { images } from '../../data'
import { AnimatePresence } from 'framer-motion';
import Modal from './Modal';
const Showcase = () => {
  const [isModal, setIsModal] = useState(false);
  const [modalImage, setModalImage] = useState('');
  return (
    <section className="showcase">
      {
        images.length > 0 && images.map(image => (

          <div className="card__section">
            <div className="container">
              <div className="card">
                <div className="content" >
                  <div className="imgBx">
                    <img
                      src={image.url}
                      key={image.id} alt="car"
                      onClick={() => {
                        setIsModal(true);
                        setModalImage(image.url);
                      }}
                    />
                  </div>
                </div>
                <div className="sci">
                  <h2>{image.title}</h2>
                  <a>
                    nigga
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))
      }
      <AnimatePresence>
        {isModal && (
          <Modal isModal={isModal} setIsModal={setIsModal} modalImage={modalImage} setModalImage={setModalImage} />
        )}
      </AnimatePresence>
    </section >

  )
}

export default Showcase

