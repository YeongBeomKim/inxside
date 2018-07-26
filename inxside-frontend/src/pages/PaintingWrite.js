import React from 'react';
import PageTemplate from '../components/base/PageTemplate';
import Header from '../components/base/Header';
import PaintingWriteHeader from '../components/PaintingWrite/PaintingWriteHeader';

const PaintingWrite = () => {
    return (
        <PageTemplate header={<Header />}>
            <PaintingWriteHeader />
        </PageTemplate>
    );
};

export default PaintingWrite;