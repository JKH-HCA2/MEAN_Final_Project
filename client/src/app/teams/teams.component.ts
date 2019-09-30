import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TeamsService } from './../providers/teams.service';
import { AuthService } from '../providers/auth.service';
import { LeaguesService } from '../providers/leagues.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  leagues: Array<any> = [];
  teams: Array<any> = [];
  leaguesDesc: string = "";

  constructor(private teamsService: TeamsService, private leaguesService: LeaguesService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    if(!this.authService.getAuthStatus()) {
      this.router.navigate(['login']);
    } else {
        // Preload all the leagues into DDL
        this.leaguesService.getLeagues().subscribe(data => {
        this.leagues = data;
      });
    }    
  }

  // On selection of the DDL, populate table with teams
  onSelect(val) {
    this.teamsService.getTeamsByLeagues(val).subscribe(data => {
      this.teams = data;
    });
  }

  // On click, populate table with all teams
  viewAll(): void {
    this.teamsService.getTeams().subscribe(data => {
      this.teams = data;
    });
  }

  // On click, reset view of teams
  resetBtn(): void {
    this.teams = [];
  }
}
