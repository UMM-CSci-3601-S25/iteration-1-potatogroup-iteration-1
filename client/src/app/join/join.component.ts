import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Router} from '@angular/router';

@Component({
  selector: 'app-join-component',
  templateUrl: 'join.component.html',
  styleUrls: ['./join.component.scss'],
  imports: [MatCardModule]
})


export class JoinComponent {
  constructor(private router: Router){}

}
