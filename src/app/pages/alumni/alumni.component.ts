import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE } from '../../site';

@Component({
  selector: 'app-alumni',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './alumni.component.html',
  styleUrl: './alumni.component.css',
})
export class AlumniComponent {
  email = SITE.email;
}
