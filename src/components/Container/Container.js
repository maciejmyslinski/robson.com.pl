import styled from 'styled-components';
import typography from 'utils/typography';
import media from 'utils/mediaQueries';
import { MAX_WIDTH_PX } from 'utils/layout';

const { rhythm } = typography;

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin: ${rhythm(1)} auto ${rhythm(3)};
  padding: 0 ${rhythm(1)};
  max-width: ${MAX_WIDTH_PX};

  ${media.greaterThan('medium')`
    margin: ${rhythm(5)} auto;
  `};
`;
