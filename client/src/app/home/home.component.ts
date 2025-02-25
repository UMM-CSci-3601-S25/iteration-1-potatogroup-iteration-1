import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-home-component',
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [MatCardModule, RouterLink]
})


export class HomeComponent {
  constructor(private router: Router){}

}
