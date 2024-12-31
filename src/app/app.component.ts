import { Component } from '@angular/core';
import { PresentModel } from './models/PresentModel';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BadChristmasCRUD';
  presents: PresentModel[] = []
  modifiedPres: PresentModel | undefined = undefined
  newPres: PresentModel | undefined = undefined

  constructor(private dataService: DataService){
  }

  ngOnInit(){
    this.dataService.getPresent().subscribe({
      next: (data: PresentModel[]) => {
        this.presents = data
      },
      error: (err) => console.log(err)
    })
  }

  new(){
    this.newPres = {
      id: undefined,
      name: "",
      giver: "",
      description: "",
      reasoning: "",
      canBeReturned: true
    }
  }

  modify(present: PresentModel){
    this.modifiedPres = JSON.parse(JSON.stringify(present))
  }

  saveNew(present: PresentModel){
    this.dataService.addPresent(present).subscribe({
      next: (data: PresentModel) => {
        this.presents.push(data)
        this.modifiedPres = undefined
        this.newPres = undefined
      },
      error: (err) => console.log(err)
    })
  }

  saveModify(present: PresentModel){
    this.dataService.modifyPresent(present).subscribe({
      next: (data: PresentModel) => {
        const index = this.presents.findIndex(pr => pr.id == present.id)
        this.presents[index] = data
        this.modifiedPres = undefined
        this.newPres = undefined
      },
      error: (err) => console.log(err)
    })
  }

  delete(present: PresentModel){
    this.dataService.deletePresent(present).subscribe({
      next: (data: PresentModel) => {
        const index = this.presents.findIndex(pr => pr.id == present.id)
        this.presents.splice(index,1)
      },
      error: (err) => console.log(err)
    })
  }

  formCanceled(){
    this.modifiedPres = undefined
    this.newPres = undefined
  }
}
