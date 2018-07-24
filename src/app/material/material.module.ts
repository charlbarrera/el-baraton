import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatBadgeModule} from '@angular/material/badge';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSliderModule} from '@angular/material/slider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatRadioModule} from '@angular/material/radio';
import {MatDialogModule} from '@angular/material/dialog';
import {MatStepperModule} from '@angular/material/stepper';
import {MatChipsModule} from '@angular/material/chips';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatCardModule,
    MatBadgeModule,
    MatProgressSpinnerModule,
    MatSliderModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatDialogModule,
    MatStepperModule,
    MatChipsModule,
    MatInputModule 
  ],
  exports:[
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatCardModule,
    MatBadgeModule,
    MatProgressSpinnerModule,
    MatSliderModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatDialogModule,
    MatStepperModule,
    MatChipsModule,
    MatInputModule 
  ],
  declarations: []
})
export class MaterialModule { }
