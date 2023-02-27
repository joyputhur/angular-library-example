export interface IEnvironment {
    production:boolean;
    apiBaseUrl: string;

}
export class LayoutConfiguration
{
    environment:IEnvironment 
}