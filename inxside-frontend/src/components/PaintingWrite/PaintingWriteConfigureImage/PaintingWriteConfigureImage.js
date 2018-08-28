import React, { Fragment } from 'react';

import './PaintingWriteConfigureImage.scss';

const PaintingWriteConfigureImage = ({
    onUploadClick,
    paintingUri,
    onClearImage
}) => {
    return (
        <div className="PaintingWriteConfigureImage">
            {paintingUri ? (
                <Fragment>
                    <div className="image-area">
                        <img className="full" src={paintingUri} alt="Painting"/>
                    </div>
                    <div className="button-group">
                        <button onClick={onClearImage}>삭제</button>
                        <button onClick={onUploadClick}>수정</button>
                    </div>
                </Fragment>

            ) : (
                <button className="upload-button" onClick={onUploadClick}>이미지 업로드</button>
            )}
        </div>
    );
};

export default PaintingWriteConfigureImage;