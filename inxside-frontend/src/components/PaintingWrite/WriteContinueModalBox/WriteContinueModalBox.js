import React from 'react';
import './WriteContinueModalBox.scss';

const WriteContinueModalBox = ({
    onRedirectToPainting
}) => {
    return (
        <div className="WriteContinueModalBox" >
            <div className="button-group">
                <button onClick={onRedirectToPainting}>계속 저장하기</button>
                <button>저장한 그림 확인하기</button>
            </div>
        </div>
    );
};

export default WriteContinueModalBox;