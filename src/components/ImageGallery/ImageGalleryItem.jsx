// import PropTypes from 'prop-types';

const ImageGalleryItem = ({ id, src, largeURL, handleState }) => {
  return (
    <>
      <li onClick={() => handleState(largeURL)} className="gallery-item">
        <img src={src} alt={id} />
      </li>
    </>
  );
};

export default ImageGalleryItem;
