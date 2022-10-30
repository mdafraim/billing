import { EditInvoiceComponent } from './invoice/edit-invoice/edit-invoice.component';
import { AddInvoiceComponent } from './invoice/add-invoice/add-invoice.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { AddCustomerComponent } from './customer/add-customer/add-customer.component';
import { CustomerComponent } from './customer/customer.component';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { FooterLayoutComponent } from './layout/footer-layout/footer-layout.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { SignupComponent } from './common/signup/signup.component';
import { LoginComponent } from './common/login/login.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import {  FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { EditCustomerComponent } from './customer/edit-customer/edit-customer.component';

registerLocaleData(en);

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    FooterLayoutComponent,
    MainLayoutComponent,
    CustomerComponent,
    AddCustomerComponent,
    EditCustomerComponent,
    InvoiceComponent,
    AddInvoiceComponent,
    EditInvoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzGridModule,
    NzLayoutModule,
    NzMenuModule,
    NzAvatarModule,
    NzDropDownModule,
    NzSpaceModule,
    FormsModule,
    NzInputModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzMenuModule,
    NzCheckboxModule,
    NzSelectModule,
    NzSwitchModule,
    NzUploadModule,
    NzImageModule,
    NzListModule,
    NzPopoverModule,
    NzTableModule,
    NzTabsModule,
    NzToolTipModule,
    NzBadgeModule,
    NzInputNumberModule,
    NzRadioModule,
    NzFormModule,
    NzCardModule,
    NzMessageModule,
    ScrollingModule,
    DragDropModule,
    NzDividerModule
  ],
  providers: [ { provide: NZ_I18N, useValue: en_US }, { provide: NZ_ICONS, useValue: icons } ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
