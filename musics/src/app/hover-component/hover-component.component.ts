import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hover-component',
  templateUrl: './hover-component.component.html',
  styleUrls: ['./hover-component.component.css']
})
export class HoverComponentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['/home']);
  }, 6000);  //5s
  }
  Home()
  {
    this.router.navigate(['/home']);
  }

}
