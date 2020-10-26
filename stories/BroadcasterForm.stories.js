import React from 'react';
import { storiesOf } from "@storybook/react";
import BroadcasterForm from '../app/javascript/packs/components/BroadcasterForm';

// export default {
//   title: 'BroadcasterForm',
//   component: BroadcasterForm
// };

storiesOf("BroadcasterForm", module)
  .add("Normal", () => <BroadcasterForm />);
