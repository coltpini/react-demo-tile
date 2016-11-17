import {Component as ReactComponent} from 'react';
import styles from './Component.css';
import classes from 'classnames';

class Component extends ReactComponent {
    state = {
        example: 'example'
    };
    render() {
        const {className} = this.props;
        const {example} = this.state;

        return (
            <div className={classes(className, styles.componentName)}>
            </div>
        )
    }
}



export default Component;
