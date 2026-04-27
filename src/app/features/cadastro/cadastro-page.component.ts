import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { TravelBookingService } from '../../core/services/travel-booking.service';
import { HOSPEDAGENS } from '../../shared/data/hospedagens.data';
import {
  HospedagemId,
  HospedagemOption,
  TravelBooking
} from '../../shared/models/travel-booking.model';

interface BookingForm {
  nome: FormControl<string>;
  email: FormControl<string>;
  dataNascimento: FormControl<string>;
  quantidadePessoas: FormControl<number>;
  dataViagem: FormControl<string>;
  hospedagemId: FormControl<HospedagemId>;
}

@Component({
  selector: 'app-cadastro-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CurrencyPipe, DatePipe],
  templateUrl: './cadastro-page.component.html',
  styleUrl: './cadastro-page.component.scss'
})
export class CadastroPageComponent {
  readonly hospedagens = HOSPEDAGENS;

  private readonly bookingService = inject(TravelBookingService);
  readonly reservas = signal<TravelBooking[]>(this.bookingService.getReservas());

  readonly form: FormGroup<BookingForm>;

  constructor(private readonly fb: NonNullableFormBuilder) {
    this.form = this.fb.group({
      nome: this.fb.control('', [Validators.required, Validators.minLength(3)]),
      email: this.fb.control('', [Validators.required, Validators.email]),
      dataNascimento: this.fb.control('', [Validators.required]),
      quantidadePessoas: this.fb.control(1, [
        Validators.required,
        Validators.min(1),
        Validators.max(12)
      ]),
      dataViagem: this.fb.control('', [Validators.required]),
      hospedagemId: this.fb.control<HospedagemId>('montanhas-flutuantes', [
        Validators.required
      ])
    });
  }

  get nome() {
    return this.form.controls.nome;
  }

  get email() {
    return this.form.controls.email;
  }

  get dataNascimento() {
    return this.form.controls.dataNascimento;
  }

  get quantidadePessoas() {
    return this.form.controls.quantidadePessoas;
  }

  get dataViagem() {
    return this.form.controls.dataViagem;
  }

  get hospedagemId() {
    return this.form.controls.hospedagemId;
  }

  hospedagemSelecionada(): HospedagemOption {
    const idSelecionado = this.hospedagemId.value;

    return (
      this.hospedagens.find((item) => item.id === idSelecionado) ??
      this.hospedagens[0]
    );
  }

  valorHospedagem(): number {
    const qtd = this.normalizarQuantidade(this.quantidadePessoas.value);
    const valor = this.normalizarNumero(this.hospedagemSelecionada().custoPorPessoa);

    return qtd * valor;
  }

  valorTranslado(): number {
    const qtd = this.normalizarQuantidade(this.quantidadePessoas.value);
    const valor = this.normalizarNumero(this.hospedagemSelecionada().taxaTransladoPorPessoa);

    return qtd * valor;
  }

  valorFinal(): number {
    return this.valorHospedagem() + this.valorTranslado();
  }

  enviar(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const hospedagem = this.hospedagemSelecionada();

    const novaReserva: TravelBooking = {
      nome: this.nome.value.trim(),
      email: this.email.value.trim().toLowerCase(),
      dataNascimento: this.dataNascimento.value,
      quantidadePessoas: this.normalizarQuantidade(this.quantidadePessoas.value),
      dataViagem: this.dataViagem.value,
      hospedagemId: hospedagem.id,
      hospedagemNome: hospedagem.nome,
      valorHospedagem: this.valorHospedagem(),
      valorTranslado: this.valorTranslado(),
      valorFinal: this.valorFinal(),
      criadoEm: new Date().toISOString()
    };

    this.reservas.set(this.bookingService.adicionarReserva(novaReserva));
    this.reiniciarFormulario();
  }

  removerReserva(index: number): void {
    this.reservas.set(this.bookingService.removerReserva(index));
  }

  trackByReserva(_: number, item: TravelBooking): string {
    return `${item.email}-${item.criadoEm}`;
  }

  private reiniciarFormulario(): void {
    this.form.reset({
      nome: '',
      email: '',
      dataNascimento: '',
      quantidadePessoas: 1,
      dataViagem: '',
      hospedagemId: 'montanhas-flutuantes'
    });
  }

  private normalizarQuantidade(valor: unknown): number {
    const numero = Number(valor);
    return Number.isFinite(numero) && numero > 0 ? numero : 0;
  }

  private normalizarNumero(valor: unknown): number {
    const numero = Number(valor);
    return Number.isFinite(numero) ? numero : 0;
  }
}