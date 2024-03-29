// MODULES
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from 'primeng/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
// COMPONENTS
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CadastrarClienteComponent } from './pages/cadastrar-cliente/cadastrar-cliente.component';
import { ListarClientesComponent } from './pages/listar-clientes/listar-clientes.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { InputComponent } from './components/input/input.component';
import { ListComponent } from './components/list/list.component';
// OTHERS
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { MessageService } from 'primeng/api';
import { ListSorterComponent } from './components/list-sorter/list-sorter.component';
import { InputSearchComponent } from './components/input-search/input-search.component';
import { ListPaginatorComponent } from './components/list-paginator/list-paginator.component';
import { DialogDeleteComponent } from './components/dialog-delete/dialog-delete.component';
import { DialogEditComponent } from './components/dialog-edit/dialog-edit.component';
import { FormCustomerComponent } from './components/form-customer/form-customer.component';
import { SidebarMobileComponent } from './components/sidebar-mobile/sidebar-mobile.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ToLocaleStringPipe } from './pipes/to-locale-string.pipe';
import { DialogMobileListOptionsComponent } from './components/dialog-mobile-list-options/dialog-mobile-list-options.component';
import { SearchConfigComponent } from './pages/listar-clientes/components/search-config/search-config.component';
import { ButtonAdd10ClientesComponent } from './pages/listar-clientes/components/button-add-10-clientes/button-add-10-clientes.component';
import { ButtonClearClientesListComponent } from './pages/listar-clientes/components/button-clear-clientes-list/button-clear-clientes-list.component';
import { CardsActionsComponent } from './pages/inicio/components/cards-actions/cards-actions.component';
import { CardsLastClientesAddedComponent } from './pages/inicio/components/cards-last-clientes-added/cards-last-clientes-added.component';
import { DialogImagePickerComponent } from './components/dialog-image-picker/dialog-image-picker.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { FormProfileImageComponent } from './components/form-profile-image/form-profile-image.component';
import { ProfileImageComponent } from './components/profile-image/profile-image.component';
import { ButtonsCropControlsComponent } from './components/dialog-image-picker/components/buttons-crop-controls/buttons-crop-controls.component';
import { ImagePreviewComponent } from './components/dialog-image-picker/components/image-preview/image-preview.component';
import { DialogHeaderComponent } from './components/dialog-header/dialog-header.component';

@NgModule({
    declarations: [
        AppComponent,
        SidebarComponent,
        CadastrarClienteComponent,
        ListarClientesComponent,
        PageHeaderComponent,
        InputComponent,
        ListComponent,
        ListSorterComponent,
        InputSearchComponent,
        ListPaginatorComponent,
        DialogDeleteComponent,
        DialogEditComponent,
        FormCustomerComponent,
        SidebarMobileComponent,
        InicioComponent,
        ToLocaleStringPipe,
        DialogMobileListOptionsComponent,
        SearchConfigComponent,
        ButtonAdd10ClientesComponent,
        ButtonClearClientesListComponent,
        CardsActionsComponent,
        CardsLastClientesAddedComponent,
        DialogImagePickerComponent,
        FormProfileImageComponent,
        ProfileImageComponent,
        ButtonsCropControlsComponent,
        ImagePreviewComponent,
        DialogHeaderComponent
    ],
    imports: [
        NgxMaskDirective,
        NgxMaskPipe,
        TooltipModule,
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatDialogModule,
        ConfirmPopupModule,
        ToastModule,
        HttpClientModule,
        ImageCropperModule
    ],
    providers: [
        provideNgxMask(),
        MessageService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
