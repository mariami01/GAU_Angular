import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {
  apartments: Apartment[] = [];

  constructor() { }
  getApartments(): Apartment[] {
    return [
      {
        id: 1,
        name: 'Luxury Beachfront Villa',
        address: '123 Ocean Drive',
        city: 'Miami',
        country: 'USA',
        description: 'A stunning villa with direct beach access and breathtaking ocean views.',
        reviews: 15,
        stars: 4.8,
        pricePerNight: 500,
        bookedDates: ['2024-05-10', '2024-05-15', '2024-05-20'],
        features: ['Pool', 'Free WiFi', 'Parking', 'Business Services'],
        photo: 'assets/Apartments/1.jpeg'
      },
      {
        id: 2,
        name: 'Modern Downtown Loft',
        address: '456 Main Street',
        city: 'New York City',
        country: 'USA',
        description: 'Chic loft apartment in the heart of NYC with skyline views.',
        reviews: 10,
        stars: 4.5,
        pricePerNight: 300,
        bookedDates: ['2024-05-12', '2024-05-17', '2024-05-22'],
        features: ['Free WiFi', 'Parking'],
        photo: 'assets/Apartments/2.jpeg'
      },
      {
        id: 3,
        name: 'Cozy Mountain Cabin',
        address: '789 Forest Avenue',
        city: 'Denver',
        country: 'USA',
        description: 'Escape to this charming cabin nestled in the Rocky Mountains.',
        reviews: 20,
        stars: 4.9,
        pricePerNight: 200,
        bookedDates: ['2024-05-11', '2024-05-16', '2024-05-21'],
        features: ['Mountain View', 'Fireplace', 'Pet Friendly'],
        photo: 'assets/Apartments/3.jpeg'
      },
      {
        id: 4,
        name: 'Seaside Cottage Retreat',
        address: '321 Beach Road',
        city: 'Sydney',
        country: 'Australia',
        description: 'Tranquil cottage just steps away from the beach with panoramic ocean views.',
        reviews: 12,
        stars: 4.7,
        pricePerNight: 450,
        bookedDates: ['2024-05-13', '2024-05-18', '2024-05-23'],
        features: ['Beachfront', 'Balcony', 'Garden'],
        photo: 'assets/Apartments/4.jpeg'
      },
      {
        id: 5,
        name: 'Urban Studio Apartment',
        address: '10 Elm Street',
        city: 'London',
        country: 'UK',
        description: 'Sleek and modern studio apartment in the heart of London.',
        reviews: 8,
        stars: 4.3,
        pricePerNight: 150,
        bookedDates: ['2024-05-14', '2024-05-19', '2024-05-24'],
        features: ['Central Location', 'Kitchenette'],
        photo: 'assets/Apartments/5.jpeg'
      },
      {
        id: 6,
        name: 'Rustic Farmhouse Retreat',
        address: '567 Meadow Lane',
        city: 'Tuscany',
        country: 'Italy',
        description: 'Experience the charm of rural Tuscany in this cozy farmhouse.',
        reviews: 18,
        stars: 4.6,
        pricePerNight: 250,
        bookedDates: ['2024-05-15', '2024-05-20', '2024-05-25'],
        features: ['Countryside', 'Garden', 'Wine Tasting'],
        photo: 'assets/Apartments/6.jpeg'
      },
      {
        id: 7,
        name: 'City View Penthouse',
        address: '789 Skyline Avenue',
        city: 'Tokyo',
        country: 'Japan',
        description: 'Luxurious penthouse with stunning views of Tokyo skyline.',
        reviews: 25,
        stars: 4.9,
        pricePerNight: 700,
        bookedDates: ['2024-05-16', '2024-05-21', '2024-05-26'],
        features: ['City View', 'Spa', 'Fitness Center'],
        photo: 'assets/Apartments/7.jpeg'
      },
      {
        id: 8,
        name: 'Historic Mansion Stay',
        address: '101 Heritage Drive',
        city: 'Paris',
        country: 'France',
        description: 'Live like royalty in this elegant mansion located in the heart of Paris.',
        reviews: 30,
        stars: 5.0,
        pricePerNight: 1000,
        bookedDates: ['2024-05-17', '2024-05-22', '2024-05-27'],
        features: ['Historic', 'Gourmet Dining', 'Concierge Service'],
        photo: 'assets/Apartments/8.jpeg'
      },
      {
        id: 9,
        name: 'Lakeside Retreat',
        address: '456 Lakefront Drive',
        city: 'Vancouver',
        country: 'Canada',
        description: 'Tranquil retreat overlooking a pristine lake surrounded by nature.',
        reviews: 15,
        stars: 4.8,
        pricePerNight: 400,
        bookedDates: ['2024-05-18', '2024-05-23', '2024-05-28'],
        features: ['Lake View', 'Hiking Trails', 'Kayaking'],
        photo: 'assets/Apartments/9.jpeg'
      },
      {
        id: 10,
        name: 'Mountain Chalet Getaway',
        address: '789 Summit Avenue',
        city: 'Aspen',
        country: 'USA',
        description: 'Cozy chalet nestled in the Colorado Rockies, perfect for a ski getaway.',
        reviews: 22,
        stars: 4.7,
        pricePerNight: 350,
        bookedDates: ['2024-05-19', '2024-05-24', '2024-05-29'],
        features: ['Ski-in/Ski-out', 'Hot Tub', 'Fireplace'],
        photo: 'assets/Apartments/10.jpeg'
      }
    ];
  }
}

export interface Apartment {
  id: number;
  name: string;
  address: string;
  city: string;
  country: string;
  description: string;
  reviews: number;
  stars: number;
  pricePerNight: number;
  bookedDates: string[];
  features: string[];
  photo: string;
}