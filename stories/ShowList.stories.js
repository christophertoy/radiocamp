import React from 'react';
import { storiesOf } from "@storybook/react";
import ShowList from '../app/javascript/packs/components/ShowList';

// export default {
//   title: 'Aloha',
//   component: Aloha
// };

storiesOf("ShowList", module)
  .add("Normal", () => <ShowList />);