import React from 'react';
import { storiesOf } from "@storybook/react";
import ShowListItem from '../app/javascript/packs/components/ShowListItem';

storiesOf("ShowListItem", module)
  .add("Normal", () => <ShowListItem />);