import React from 'react';
import { storiesOf } from "@storybook/react";
import EpisodeList from '../app/javascript/packs/components/EpisodeList';

// export default {
//   title: 'Aloha',
//   component: Aloha
// };

storiesOf("EpisodeList", module)
  .add("Normal", () => <EpisodeList />);