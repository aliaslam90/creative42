export interface Office {
    id: string;
    name: string;
    city: string;
    emirate: string;
    lat: number;
    lng: number;
    address: string;
    phone: string;
    email: string;
    hours: string;
    directionsUrl: string;
    image?: string | null;
}
