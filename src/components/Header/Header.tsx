import React, { useEffect, useState } from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import HeaderProps from './HeaderPropsInterface'
import './Header.scss';



const CustomHeader: React.FunctionComponent<HeaderProps> = 
     ({headerText,variant,customStyles,className}:any) => {

    return (
       <Typography className={`general-header-custom-styles ${className}`} 
        variant={variant}
        style={customStyles}
        >
                {headerText}
                </Typography>

    );
}

export default CustomHeader;