import { storiesOf, action } from '@kadira/storybook';
import Component from './Component.js';



storiesOf('Component', module)

    .add('test one', () => (
        <Component
            className="passedInClass"
            title="The Bonefish, an amazing fish!"
            teaser="Fly fishing for bonefish, called bonefishing, is a popular sport in the Bahamas and southern Florida. Since bonefish live in shallow inshore water, fishing may be done by wading or from a shallow-draft boat."
            img="https://upload.wikimedia.org/wikipedia/commons/f/f4/Bonefish.png"
        />)
    )
