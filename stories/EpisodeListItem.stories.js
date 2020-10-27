import React from 'react';
import { storiesOf } from "@storybook/react";
import EpisodeListItem from '../app/javascript/packs/components/EpisodeListItem';

// export default {
//   title: 'Aloha',
//   component: Aloha
// };

storiesOf("EpisodeListItem", module)
  .add("Normal", () => <EpisodeListItem />);