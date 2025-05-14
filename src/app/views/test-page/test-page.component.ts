import { Component } from '@angular/core';
import { angularMaterialRenderers } from '@jsonforms/angular-material';
import { JsonFormsModule } from '@jsonforms/angular';
import { JsonFormsAngularMaterialModule } from '@jsonforms/angular-material';
import { optionIs } from '@jsonforms/core';

@Component({
  selector: 'app-test-page',
  imports: [JsonFormsModule, JsonFormsAngularMaterialModule],
  template: `<jsonforms
    [data]="data"
    [schema]="schema"
    [uischema]="uischema"
    [renderers]="renderers"
  ></jsonforms>`,
  styleUrl: './test-page.component.scss',
})
export class TestPageComponent {
  renderers = angularMaterialRenderers;
  uischema = {
    type: 'VerticalLayout',
    elements: [
      {
        type: 'Control',
        label: 'Completed',
        scope: '#/properties/done',
      },
      {
        type: 'Control',
        scope: '#/properties/name',
        label: 'Task Name',
        options: {
          multiline: true,
          appearance: 'outline',
        },
      },
      {
        type: 'HorizontalLayout',
        elements: [
          {
            type: 'Control',
            scope: '#/properties/due_date',
          },
          {
            type: 'Control',
            scope: '#/properties/recurrence',
          },
        ],
      },
    ],
  };
  schema = {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        minLength: 1,
      },
      done: {
        type: 'boolean',
      },
      due_date: {
        type: 'string',
        format: 'date',
      },
      recurrence: {
        type: 'string',
        enum: ['Never', 'Daily', 'Weekly', 'Monthly'],
      },
    },
    required: ['name', 'due_date'],
  };
  data = {};
}
