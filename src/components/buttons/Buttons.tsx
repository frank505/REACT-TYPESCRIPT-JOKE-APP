import React, { useEffect, useState } from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import { Button } from '@material-ui/core';
import ButtonProps from '../../interfaces/components/Buttons/ButtonPropsInterface'
import './styles.scss';


const CustomButton: React.FunctionComponent<ButtonProps> = 
     ({buttonText,clickEvent,color,variant,customStyles,className,type}:any) => {

    return (
       <Button className={`home-page-button ${className}`} 
       onClick={clickEvent} 
        color={color} 
        variant={variant}
        style={customStyles}
         type={type}
        data-testid="custom-button"
        >
                {buttonText}
                </Button>

    );
}

export default CustomButton;