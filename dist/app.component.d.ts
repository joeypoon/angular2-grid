import { NgGridItemConfig, NgGridItemEvent } from "./interfaces/INgGrid";
export declare class MyAppComponent {
    private boxes;
    private rgb;
    private curNum;
    private gridConfig;
    private curItemCheck;
    private itemPositions;
    constructor();
    ratioDisabled: boolean;
    itemCheck: number;
    curItem: NgGridItemConfig;
    addBox(): void;
    removeBox(): void;
    updateItem(index: number, event: NgGridItemEvent): void;
    onDrag(index: number, event: NgGridItemEvent): void;
    onResize(index: number, event: NgGridItemEvent): void;
    private _generateDefaultItemConfig();
    private _randomise();
}
