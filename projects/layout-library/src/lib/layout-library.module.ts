import { ModuleWithProviders, NgModule } from '@angular/core';
import { LayoutLibraryComponent } from './layout-library.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutConfiguration } from './lib-configuration';



@NgModule({
  declarations: [
    LayoutLibraryComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
  ],
  exports: [
    LayoutLibraryComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class LayoutLibraryModule { 

  static forRoot(layoutConfigurat: LayoutConfiguration):ModuleWithProviders<LayoutLibraryModule>
  {
    return {
      ngModule: LayoutLibraryModule,
      providers: [
        {
          provide: LayoutConfiguration,
          useValue: layoutConfigurat,
        }]
      }
  }
}
