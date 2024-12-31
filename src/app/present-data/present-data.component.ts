import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PresentModel } from '../models/PresentModel';

@Component({
  selector: 'app-present-data',
  templateUrl: './present-data.component.html',
  styleUrl: './present-data.component.css'
})
export class PresentDataComponent {
  @Input() presentData: PresentModel | undefined = undefined
  @Output() saved = new EventEmitter<PresentModel>()
  @Output() canceled = new EventEmitter()

  getData(event: any): string{
    return event.target.value
  }

  cancel(){
    this.presentData = undefined
    this.canceled.emit()
  }

  save(){
    this.saved.emit(this.presentData)
  }
}
