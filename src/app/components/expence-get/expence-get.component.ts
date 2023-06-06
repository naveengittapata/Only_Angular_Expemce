import { Component } from '@angular/core';
import { ExpenceServiceService } from 'src/app/services/expence-service.service';

@Component({
  selector: 'app-expence-get',
  templateUrl: './expence-get.component.html',
  styleUrls: ['./expence-get.component.css']
})
export class ExpenceGetComponent {

  data: any = "Test"; // Data received from the API

  constructor(private apiService:ExpenceServiceService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.apiService.getData()
      .subscribe(response => {
        this.data = response
      });

      
    
  }

}
