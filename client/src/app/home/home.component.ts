import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PopupComponent } from '../InformationPage/info.component';

@Component({
  selector: 'app-home-component',
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [],
  imports: [MatCardModule, MatDialogModule, MatButtonModule, MatIconModule, MatTooltipModule]
})
export class HomeComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(PopupComponent);
  }
}
