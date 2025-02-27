import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PopupComponent } from '../InfoPage/info.component';
import { Router, RouterLink} from '@angular/router';


@Component({
  selector: 'app-home-component',
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [],
  imports: [MatCardModule, MatDialogModule, MatButtonModule, MatIconModule, MatTooltipModule, RouterLink]

})


export class HomeComponent {
  constructor(private router: Router, public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(PopupComponent);
  }
}
