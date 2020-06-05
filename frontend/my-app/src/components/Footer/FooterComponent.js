import React, { Component } from "react";

import styled from "styled-components";
import Typography from '@material-ui/core/Typography';



class Footer extends Component {
    
  render() {
    const FooterContainer = styled.div`
    text-align: center;
    position: absolute;
    bottom: 0;
    width: 100% !important;
    height: 80px !important ;
    background: #3f51b5;
  `;
    return (
      <FooterContainer>
        <Typography variant="h5">Copyrights Reserved @Vikash  </Typography>
      </FooterContainer>
    );
  }
}

export default Footer;