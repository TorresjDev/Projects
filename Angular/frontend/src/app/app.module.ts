import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { DefaultButtonComponent } from './components/partials/default-button/default-button.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { InputContainerComponent } from './components/partials/input-container/input-container.component';
import { InputValidationComponent } from './components/partials/input-validation/input-validation.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { NotFoundComponent } from './components/partials/not-found/not-found.component';
import { RatingModule } from 'ng-starrating';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './components/partials/search/search.component';
import { TagsComponent } from './components/partials/tags/tags.component';
import { TitleComponent } from './components/partials/title/title.component';
import { ToastrModule } from 'ngx-toastr';
import { TextInputComponent } from './components/partials/text-input/text-input.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CartPageComponent,
    DefaultButtonComponent,
    FoodPageComponent,
    HeaderComponent,
    HomeComponent,
    InputContainerComponent,
    InputValidationComponent,
    LoginPageComponent,
    NotFoundComponent,
    SearchComponent,
    TagsComponent,
    TitleComponent,
    TextInputComponent,
    RegisterPageComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RatingModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      newestOnTop: false,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
