import classNames from 'classnames';
import React, { Component } from 'react';
import styles from './index.css';

class NavbarBrand extends Component {
    render() {
        const { className, children, ...props } = this.props;

        return (
            <span
                {...props}
                className={classNames(className, styles.navbarBrand)}
            >
                {children}
            </span>
        );
    }
}

export default NavbarBrand;