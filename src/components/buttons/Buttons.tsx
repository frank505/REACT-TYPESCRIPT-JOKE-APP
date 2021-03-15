import React, { useEffect, useState } from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import { Button } from '@material-ui/core';
import ButtonProps from './ButtonPropsInterface'
import './styles.scss';

const HomePageButton: React.FunctionComponent<ButtonProps> = 
     ({buttonText,clickEvent,color,variant,customStyles,className}:any) => {

    return (
       <Button className={`home-page-button ${className}`} 
       onClick={clickEvent} 
        color={color} 
        variant={variant}
        style={customStyles}
        data-testid="custom-button"
        >
                {buttonText}
                </Button>

    );
}

export default HomePageButton;