import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface Treatment {
  id: string;
  name: string;
  description: string;
  category: string;
  duration: string;
  imageUrl: string;
  benefits: string[];
}

export interface ContactInquiry {
  id?: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  isRead?: boolean;
  createdAt?: string;
}

@Injectable({
  providedIn: 'root'
})
export class HospitalService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  // Get all specialized treatments
  getTreatments(): Observable<Treatment[]> {
    return this.http.get<Treatment[]>(`${this.apiUrl}/treatments`);
  }

  // Submit a contact inquiry
  submitInquiry(inquiry: ContactInquiry): Observable<ContactInquiry> {
    return this.http.post<ContactInquiry>(`${this.apiUrl}/contactinquiries`, inquiry);
  }

}
