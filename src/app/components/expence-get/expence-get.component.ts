import { Component } from '@angular/core';
import { ExpenceServiceService } from 'src/app/services/expence-service.service';
// export const id: number = 123;
@Component({
  selector: 'app-expence-get',
  templateUrl: './expence-get.component.html',
  styleUrls: ['./expence-get.component.css']
})


export class ExpenceGetComponent {

  data: any = "Test"; // Data received from the API
  mydata: any="test2";
  id: number = 123;

  constructor(private apiService:ExpenceServiceService) { }

  ngOnInit(): void {
    this.getData();
    this.getdataonID();
  }

  getData(): void {
    this.apiService.getData()
      .subscribe(response => {
        this.data = response
      });

      
  }
  getdataonID(): void {
    debugger
    this.apiService.getByID(this.id).subscribe(
      response => {
        this.mydata = response;
      },
      // (error: any) => {
      //   console.error(error);
      // }
    );
  }

  // greet(id: number): void {
  //   // let myNumber: number = 10;
  //   // let id: number = 12;
  //   id = 12;
  // }

}




