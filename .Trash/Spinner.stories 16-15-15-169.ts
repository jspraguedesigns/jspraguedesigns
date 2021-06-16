import { Story, Meta } from '@storybook/angular/types-6-0';
import { MdSpinnerComponent } from '../projects/ets-component-lib/src/lib/md-spinner/md-spinner.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatProgressBarModule} from '@angular/material/progress-bar';

export default {
  title: 'Atomics/Spinner',
  component: MdSpinnerComponent,
  argTypes: {
    choice: { control: 'text' }, 
    // we need to override here since in Angular it could be null as well (see button.component.ts) and therefore it would become an ambigious data type for storybook
  }
} as Meta;

const Template: Story<MdSpinnerComponent> = (args: MdSpinnerComponent) => ({
    moduleMetadata: {
        imports: [
            MatProgressSpinnerModule,
            BrowserAnimationsModule,
            BrowserModule,
            MatProgressBarModule
        ],
    },
  component: MdSpinnerComponent,
  props: args,
});



export const Spinner = Template.bind({});
Spinner.args = {
  choice: 'This is a choice',
};