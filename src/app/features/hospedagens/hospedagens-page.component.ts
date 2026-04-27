import { Component } from '@angular/core';
import { ScenicSectionComponent } from '../../shared/components/scenic-section/scenic-section.component';
import { HOSPEDAGENS } from '../../shared/data/hospedagens.data';

@Component({
  selector: 'app-hospedagens-page',
  standalone: true,
  imports: [ScenicSectionComponent],
  templateUrl: './hospedagens-page.component.html',
  styleUrl: './hospedagens-page.component.scss'
})
export class HospedagensPageComponent {
  readonly hospedagens = HOSPEDAGENS;
}
