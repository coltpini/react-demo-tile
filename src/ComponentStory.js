import { storiesOf, action } from '@kadira/storybook';
import Component from './Component.js';



storiesOf('Component', module)

    .add('test one', () => (<Component className="passedInClass" />) )
