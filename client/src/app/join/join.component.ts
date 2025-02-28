import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Router} from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../InfoPage/info.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-join-component',
  templateUrl: 'join.component.html',
  styleUrls: ['./join.component.scss'],
  imports: [MatCardModule, MatIconModule]
})

export class JoinComponent {
  constructor(private router: Router, public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(PopupComponent);
  }
}
