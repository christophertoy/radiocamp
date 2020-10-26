import React from 'react';
import { storiesOf } from "@storybook/react";
import ShowListItem from '../app/javascript/packs/components/ShowListItem';

// export default {
//   title: 'Aloha',
//   component: Aloha
// };

storiesOf("ShowListItem", module)
  .add("Normal", () => <ShowListItem />);