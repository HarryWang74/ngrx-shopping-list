import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ShoppingReducer } from './store/reducers/shopping.reducer';
import { ShoppingEffects } from './store/effects/shopping.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({
      shopping: ShoppingReducer
    }),
    EffectsModule.forRoot([ShoppingEffects])
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
