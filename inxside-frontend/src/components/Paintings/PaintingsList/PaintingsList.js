import React, {Fragment} from 'react';
import PaintingCard from '../PaintingCard';
import './PaintingsList.scss';

const getColumnCount = (width) => {
  const xWide = 1920;
  const wide = 1600;
  const xLarge = 1200;
  const large = 1024;

  if (!width) return 1;

  if (width < large) return 1;
  if (width < xLarge) return 2;
  if (width < wide) return 3;
  if (width < xWide) return 4;
  return 5;
};

const PaintingsList = ({
    paintings,
    width,
    oneColumn,
    hasEnded,
}) => {
    const columnCount = oneColumn ? 1 : getColumnCount(width);
    if (!paintings) return null;
    const paintingsList = paintings.slice(0, paintings.length - paintings.length % columnCount)
      .map(painting => (
        <PaintingCard
            key={painting._id}
            title={painting.title}
            description={painting.description}
            date={painting.date}
            paintingUri={painting.paintingUri}
        />
    ));
    return (
        <Fragment>
            <div className="PaintingsList">
                {paintingsList}
            </div>
        </Fragment>

    );
};

export default PaintingsList;