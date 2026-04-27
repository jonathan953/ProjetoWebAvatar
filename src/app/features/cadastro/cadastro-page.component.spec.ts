import { TestBed } from '@angular/core/testing';
import { CadastroPageComponent } from './cadastro-page.component';

describe('CadastroPageComponent', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroPageComponent]
    }).compileComponents();
  });

  it('deve iniciar com botão desabilitado enquanto o formulário estiver inválido', () => {
    const fixture = TestBed.createComponent(CadastroPageComponent);
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('.confirmar') as HTMLButtonElement;
    expect(button.disabled).toBe(true);
  });

  it('deve habilitar o botão quando o formulário ficar válido', () => {
    const fixture = TestBed.createComponent(CadastroPageComponent);
    const component = fixture.componentInstance;

    component.form.setValue({
      nome: 'Jake Sully',
      email: 'jake@pandora.com',
      dataNascimento: '1990-10-10',
      quantidadePessoas: 2,
      dataViagem: '2026-08-20',
      hospedagemId: 'grande-arvore'
    });

    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('.confirmar') as HTMLButtonElement;

    expect(component.form.valid).toBe(true);
    expect(button.disabled).toBe(false);
  });

  it('deve calcular o valor final com base na hospedagem e quantidade', () => {
    const fixture = TestBed.createComponent(CadastroPageComponent);
    const component = fixture.componentInstance;

    component.form.controls.quantidadePessoas.setValue(2);
    component.form.controls.hospedagemId.setValue('montanhas-flutuantes');

    expect(component.valorHospedagem()).toBe(3600);
    expect(component.valorTranslado()).toBe(560);
    expect(component.valorFinal()).toBe(4160);
  });
});
