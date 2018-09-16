import React from 'react';
import './WriteContinueModalBox.scss';
import {Link} from 'react-router-dom';

const WriteContinueModalBox = ({
    onRedirectToPainting
}) => {
    return (
        <div className="WriteContinueModalBox" >
            <div className="button-group">
                <a href="write">
                    <button onClick={onRedirectToPainting}>계속 저장하기</button>
                </a>
                <Link to="">
                    <button>저장한 그림 확인하기</button>
                </Link>
            </div>
        </div>
    );
};

export default WriteContinueModalBox;