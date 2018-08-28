import React, { Component} from 'react';
import Responsive from 'components/common/Responsive';

import './PaintingWriteHeader.scss';

const PaintingWriteHeader = ({
    title,
    description,
    date,
    onSubmit,
    onChangeTitle,
    onChangeDescription,
    onChangeDate,
    configureImage,
    writeContinueModalBox,
}) => {
    return(
        <div className="PaintingWriteHeader">
            <Responsive>
                <div className="header-text">새로운 미술 작품 등록하기</div>
                <div className="form-container">
                    <div className="form-image">
                        {configureImage}
                    </div>
                    <div className="form-group">
                        <input placeholder="작품 제목" autoFocus onChange={onChangeTitle} value={title} field='title' />
                        <input placeholder="작품 설명" onChange={onChangeDescription} value={description} />
                        <input placeholder="제작 날자" onChange={onChangeDate} value={date}/>
                    </div>
                </div>
                {writeContinueModalBox}
                <button className="submit-btn" onClick={onSubmit} >저장</button>
            </Responsive>
        </div>
    )
}

export default PaintingWriteHeader;