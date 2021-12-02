import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersGroupsComponent } from './players-groups/players-groups.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: PlayersGroupsComponent },
];

@NgModule({
  declarations: [
    PlayersGroupsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class GroupsModule { }
