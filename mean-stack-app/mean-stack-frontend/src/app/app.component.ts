import { Component, OnInit } from '@angular/core';
import { ApiService } from './api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  template: `<h1>{{ message }}</h1>`
})
export class AppComponent implements OnInit {
  message = '';

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getMessage().subscribe({
      next: (data) => (this.message = data),
      error: (err) => console.error('Error:', err)
    });
  }
}
