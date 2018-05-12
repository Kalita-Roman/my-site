import React from 'react';
import { storiesOf } from '@storybook/react';
//import { action } from '@storybook/addon-actions';
import Trigger from '../src/components/Trigger';

storiesOf('Button', module)
    .add('with text', () => (
        <div>
            <Trigger value />
            <Trigger value={false} />
        </div>
    ));
