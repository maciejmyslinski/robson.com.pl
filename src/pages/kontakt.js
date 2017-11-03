import React from 'react';
import styled from 'styled-components';
import typography from 'utils/typography';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { MAX_WIDTH } from 'utils/layout';
import { ALTO, CHAMBRAY } from 'utils/colors';
import media from 'utils/mediaQueries';
import Phone from 'components/Icons/Phone';
import Email from 'components/Icons/Email';
import Map from 'components/Icons/Map';
import Copy from 'components/Icons/Copy';

const { rhythm } = typography;
const maxWidthOfThisPage = MAX_WIDTH / 2;
const maxWidthOfThisPagePx = `${maxWidthOfThisPage}px`;

const PageWrapper = styled.div`
  max-width: calc(${maxWidthOfThisPagePx} + ${rhythm(2)});
  margin: 0 auto;

  ${media.greaterThan(maxWidthOfThisPagePx)`
    padding: 0 ${rhythm(1)} ${rhythm(3)};
  `};
`;

const Title = styled.h1`
  text-align: center;

  ${media.lessThan(maxWidthOfThisPagePx)`
    margin: ${rhythm(1)} auto;
  `};
`;

const ContactRow = styled.div`
  position: relative;
  padding: calc(${rhythm(1)} - 1px) ${rhythm(1)} ${rhythm(1)};
  border-top: 1px solid ${ALTO};
  align-items: flex-start;

  ${media.greaterThan(maxWidthOfThisPagePx)`
    border-top-color: transparent;
    padding-right: 0;
    padding-left: 0;
  `};
`;

const RowContent = styled.div`
  margin: 0 ${rhythm(0.5)} 0 0;
`;

const WithIconRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LinkRow = ContactRow.withComponent('a').extend`
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  color: inherit;
`;

const Icon = styled.div`
  & svg {
    width: 32px;
    height: 32px;
    margin: -4px 0;
    display: block;

    path {
      fill: ${CHAMBRAY};
    }
  }
`;

const AddressRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const GoogleMap = styled.iframe`
  margin: ${rhythm(1)} auto 0;
  border: 0;
`;

const ContactPage = () => (
  <PageWrapper>
    <Title>Kontakt</Title>
    <LinkRow href="tel:+48602338508">
      <RowContent>
        <b>602 338 508</b>
      </RowContent>
      <Icon>
        <Phone />
      </Icon>
    </LinkRow>
    <LinkRow href="mailto:biuro@robson.com.pl">
      <RowContent>
        <b>biuro@robson.com.pl</b>
      </RowContent>
      <Icon>
        <Email />
      </Icon>
    </LinkRow>
    <ContactRow>
      <AddressRow>
        <div>
          <b>ul. Ostrówek 10/11</b>
          <br />
          61-122 Poznań<br />
          Poniedziałek - Piątek: 8 - 16
        </div>
        <Icon>
          <Map />
        </Icon>
      </AddressRow>
      <GoogleMap
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1254144.3368691872!2d17.36302056452942!3d52.12521373024336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47045b6eadabc971%3A0xf036a461b8f9b174!2zUk9CU09OIHwgQnJhbXkgZ2FyYcW8b3dlIOKYhSBzcHLEmcW8eW55IGRvIGJyYW0g4piFIGF1dG9tYXR5a2Eg4piFc2Vyd2lzIHwgUm9iZXJ0IE15xZtsacWEc2tp!5e0!3m2!1sen!2spl!4v1509732727241"
        width="100%"
        height="300"
        frameBorder="0"
        allowFullScreen
      />
    </ContactRow>
    <CopyToClipboard text="7791551041">
      <ContactRow>
        <WithIconRow>
          <RowContent>
            <b>NIP:</b> 779 155 10 41
          </RowContent>
          <Icon>
            <Copy />
          </Icon>
        </WithIconRow>
      </ContactRow>
    </CopyToClipboard>
    <CopyToClipboard text="630781580">
      <ContactRow>
        <WithIconRow>
          <RowContent>
            <b>REGON:</b> 630781580
          </RowContent>
          <Icon>
            <Copy />
          </Icon>
        </WithIconRow>
      </ContactRow>
    </CopyToClipboard>
    <CopyToClipboard text="43102040270000180213451515">
      <ContactRow>
        <WithIconRow>
          <RowContent>
            <b>Numer konta:</b> 43 1020 4027 0000 1802 1345 1515
          </RowContent>
          <Icon>
            <Copy />
          </Icon>
        </WithIconRow>
      </ContactRow>
    </CopyToClipboard>
  </PageWrapper>
);

export default ContactPage;
