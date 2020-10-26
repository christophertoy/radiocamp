import React from 'react';
import { storiesOf } from "@storybook/react";
import List from '../app/javascript/packs/components/List';

// export default {
//   title: 'Aloha',
//   component: Aloha
// };

storiesOf("showList", module)
  .add("Normal", () => <List/>);