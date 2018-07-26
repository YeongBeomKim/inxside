import React from 'react';
import styles from './PageTemplate.scss';


const PageTemplate = ({ header, children }) => {
    return(
        <div className="PageTemplate">
            {header}
            <main className="rest">{children}</main>
        </div>
    )
}

export default PageTemplate;