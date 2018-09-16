import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';


import 'moment/locale/ko';
import './PaintingCard.scss';

moment.locale('ko');

const PaintingCard = (
    key,
) => {
    const now = new Date();
    const d = new Date(key.date);
    console.log(d);
    const m = moment(key.date);
    const diff = now - d;
    const formattedDate = (() => {
        if (diff < 1000 * 60) return '방금 전';
        if (diff > 1000 * 60 * 60 * 24) {
        return m.format('MMM Do');
        }
        return m.fromNow();
    })();
    const link = `/@${key.title}/${key.date}`;
    return (
        
        <div className="PaintingCard">
            <div className="subinfo">
                <span>{formattedDate}</span>
            </div>
            {(key.paintingUri) && (
            <Link to={link} className="thumbnail-wrapper">
                {key.paintingUri ? (
                <img src={key.paintingUri} alt={key.title} />
                ) : (
                <div className="image-placeholder">
                </div>
                )}
                <div className="white-mask" />
            </Link>
            )}
            <div className="card-content">
                <h3>
                    <Link to={link}>{key.title}</Link>
                </h3>
            </div>
        </div>
    );
};

export default PaintingCard;