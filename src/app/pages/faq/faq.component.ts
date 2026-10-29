import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE } from '../../site';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css',
})
export class FaqComponent {
  email = SITE.email;
  tennisCanadaGuide = SITE.tennisCanadaGuide;
}
