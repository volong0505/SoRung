import { NgModule } from "@angular/core";
import { VNDCurrencyPipe } from "./vnd_currency_pipe";

@NgModule({
    imports: [],
    declarations: [
        VNDCurrencyPipe
    ],
    exports: [
        VNDCurrencyPipe
    ]
})
export class PipesModule {}