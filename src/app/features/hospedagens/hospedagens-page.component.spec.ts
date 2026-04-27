import { TestBed } from '@angular/core/testing';
import { HospedagensPageComponent } from './hospedagens-page.component';

describe('HospedagensPageComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HospedagensPageComponent]
    }).compileComponents();
  });

  it('deve renderizar as quatro hospedagens', () => {
    const fixture = TestBed.createComponent(HospedagensPageComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('app-scenic-section').length).toBe(4);
  });
});
