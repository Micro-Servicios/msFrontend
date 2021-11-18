import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { HeaderComponent } from '../components/header/header.component';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
@NgModule({
    declarations: [
        HeaderComponent,
    ],
    exports: [
        HeaderComponent,
        MatFormFieldModule
    ],
      imports: [
        CommonModule,
        MatToolbarModule,
        MatButtonModule,
        RouterModule,
        ReactiveFormsModule,
        MatSidenavModule,
        MatListModule,
        MatTableModule,
        MatFormFieldModule,
        MatCardModule, 
        MatInputModule
      ],
    
})

export class MaterialModule{};