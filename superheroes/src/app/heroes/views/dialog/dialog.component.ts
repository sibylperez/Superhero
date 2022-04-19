import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styles: [
  ]
})
export class DialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public data: Heroe) { }

  ngOnInit(): void {
  }

  erase(){
    this.dialogRef.close(true)
  }

  close(){
    this.dialogRef.close(false)
  }

}
