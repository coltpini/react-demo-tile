import {Component as ReactComponent} from 'react';
import styles from './Component.css';
import classes from 'classnames';

class Component extends ReactComponent {
    render() {
        const {className, title, teaser, img, showContainer=false} = this.props;

        return (
            <div className={classes(className, styles.tile, {[styles['showContainer']]: showContainer})}>
                <img src={img} />
                <span className={styles.title}>{title}</span>
                <p className={styles.teaser}>{teaser}</p>
            </div>
        )
    }
}

export default Component;
