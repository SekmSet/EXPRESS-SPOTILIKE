import {Component, Input} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-toaster',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './toaster.component.html',
  styleUrl: './toaster.component.scss'
})
export class ToasterComponent {
  @Input() errorOrResponse: any;
  @Input() type: any;
  @Input() statusCode: number = 0;

  constructor() {
  }

  ngOnInit() {
  }
}
