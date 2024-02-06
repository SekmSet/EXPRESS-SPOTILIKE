import {Component, Input} from '@angular/core';
import {NgClass, NgIf} from "@angular/common";

@Component({
  selector: 'app-toaster',
  standalone: true,
  imports: [
    NgClass,
    NgIf
  ],
  templateUrl: './toaster.component.html',
  styleUrl: './toaster.component.scss'
})
export class ToasterComponent {
  @Input() errorOrResponse: any;
  @Input() type: any;
  @Input() statusCode: number = 0;

  display: boolean = false;

  constructor() {
  }

  ngOnInit() {
    this.display = true;

    setTimeout(() => {
      this.display = false;
    }, 5000);
  }
}
