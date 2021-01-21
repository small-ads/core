import React from "react";

import { storiesOf } from "@storybook/react";
import { Button } from "./Button";

storiesOf("Button", module)
  .add("primary", () => <Button>Call to Action</Button>)
  .add("primary disabled", () => <Button disabled>Call to Action</Button>)
  .add("secondary", () => <Button type="secondary">Call to Action</Button>)
  .add("secondary disabled", () => (
    <Button disabled type="secondary">
      Call to Action
    </Button>
  ))
  .add("onClick handler", () => (
    // eslint-disable-next-line no-alert
    <Button onClick={() => window && window.alert("Button Clicked!")}>
      Click me!
    </Button>
  ));
