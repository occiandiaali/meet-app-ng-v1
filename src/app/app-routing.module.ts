import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule' },
  // { path: 'about', loadChildren: './pages/about/about.module#AboutPageModule' },
  // { path: 'signup', loadChildren: './pages/signup/signup.module#SignupPageModule' }
  // { path: 'details', loadChildren: './pages/details/details.module#DetailsPageModule' }
  // { path: 'news', loadChildren: './pages/news/news.module#NewsPageModule' }
  // { path: 'meets', loadChildren: './pages/meets/meets.module#MeetsPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
    // RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
