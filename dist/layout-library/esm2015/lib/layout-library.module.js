import { NgModule } from '@angular/core';
import { LayoutLibraryComponent } from './layout-library.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutConfiguration } from './lib-configuration';
import * as i0 from "@angular/core";
export class LayoutLibraryModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LWxpYnJhcnkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbGF5b3V0LWxpYnJhcnkvc3JjL2xpYi9sYXlvdXQtbGlicmFyeS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzVELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFrQjFELE1BQU0sT0FBTyxtQkFBbUI7SUFFOUIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxnQkFBcUM7UUFFbEQsT0FBTztZQUNMLFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxtQkFBbUI7b0JBQzVCLFFBQVEsRUFBRSxnQkFBZ0I7aUJBQzNCO2FBQUM7U0FDSCxDQUFBO0lBQ0wsQ0FBQzs7Z0hBWlUsbUJBQW1CO2lIQUFuQixtQkFBbUIsaUJBWjVCLHNCQUFzQjtRQUN0QixlQUFlO1FBQ2YsZUFBZSxhQUtmLHNCQUFzQjtRQUN0QixlQUFlO1FBQ2YsZUFBZTtpSEFHTixtQkFBbUIsWUFSckIsRUFDUjsyRkFPVSxtQkFBbUI7a0JBZC9CLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLHNCQUFzQjt3QkFDdEIsZUFBZTt3QkFDZixlQUFlO3FCQUNoQjtvQkFDRCxPQUFPLEVBQUUsRUFDUjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1Asc0JBQXNCO3dCQUN0QixlQUFlO3dCQUNmLGVBQWU7cUJBQ2hCO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExheW91dExpYnJhcnlDb21wb25lbnQgfSBmcm9tICcuL2xheW91dC1saWJyYXJ5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL2hlYWRlci9oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEZvb3RlckNvbXBvbmVudCB9IGZyb20gJy4vZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGF5b3V0Q29uZmlndXJhdGlvbiB9IGZyb20gJy4vbGliLWNvbmZpZ3VyYXRpb24nO1xuXG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTGF5b3V0TGlicmFyeUNvbXBvbmVudCxcbiAgICBIZWFkZXJDb21wb25lbnQsXG4gICAgRm9vdGVyQ29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIExheW91dExpYnJhcnlDb21wb25lbnQsXG4gICAgSGVhZGVyQ29tcG9uZW50LFxuICAgIEZvb3RlckNvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIExheW91dExpYnJhcnlNb2R1bGUgeyBcblxuICBzdGF0aWMgZm9yUm9vdChsYXlvdXRDb25maWd1cmF0OiBMYXlvdXRDb25maWd1cmF0aW9uKTpNb2R1bGVXaXRoUHJvdmlkZXJzPExheW91dExpYnJhcnlNb2R1bGU+XG4gIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IExheW91dExpYnJhcnlNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IExheW91dENvbmZpZ3VyYXRpb24sXG4gICAgICAgICAgdXNlVmFsdWU6IGxheW91dENvbmZpZ3VyYXQsXG4gICAgICAgIH1dXG4gICAgICB9XG4gIH1cbn1cbiJdfQ==