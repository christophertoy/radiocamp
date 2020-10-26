import React from 'react';
import { storiesOf } from "@storybook/react";
import NavBar from '../app/javascript/packs/components/NavBar';

// export default {
//   title: 'Aloha',
//   component: Aloha
// };

storiesOf("NavBar", module)
  .add("Normal", () => <NavBar />);
