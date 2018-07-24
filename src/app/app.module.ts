import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RouterModule, Route } from '@angular/router';
import { WindowModule } from '@progress/kendo-angular-dialog';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NavigationDashboardComponent } from './navigation/navigation-dashboard/navigation-dashboard.component';
import { AddEmployeeComponent } from './navigation/add-employee/add-employee.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { DropDownListModule } from '@progress/kendo-angular-dropdowns';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { DummyLinkComponent } from './navigation/dummy-link/dummy-link.component';
import { DropDownListFilterComponent } from './navigation/add-employee/dropdownlist-filter.component';
@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
        HeaderComponent,
        NavigationComponent,
        NavigationDashboardComponent,
        AddEmployeeComponent,
        LoginComponent,
        DummyLinkComponent,
        DropDownListFilterComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        WindowModule,
        DropDownsModule,
        DateInputsModule,
        RouterModule.forRoot([
            { path: "home", component: NavigationComponent },
            { path: "employee", component: AddEmployeeComponent },
            { path: "", component: LoginComponent },
            { path: "dummy", component: DummyLinkComponent }

        ]),
        BrowserAnimationsModule,
        ButtonsModule,
        GridModule,
        InputsModule,
        LabelModule,
        DropDownListModule,
        HttpClientModule
    ],
    providers: [AuthService],
    bootstrap: [AppComponent]
})
export class AppModule { }


