import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  FooterContainer,
  FooterWrap,
  FooterLinkContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLinks,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcon,
  SocialIconLink,
} from "./FooterElements";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterLinkContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle> About Us </FooterLinkTitle>
                <FooterLinks to="/signin">How it works</FooterLinks>
                <FooterLinks to="/signin">Testimonials</FooterLinks>
                <FooterLinks to="/signin">Careers</FooterLinks>
                <FooterLinks to="/signin">Investors</FooterLinks>
                <FooterLinks to="/signin">Term of services</FooterLinks>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle> Contact Us </FooterLinkTitle>
                <FooterLinks to="/signin">Contact</FooterLinks>
                <FooterLinks to="/signin">Destinations</FooterLinks>
                <FooterLinks to="/signin">Support</FooterLinks>
                <FooterLinks to="/signin">Sponsorship</FooterLinks>
              </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle> Videos </FooterLinkTitle>
                <FooterLinks to="/signin">Submit Video</FooterLinks>
                <FooterLinks to="/signin">Ambassadors</FooterLinks>
                <FooterLinks to="/signin">Agency</FooterLinks>
                <FooterLinks to="/signin">Influencer</FooterLinks>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle> Social Media </FooterLinkTitle>
                <FooterLinks to="/signin">Instagram</FooterLinks>
                <FooterLinks to="/signin">Youtube</FooterLinks>
                <FooterLinks to="/signin">Facebook</FooterLinks>
                <FooterLinks to="/signin">Twitter</FooterLinks>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinkContainer>

          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to="/" onClick={toggleHome}>
                Dolla
              </SocialLogo>
              <WebsiteRights>
                Dolla &copy; {new Date().getFullYear()} All rights reserved.
              </WebsiteRights>
              <SocialIcon>
                <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                  <FaYoutube />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                  <FaTwitter />
                </SocialIconLink>
              </SocialIcon>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;
