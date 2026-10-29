import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MembershipTiersComponent } from '../../components/membership-tiers.component';
import { SkillGuideComponent } from '../../components/skill-guide.component';

@Component({
  selector: 'app-join',
  standalone: true,
  imports: [RouterLink, MembershipTiersComponent, SkillGuideComponent],
  templateUrl: './join.component.html',
  styleUrl: './join.component.css',
})
export class JoinComponent {}
