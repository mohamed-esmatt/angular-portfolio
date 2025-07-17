import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
  standalone: true
})
export class Header {
  isMenuActive = false;

  toggleMenu() {
    this.isMenuActive = !this.isMenuActive;
    const hamburger = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.nav-list ul');
    
    if (this.isMenuActive) {
      hamburger?.classList.add('active');
      mobile_menu?.classList.add('active');
    } else {
      hamburger?.classList.remove('active');
      mobile_menu?.classList.remove('active');
    }
  }
}
