import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Router} from '@angular/router';

@Component({
  selector: 'app-host-component',
  templateUrl: 'host.component.html',
  styleUrls: ['./host.component.scss'],
  imports: [MatCardModule]
})


export class HostComponent {
  constructor(private router: Router){}

}
