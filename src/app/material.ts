import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule } from '@angular/material'

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule],
    exports: [MatButtonModule, MatCheckboxModule], 
    // providers: [
    //     { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }
    // ]
})

export class MaterialModule { }