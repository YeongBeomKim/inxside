import React from 'react';
import PageTemplate from '../components/base/PageTemplate';
import Header from '../components/base/Header';
import PaintingListContainer from '../containers/Paintings/PaintigsListContainer';
const Paintings = () => {
    return (
        <PageTemplate header={<Header/>}>
            <PaintingListContainer />
        </PageTemplate>
    );
};

export default Paintings;