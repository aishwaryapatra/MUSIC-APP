import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import {NgxSpinnerModule} from 'ngx-spinner';
import { HttpClientModule } from '@angular/common/http';
import { SpotifyServService } from './spotify-serv.service';
import { NewReleaseComponent } from './new-release/new-release.component';
import { PlaylistAlbumsComponent } from './playlist-albums/playlist-albums.component';
import { TopPlaylistComponent } from './top-playlist/top-playlist.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatButtonModule} from '@angular/material';
import { MatCardModule} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MusicServiceService } from './music-service.service';
import { DataStoreTransferService } from './data-store-transfer.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterServiceService } from './router-service.service';
import { DashboardComponent } from './dashboard/dashboard.component';

import {MatCheckboxModule,MatToolbarModule,MatProgressSpinnerModule,MatMenuModule,MatTabsModule,MatTableModule, MatIconModule,MatSidenavModule,MatListModule} from '@angular/material';

import { LoginComponentComponent } from './login-component/login-component.component';
import { SpringDataServiceService } from './spring-data-service.service';
import { LoginServiceService } from './login-service.service';
import { RegistrationServiceService } from './registration-service.service';
import { ResgistrationComponentComponent } from './resgistration-component/resgistration-component.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { UserFavService } from './user-fav.service';
import { CountryCodeSearchComponent } from './country-code-search/country-code-search.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {InterceptorServService }from '../app/interceptor-serv.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { CommentComponent } from './comment/comment.component';
import { HoverComponentComponent } from './hover-component/hover-component.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { ChilddashboardComponent } from './childdashboard/childdashboard.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FooterCompComponent } from './footer-comp/footer-comp.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';




const routes: Routes = [
  {path:'', redirectTo:'hover',pathMatch:'full'},
  {path:'hover',component:HoverComponentComponent},
  { path: 'home', component:HomeComponent},
     {path:'newrelease', component: NewReleaseComponent},
   {path:'topplaylist',component:TopPlaylistComponent},
   // canActivate: [CanActivateRouteGuard]},
   { path: 'search', component: SearchComponent},

   //canActivate: [CanActiavteRouteGuard]},
   {path: 'head', component:  HeaderComponent },
   {path:'login', component:LoginComponentComponent},
   {path:'register',component:ResgistrationComponentComponent},
   {path: 'dashboard', component: DashboardComponent,
   children: [
     {path:'',component:ChilddashboardComponent},
     {path:'countrycode',component:CountryCodeSearchComponent},
    {path: 'recommendation',component:RecommendationComponent},
    {path:'comment',component:CommentComponent},
 
    {path: 'favourites',component:FavouritesComponent}]}
//  {path: 'signup', component: SignupComponent}

];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    HomeComponent,
    NewReleaseComponent,
    PlaylistAlbumsComponent,
    TopPlaylistComponent,
    DashboardComponent,
    LoginComponentComponent,
    ResgistrationComponentComponent,
    FavouritesComponent,
    CountryCodeSearchComponent,
    RecommendationComponent,
    CommentComponent,
    HoverComponentComponent,
    ChilddashboardComponent,
    FooterCompComponent
  ],
  imports: [
    BrowserModule,
    MatSlideToggleModule,
    CommonModule,
    MatToolbarModule,
    MatTableModule,
    MatSidenavModule,
    MatTabsModule,
    MatListModule,
    MatSnackBarModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatExpansionModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    NgbModule,
    NgxPaginationModule,
    RouterModule.forRoot(routes)
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: InterceptorServService, multi: true},SpotifyServService,MusicServiceService,DataStoreTransferService,RouterServiceService, SpringDataServiceService, LoginServiceService, RegistrationServiceService,UserFavService],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
