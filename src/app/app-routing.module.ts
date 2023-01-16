import { NoteNotFoundComponent } from './note-not-found/note-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditNoteComponent } from './edit-note/edit-note.component';

const routes: Routes = [
  {path:"home", component: DashboardComponent},
  {path:"edit-note/:id", component: EditNoteComponent},
  {path:"", redirectTo:"/home",pathMatch:'full'},
  {path:"**", component: NoteNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
