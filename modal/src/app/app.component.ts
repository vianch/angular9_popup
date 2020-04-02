import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import {ModalComponent} from './modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public email: string;

  constructor(public dialog: MatDialog) {}

  public openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '300px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.email = result;
    });
  }
}
