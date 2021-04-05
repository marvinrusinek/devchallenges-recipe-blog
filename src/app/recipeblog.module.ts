import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { RecipeblogComponent } from './recipeblog.component';
import { ContainerComponent } from './recipe-blog/containers/container/container.component';
import { HeaderComponent } from './recipe-blog/containers/header/header.component';
import { HeroComponent } from './recipe-blog/containers/hero/hero.component';
import { MainComponent } from './recipe-blog/containers/main/main.component';
import { FooterComponent } from './recipe-blog/containers/footer/footer.component';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'recipe-blog',
    pathMatch: 'full'
  },
  {
    path: 'recipe-blog',
    loadChildren: () =>
      import('./recipe-blog/routing/recipe-blog-routing.module').then(m => m.RecipeBlogRoutingModule)
  }
];

@NgModule({
  declarations: [
    RecipeblogComponent,
    ContainerComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NgxPageScrollCoreModule
  ],
  providers: [],
  bootstrap: [RecipeblogComponent]
})
export class RecipeblogModule { }
