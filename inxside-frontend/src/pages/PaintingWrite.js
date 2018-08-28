import React from 'react';
import PageTemplate from '../components/base/PageTemplate';
import Header from '../components/base/Header';
import PaintingWriteHeaderContainer from '../containers/PaintingWrite/PaintingWriteHeaderContainer';
const PaintingWrite = () => {
    return (
        <PageTemplate header={<Header />}>
            <PaintingWriteHeaderContainer />
        </PageTemplate>
    );
};

export default PaintingWrite;