import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ExpenceModel } from 'src/app/models/expence-model';
import { ExpenceServiceService } from 'src/app/services/expence-service.service';

@Component({
  selector: 'app-addcomp',
  templateUrl: './addcomp.component.html',
  styleUrls: ['./addcomp.component.css']
})
export class AddcompComponent {
  ep:ExpenceModel= new ExpenceModel(); 
 
  


  constructor(private _expenceService:ExpenceServiceService,
              private _rout : Router) {
                
              }


              ngOnInit() {
                
                
              }
  
  Insert(){
    debugger
    this._expenceService.postData(this.ep).subscribe(
      data => {
        console.log('response', data);
        this._rout.navigateByUrl("/expence");
      }
    )

  }

}
