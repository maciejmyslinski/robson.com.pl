import React from 'react';
import PropTypes from 'prop-types';
import Image from 'gatsby-image';

const ResponsiveImage = ({ imageData, alt }) => (
  <div
    style={{
      flex:
        (imageData.sizes && `${imageData.sizes.aspectRatio}`) ||
        `0 1 ${imageData.resolutions && imageData.resolutions.width}px`,
    }}
  >
    <Image
      sizes={imageData.sizes}
      alt={alt}
      resolutions={imageData.resolutions}
    />
  </div>
);

ResponsiveImage.propTypes = {
  imageData: PropTypes.shape({
    sizes: PropTypes.shape({
      aspectRatio: PropTypes.number,
    }),
    resolutions: PropTypes.shape({
      width: PropTypes.number,
    }),
  }).isRequired,
  alt: PropTypes.string,
};

export default ResponsiveImage;
