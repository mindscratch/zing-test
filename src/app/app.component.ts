import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'zing-test';
  config: zingchart.graphset = {
    type: "bar",
    title: {
      text: "Hello ZingChart Angular Edition!"
    },
    series: [
      {
        values: [4, 5, 3, 4, 5, 3, 5, 4, 11]
      }
    ]
  };
}
