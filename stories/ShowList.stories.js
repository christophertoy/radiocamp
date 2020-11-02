import React from 'react';
import { storiesOf } from "@storybook/react";
import ShowList from '../app/javascript/packs/components/ShowList';

storiesOf("ShowList", module)
  .add("Normal", () => <ShowList />);