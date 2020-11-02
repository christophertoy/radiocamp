import React from 'react';
import { storiesOf } from "@storybook/react";
import EpisodeList from '../app/javascript/packs/components/EpisodeList';

storiesOf("EpisodeList", module)
  .add("Normal", () => <EpisodeList />);