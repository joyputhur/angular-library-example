import { ModuleWithProviders } from '@angular/core';
import { LayoutConfiguration } from './lib-configuration';
import * as i0 from "@angular/core";
import * as i1 from "./layout-library.component";
import * as i2 from "./header/header.component";
import * as i3 from "./footer/footer.component";
export declare class LayoutLibraryModule {
    static forRoot(layoutConfigurat: LayoutConfiguration): ModuleWithProviders<LayoutLibraryModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<LayoutLibraryModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<LayoutLibraryModule, [typeof i1.LayoutLibraryComponent, typeof i2.HeaderComponent, typeof i3.FooterComponent], never, [typeof i1.LayoutLibraryComponent, typeof i2.HeaderComponent, typeof i3.FooterComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<LayoutLibraryModule>;
}
