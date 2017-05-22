import { Component, OnInit ,Input } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor(private route: Router) { }


  onSubmit(movie: string)
  {
    if(movie)
  	 this.route.navigate(['moviecomp',movie]);
  }

  ngOnInit() {
  }

}
