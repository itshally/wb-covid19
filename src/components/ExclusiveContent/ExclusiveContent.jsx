import React from "react";
import { Container } from "../../../node_modules/@material-ui/core";
import './ExclusiveContent.module.css'

const ExclusiveContent = () =>{
    
    return(
        <Container className="hidden" id="exclusive">
            <p>this is an exclusive content</p>
        </Container>
    );
};

export default ExclusiveContent;