import React, { useEffect, useState } from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import { Button } from '@material-ui/core';
import ButtonProps from './ButtonPropsInterface'
import './Buttons.scss';

const HomePageButton: React.FunctionComponent<ButtonProps> = 
     ({buttonText,clickEvent,color,variant,customStyles,className}:any) => {

    return (
       <Button className={`home-page-button ${className}`} 
       onClick={clickEvent} 
        color={color} 
        variant={variant}
        style={customStyles}
        >
                {buttonText}
                </Button>

    );
}

export default HomePageButton;