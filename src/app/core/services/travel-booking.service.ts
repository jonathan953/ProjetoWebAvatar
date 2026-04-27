import { Injectable } from '@angular/core';
import { TravelBooking } from '../../shared/models/travel-booking.model';

@Injectable({
  providedIn: 'root'
})
export class TravelBookingService {
  private readonly storageKey = 'avatar-bookings';

  getReservas(): TravelBooking[] {
    if (typeof localStorage === 'undefined') {
      return [];
    }

    const rawValue = localStorage.getItem(this.storageKey);
    if (!rawValue) {
      return [];
    }

    try {
      return JSON.parse(rawValue) as TravelBooking[];
    } catch {
      return [];
    }
  }

  salvarReservas(reservas: TravelBooking[]): void {
    if (typeof localStorage === 'undefined') {
      return;
    }

    localStorage.setItem(this.storageKey, JSON.stringify(reservas));
  }

  adicionarReserva(novaReserva: TravelBooking): TravelBooking[] {
    const atualizadas = [novaReserva, ...this.getReservas()];
    this.salvarReservas(atualizadas);
    return atualizadas;
  }

  removerReserva(index: number): TravelBooking[] {
    const atualizadas = this.getReservas().filter((_, currentIndex) => currentIndex !== index);
    this.salvarReservas(atualizadas);
    return atualizadas;
  }

  limparReservas(): void {
    if (typeof localStorage === 'undefined') {
      return;
    }

    localStorage.removeItem(this.storageKey);
  }
}
