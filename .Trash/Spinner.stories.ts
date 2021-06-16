import { Story, Meta } from '@storybook/angular/types-6-0';
import {SpinnerComponent} from '../projects/pattern-lib/src/lib/spinner/spinner.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { moduleMetadata } from '@storybook/angular';

export default {
  title: 'Atomics/Spinner',
  component: SpinnerComponent,
  decorators: [
    moduleMetadata({
        imports: [MatProgressSpinnerModule]
    })
  ],
  argTypes: {
    label: { control: 'text' }, 
    // we need to override here since in Angular it could be null as well (see button.component.ts) and therefore it would become an ambigious data type for storybook
  }
} as Meta;

const Template: Story<SpinnerComponent> = (args: SpinnerComponent) => ({
  component: SpinnerComponent,
  props: args,
});

export const Spinner = Template.bind({});
Spinner.args = {
  label: 'Button',
};

