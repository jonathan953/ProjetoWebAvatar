import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScenicSectionComponent } from '../../shared/components/scenic-section/scenic-section.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterLink, ScenicSectionComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {}
