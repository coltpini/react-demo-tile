import {Component as ReactComponent} from 'react';
import styles from './Component.css';
import classes from 'classnames';

class Component extends ReactComponent {
    render() {
        const {className, title, teaser, img} = this.props;

        return (
            <div className={classes(className, styles.componentName)}>
                <img src={img} />
                <span class={styles.title}>{title}</span>
                <p class={styles.teaser}>{teaser}</p>
            </div>
        )
    }
}

export default Component;
