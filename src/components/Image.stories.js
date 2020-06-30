import React from 'react';
import { action } from '@storybook/addon-actions';

import Image from './Image';
import ExampleImage from '../images/Synergies-Highlight.png';

export default {
  component: Image,
  title: 'Image',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const imageData = {
  id : '1',
  title: 'Test_Image',
  state: 'DEFAULT_IMAGE',
  image: ExampleImage,
};

export const actionsImageData = {
  onClickImage: action('onClickImage'),
};

export const Default = () => <Image image={{ ...imageData }} {...actionsImageData} />;

// export const Pinned = () => <Task task={{ ...taskData, state: 'TASK_PINNED' }} {...actionsData} />;
//
// export const Archived = () => (
//   <Task task={{ ...taskData, state: 'TASK_ARCHIVED' }} {...actionsData} />
// );
