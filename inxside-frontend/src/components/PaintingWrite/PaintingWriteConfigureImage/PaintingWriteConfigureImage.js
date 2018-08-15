import React from 'react';

import './PaintingWriteConfigureImage.scss';

const PaintingWriteConfigureImage = ({
    onUploadClick,
    paintingUri
}) => {
    return (
        <div className="PaintingWriteConfigureImage">
            {paintingUri ? (
                <div>
                    <img src={paintingUri} alt="Painting"/>
                </div>
            ) : (
                <div>
                    <button onClick={onUploadClick}>이미지 업로드</button>
                </div>
            )}
        </div>
    );
};

export default PaintingWriteConfigureImage;