import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import {ETSFormComponent} from '../form/form.component';
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';

// This exports the Stories group for this component
export default {
    // The title defines the name and where in the structure of
    // Storybook's menu this is going to be placed.
    // Here we add it to a "Components" section under "Link"
    title: 'Components/Form',
    // The component related to the Stories
    component: ETSFormComponent,
    decorators: [
      // The necessary modules for the component to work on Storybook
      moduleMetadata({
        declarations: [ETSFormComponent],
        imports: [
            CommonModule,
            MatFormFieldModule,
            MatInputModule,
            FormsModule,
            ReactiveFormsModule,
            BrowserAnimationsModule,
            MatMenuModule
        ],
      }),
    ],
  };
  // This creates a Story for the component
  const Template: Story<ETSFormComponent> = () => ({
    component: ETSFormComponent,
    template: `<app-form></app-form>`,
  });
  export const Base = Template.bind({});
  // Other stories could be added here as well, all you have to do is export them along!