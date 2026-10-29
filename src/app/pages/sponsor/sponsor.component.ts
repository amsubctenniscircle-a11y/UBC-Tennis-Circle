import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sponsor',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sponsor.component.html',
  styleUrl: './sponsor.component.css',
})
export class SponsorComponent {}
