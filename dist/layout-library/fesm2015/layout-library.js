import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

class LayoutLibraryService {
    constructor() { }
}
LayoutLibraryService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: LayoutLibraryService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
LayoutLibraryService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: LayoutLibraryService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: LayoutLibraryService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: HeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
HeaderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.0.5", type: HeaderComponent, selector: "lib-header", ngImport: i0, template: "<p>Layout library header</p>\n", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: HeaderComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-header',
                    templateUrl: './header.component.html',
                    styleUrls: ['./header.component.css']
                }]
        }], ctorParameters: function () { return []; } });

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: FooterComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
FooterComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.0.5", type: FooterComponent, selector: "lib-footer", ngImport: i0, template: "<p>footer works!</p>\n", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: FooterComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-footer',
                    templateUrl: './footer.component.html',
                    styleUrls: ['./footer.component.css']
                }]
        }], ctorParameters: function () { return []; } });

class LayoutLibraryComponent {
    constructor() { }
    ngOnInit() {
    }
}
LayoutLibraryComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: LayoutLibraryComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
LayoutLibraryComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.0.5", type: LayoutLibraryComponent, selector: "lib-LayoutLibrary", ngImport: i0, template: "<lib-header>\r\n</lib-header>\r\n<ng-content>\r\n\r\n</ng-content>\r\n<lib-footer>\r\n    \r\n</lib-footer>", components: [{ type: HeaderComponent, selector: "lib-header" }, { type: FooterComponent, selector: "lib-footer" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: LayoutLibraryComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-LayoutLibrary',
                    templateUrl: './layout-library.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return []; } });

class LayoutConfiguration {
}

class LayoutLibraryModule {
    static forRoot(layoutConfigurat) {
        return {
            ngModule: LayoutLibraryModule,
            providers: [
                {
                    provide: LayoutConfiguration,
                    useValue: layoutConfigurat,
                }
            ]
        };
    }
}
LayoutLibraryModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: LayoutLibraryModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
LayoutLibraryModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: LayoutLibraryModule, declarations: [LayoutLibraryComponent,
        HeaderComponent,
        FooterComponent], exports: [LayoutLibraryComponent,
        HeaderComponent,
        FooterComponent] });
LayoutLibraryModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: LayoutLibraryModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: LayoutLibraryModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        LayoutLibraryComponent,
                        HeaderComponent,
                        FooterComponent
                    ],
                    imports: [],
                    exports: [
                        LayoutLibraryComponent,
                        HeaderComponent,
                        FooterComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of layout-library
 */

/**
 * Generated bundle index. Do not edit.
 */

export { FooterComponent, HeaderComponent, LayoutLibraryComponent, LayoutLibraryModule, LayoutLibraryService };
//# sourceMappingURL=layout-library.js.map
