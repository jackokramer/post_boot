import { templateJitUrl } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = {first_name: '', last_name:""};
  title = 'sample size';
  myObject = {name: 'Tina', status: "lard ass"}
  someEvent(num){
    console.log("AppComponent > someEvent", num)
  }
  mouseOver(){
    console.log('log the data')
  }
  onSubmit(){
    console.log(this.user)
  }
}

@FormsModule({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
