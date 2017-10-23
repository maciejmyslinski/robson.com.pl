import React from 'react';
import PropTypes from 'prop-types';
import Image from 'gatsby-image';
import styled from 'styled-components';
import { MAX_WIDTH } from 'utils/layout';
import media from 'utils/mediaQueries';

// consider we display one image (no siblings) with aspect ratio < 1
// that image will never take 100% width as it should.
// thus we need to make sure minimal flex-grow is 1.
// we do this by multiplying every aspect ratio by flexGrowFactor
const calculateFlexGrowFactor = images =>
  images
    .map(image => Math.max(1 / image.sizes.aspectRatio, 1))
    .reduce((maxValue, currentValue) => Math.max(maxValue, currentValue), 1);

const ImagesWrapper = styled.div`
  margin: 0 auto;
  max-width: ${MAX_WIDTH};
  display: flex;

  & > *:not(:first-child) {
    display: none;

    ${media.greaterThan('medium')`
    display: block;
  `};
  }
`;

const Images = ({ images }) => {
  const flexGrowFactor = calculateFlexGrowFactor(images);
  return (
    <ImagesWrapper>
      {images.map(image => (
        <div
          key={image.alt}
          style={{
            flex: image.sizes.aspectRatio * flexGrowFactor,
          }}
        >
          <Image sizes={image.sizes} alt={image.alt} />
        </div>
      ))}
    </ImagesWrapper>
  );
};

Images.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      sizes: PropTypes.shape({
        aspectRatio: PropTypes.number,
      }),
      alt: PropTypes.string,
    }),
  ).isRequired,
};

export default Images;
