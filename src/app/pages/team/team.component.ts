import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TeamMember } from '../../models/team-member';
import { TEAM } from '../../data/team';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css',
})
export class TeamComponent implements OnInit {
  teamMembers: TeamMember[] = [];

  ngOnInit() {
    this.teamMembers = TEAM;
  }
}
