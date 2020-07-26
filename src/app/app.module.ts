import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlanetsComponent } from './pages/planets/planets.component';
import { PlanetComponent } from './pages/planet/planet.component';
import { AuthComponent } from './pages/auth/auth.component';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { HeaderComponent } from './components/header/header.component';
import { TableComponent } from './components/table/table.component';
import { CustomMaterialModule } from './shared/modules/material-module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './shared/guards/auth.guard';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    PlanetsComponent,
    PlanetComponent,
    AuthComponent,
    AuthFormComponent,
    HeaderComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CustomMaterialModule,
    HttpClientModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
