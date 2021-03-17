import React, { useEffect, useState } from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import HeaderProps from '../../interfaces/components/Header/HeaderPropsInterface'
import './Header.scss';



const CustomHeader: React.FunctionComponent<HeaderProps> = 
     ({headerText,variant,customStyles,className}:any) => {

    return (
       <Typography className={`general-header-custom-styles ${className}`} 
        variant={variant}
        style={customStyles}
        data-testid="custom-header-elem"
        >
                {headerText}
                </Typography>

    );
}

export default CustomHeader;