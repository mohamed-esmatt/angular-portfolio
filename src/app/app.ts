import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Projects } from './pages/projects/projects';
import { About } from './pages/about/about';
import { Home } from './pages/home/home';
import { Contact } from './pages/contact/contact';
import { Skills } from './pages/skills/skills';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, Footer, Projects, About, Home, Contact, Skills],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'my-portofolio';
}
