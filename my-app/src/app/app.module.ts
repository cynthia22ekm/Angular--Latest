import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgSelectModule } from '@ng-select/ng-select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { IconComponent } from './components/icon/icon.component';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TextInputComponent } from './components/text-input/text-input.component';
import { FormsModule } from '@angular/forms';
import { DropdownSingleselectComponent } from './components/dropdown-singleselect/dropdown-singleselect.component';
import { DropdownMultiselectComponent } from './components/dropdown-multiselect/dropdown-multiselect.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { DropdownItemComponent } from './components/dropdown-item/dropdown-item.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    IconComponent,
    TextInputComponent,
    DropdownSingleselectComponent,
    DropdownMultiselectComponent,
    DropdownComponent,
    DropdownItemComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    NgSelectModule,
    NgMultiSelectDropDownModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
