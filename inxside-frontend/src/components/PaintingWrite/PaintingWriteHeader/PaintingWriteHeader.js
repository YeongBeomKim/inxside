import React, { Component} from 'react';
import Responsive from 'components/common/Responsive';

import './PaintingWriteHeader.scss';

class PaintingWriteHeader extends Component {
    render(){
        const {
            title,
            description,
            date,
            onSubmit,
        } = this.props;
        return(
            <div className="PaintingWriteHeader">
                <Responsive>
                    <div className="header-text">새로운 미술 작품 등록하기</div>
                    <div className="form-container">
                        <div className="form-image"></div>
                        <div className="form-group">
                            <input placeholder="작품 제목" value={title}/>
                            <input placeholder="작품 설명" value={description}/>
                            <input placeholder="제작 날자" value={date}/>
                        </div>
                    </div>
                    <button className="submit-btn" onClick={onSubmit} >저장</button>
                </Responsive>
            </div>
        )
    }
}

export default PaintingWriteHeader;