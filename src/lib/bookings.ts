import type { Destination, RiskLevel, TripInterest } from '../data/destinations';

export interface BookingOptions {
  budget: number;
  duration: string;
  interests: TripInterest[];
  risk: RiskLevel;
  formula: string;
}

export interface Booking {
  id: string;
  date: string;
  destinationId: string;
  destinationTitle: string;
  options: BookingOptions;
}

const STORAGE_KEY = 'bookings';

export function readBookings(): Booking[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed as Booking[];
  } catch {
    return [];
  }
}

export function saveBooking(destination: Destination, options: BookingOptions): Booking {
  const booking: Booking = {
    id: crypto.randomUUID(),
    date: new Date().toISOString(),
    destinationId: destination.id,
    destinationTitle: destination.title,
    options,
  };

  const previous = readBookings();
  localStorage.setItem(STORAGE_KEY, JSON.stringify([booking, ...previous]));
  return booking;
}

export function removeBooking(bookingId: string): Booking[] {
  const next = readBookings().filter((booking) => booking.id !== bookingId);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  return next;
}
