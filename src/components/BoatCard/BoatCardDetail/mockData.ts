export const mockBoatData = {
  name: 'Jeannau Sun Odyssey 45.2',
  boatType: 'Split, Croatia',
  builtAt: 2001,
  viewInDay: 69,
  length: 12.04,
  cabins: 4,
  guests: 10,
  totalReview: 3,
  averageReviewValue: 5,
  options: ['Sicherungsshein', 'luxury'],
  sailType: 'Rolling Mainsail',
  freeExtras: ['AirCon, WIFI, Very Long Extra Description'],
  price: 1083.00,
  bookingLink: 'something that I dont know'
}

export interface IBoatDetail {
  name: string;
  boatType: string;
  builtAt?: string | number;
  viewInDay: string | number;
  length: string | number;
  cabins: string | number;
  guests: string | number;
  totalReview: string | number;
  averageReviewValue: string | number;
  options: string[];
  sailType: string;
  freeExtras: string[];
  price: number;
  bookingLink: string;
}
