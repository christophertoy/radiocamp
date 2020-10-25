import React from 'react';
import { storiesOf } from "@storybook/react";
import Aloha from '../app/javascript/packs/components/Aloha';

// export default {
//   title: 'Aloha',
//   component: Aloha
// };

storiesOf("Aloha", module)
  .add("Normal", () => <Aloha />);

