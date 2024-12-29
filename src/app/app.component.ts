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

  }

  modify(present: PresentModel){

  }

  delete(present: PresentModel){

  }
}
