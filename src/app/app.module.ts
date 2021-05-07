import { BrowserModule } from '@angular/platform-browser';
import {DEFAULT_CURRENCY_CODE, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './pages/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MaterialModule } from './core/material.module';



import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './pages/home/home.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { PictureCarouselComponent } from './pages/home/picture-carousel/picture-carousel.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import {AuthInterceptorInterceptor} from './services/auth-interceptor.interceptor';

import {NgxPrintModule} from 'ngx-print';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import { SncakBarComponent } from './common/sncak-bar/sncak-bar.component';
import { ConfirmationDialogComponent } from './common/confirmation-dialog/confirmation-dialog.component';
import { LoaidngRippleComponent } from './shared/loaidng-ripple/loaidng-ripple.component';
import { LoaidngEllipsisComponent } from './shared/loaidng-ellipsis/loaidng-ellipsis.component';
import { LoaidngHourglassComponent } from './shared/loaidng-hourglass/loaidng-hourglass.component';
import { LoaidngRollerComponent } from './shared/loaidng-roller/loaidng-roller.component';
import { DateAdapter } from '@angular/material/core';
import { DateFormat } from './date-format';
import {NgSelectModule} from '@ng-select/ng-select';

import {ShowHidePasswordModule} from 'ngx-show-hide-password';

import {PopoverModule} from 'ngx-smart-popover';
import {LogLevel, NgxFancyLoggerModule} from 'ngx-fancy-logger';

import {NgxMousetrapModule} from 'ngx-mousetrap';
import {TooltipModule} from 'ng2-tooltip-directive';
import { HighlightDirective } from './directives/highlight.directive';
import { FooterComponent } from './pages/footer/footer.component';
import { TutorialComponent } from './pages/tutorial/tutorial.component';
import { JavaComponent } from './pages/tutorial/java/java.component';
import { JavaHomeComponent } from './pages/tutorial/java/java-home/java-home.component';
import { JavThreadComponent } from './pages/tutorial/java/jav-thread/jav-thread.component';
import { StudentComponent } from './pages/student/student.component';
import { PythonComponent } from './pages/tutorial/python/python.component';
import { PythonHomeComponent } from './pages/tutorial/python/python-home/python-home.component';
import { PythonOverviewComponent } from './pages/tutorial/python/python-overview/python-overview.component';
import { PythonSoftwareRequiredComponent } from './pages/tutorial/python/python-software-required/python-software-required.component';
import { PythonBasicComponent } from './pages/tutorial/python/python-basic/python-basic.component';








@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PictureCarouselComponent,
    LoadingSpinnerComponent,
    SncakBarComponent,
    ConfirmationDialogComponent,
    LoaidngRippleComponent,
    LoaidngEllipsisComponent,
    LoaidngHourglassComponent,
    LoaidngRollerComponent,
    HighlightDirective,
    FooterComponent,
    TutorialComponent,
    JavaComponent,
    JavaHomeComponent,
    JavThreadComponent,
    StudentComponent,
    PythonComponent,
    PythonHomeComponent,
    PythonOverviewComponent,
    PythonSoftwareRequiredComponent,
    PythonBasicComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPrintModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    NgSelectModule,
    ShowHidePasswordModule,
    PopoverModule,
    NgxFancyLoggerModule.forRoot({
      showTime: false,
      logLevel: LogLevel.WARNING,
      levelColor: {
        [LogLevel.ERROR]: 'brown'
      }
    }),
    NgxMousetrapModule.forRoot(),
    TooltipModule,
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorInterceptor, multi: true},
              {provide: DateAdapter, useClass: DateFormat}, {provide: DEFAULT_CURRENCY_CODE, useValue: 'INR'} ],

  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private dateAdapter: DateAdapter<Date>) {
    dateAdapter.setLocale('en-in'); // DD/MM/YYYY
  }
}
