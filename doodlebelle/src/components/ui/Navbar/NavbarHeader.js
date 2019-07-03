import classNames from 'classnames';
import React, { Component } from 'react';
import styles from './index.css';

class NavbarHeader extends Component {
    render() {
        const { className, ...props } = this.props;

        return (
            <div
                {...props}
                className={classNames(className, styles.navbarHeader)}
            />
        );
    }
}

export default NavbarHeader;