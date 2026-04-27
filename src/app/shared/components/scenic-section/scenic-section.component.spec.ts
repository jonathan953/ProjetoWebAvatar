import { TestBed } from '@angular/core/testing';
import { ScenicSectionComponent } from './scenic-section.component';

describe('ScenicSectionComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScenicSectionComponent]
    }).compileComponents();
  });

  it('deve aplicar o tema light quando informado', () => {
    const fixture = TestBed.createComponent(ScenicSectionComponent);
    fixture.componentRef.setInput('title', 'Teste');
    fixture.componentRef.setInput('description', 'Descrição');
    fixture.componentRef.setInput('backgroundImage', 'images/img1.jpg');
    fixture.componentRef.setInput('theme', 'light');
    fixture.detectChanges();

    const section = fixture.nativeElement.querySelector('.hero-section') as HTMLElement;
    expect(section.classList.contains('hero-section--light')).toBe(true);
  });
});
