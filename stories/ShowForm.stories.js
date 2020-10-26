import React from 'react';
import { storiesOf } from "@storybook/react";
import ShowForm from '../app/javascript/packs/components/ShowForm';

// export default {
//   title: 'ShowForm',
//   component: ShowForm
// };

storiesOf("ShowForm", module)
  .add("Normal", () => <ShowForm />);
