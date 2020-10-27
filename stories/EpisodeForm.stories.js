import React from 'react';
import { storiesOf } from "@storybook/react";
import EpisodeForm from '../app/javascript/packs/components/EpisodeForm';

// export default {
//   title: 'EpisodeForm',
//   component: EpisodeForm
// };

storiesOf("EpisodeForm", module)
  .add("Normal", () => <EpisodeForm />);
