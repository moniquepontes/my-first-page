import React from 'react';
import clsx from 'clsx';

import './styles.css';

class DescriptionContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            style,
            className,
            children,
        } = this.props;

        return (
            <div
                style={style}
                className={clsx('description-container', className)}
            >
                {children}
            </div>
        );
    }
}

export default DescriptionContainer;