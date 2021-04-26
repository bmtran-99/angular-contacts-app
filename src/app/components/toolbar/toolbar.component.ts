import { Component, OnInit } from '@angular/core';
import { TooltipPosition } from '@angular/material/tooltip';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  position: TooltipPosition = 'below';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onViewAllClick() {
    this.router.navigate(['contacts']);
  }

  onViewFavouritesClick() {
    this.router.navigate(['favourites']);
  }

  onTitleClick() {
    this.router.navigate(['contacts']);
  }
}
