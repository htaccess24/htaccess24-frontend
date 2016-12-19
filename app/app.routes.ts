import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './content/home.component';
import {PageNotFoundComponent} from './content/pagenotfound.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}

export const appRoutingComponents = [HomeComponent, PageNotFoundComponent];