import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-scenic-section',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './scenic-section.component.html',
  styleUrl: './scenic-section.component.scss'
})
export class ScenicSectionComponent {
  readonly title = input.required<string>();
  readonly description = input.required<string>();
  readonly backgroundImage = input.required<string>();
  readonly theme = input<'dark' | 'light'>('dark');
  readonly align = input<'left' | 'right'>('left');
  readonly sectionClass = input<string>('');
  readonly titleClass = input<string>('section-title');
}
