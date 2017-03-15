import { Component } from '@angular/core';

import Task from '/app/classes/task';

@Component({
  selector: 'personal-data',
  templateUrl: '/app/features/personalDataComponent/personalData.html'
})

export class PersonalDataComponent {
  tasks : Task[] = [];
}
