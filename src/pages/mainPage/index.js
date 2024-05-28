import React from 'react';

import DescriptionContainer from '../../components/descriptionContainer';

import './styles.css';

class MainPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div
                className='main-page-background'
            >
                <DescriptionContainer
                    className='main-page-container wobble-vertical-right'
                >
                    <div
                        className='main-page-title'
                    >
                        monique pontes
                    </div>
                </DescriptionContainer>
            </div>
        );
    }
}

export default MainPage;