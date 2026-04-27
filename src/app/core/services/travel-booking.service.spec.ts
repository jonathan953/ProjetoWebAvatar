import { TestBed } from '@angular/core/testing';
import { TravelBookingService } from './travel-booking.service';
import { TravelBooking } from '../../shared/models/travel-booking.model';

const mockReserva: TravelBooking = {
  nome: 'Jake Sully',
  email: 'jake@pandora.com',
  dataNascimento: '1990-10-10',
  quantidadePessoas: 2,
  dataViagem: '2026-08-20',
  hospedagemId: 'montanhas-flutuantes',
  hospedagemNome: 'Montanhas Flutuantes',
  valorHospedagem: 3600,
  valorTranslado: 560,
  valorFinal: 4160,
  criadoEm: '2026-04-02T10:00:00.000Z'
};

describe('TravelBookingService', () => {
  let service: TravelBookingService;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravelBookingService);
  });

  it('deve retornar lista vazia quando não houver reservas', () => {
    expect(service.getReservas()).toEqual([]);
  });

  it('deve adicionar e persistir uma reserva', () => {
    const reservas = service.adicionarReserva(mockReserva);

    expect(reservas).toHaveLength(1);
    expect(service.getReservas()[0].email).toBe('jake@pandora.com');
  });

  it('deve remover uma reserva pelo índice', () => {
    service.salvarReservas([mockReserva, { ...mockReserva, email: 'neytiri@pandora.com' }]);

    const reservas = service.removerReserva(0);

    expect(reservas).toHaveLength(1);
    expect(reservas[0].email).toBe('neytiri@pandora.com');
  });
});
