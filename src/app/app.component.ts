import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  themeServSubs?: Subscription;

  title = 'ngrx-practice';
  authorized = true;
  themeColors: any;

  constructor() { }

  ngOnInit(): void {
  }


  onLogout(){
    
  }
  ngOnDestroy(): void {

  }
}
