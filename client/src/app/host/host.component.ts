import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Router} from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../InfoPage/info.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-host-component',
  templateUrl: 'host.component.html',
  styleUrls: ['./host.component.scss'],
  imports: [MatCardModule, MatIconModule]
})

export class HostComponent {
  constructor(private router: Router, public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(PopupComponent);
  }
}
