"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
// Annotation section
var MyAppComponent = (function () {
    function MyAppComponent() {
        this.boxes = [];
        this.rgb = '#efefef';
        this.curNum = 5;
        this.gridConfig = {
            'margins': [5],
            'draggable': true,
            'resizable': true,
            'max_cols': 0,
            'max_rows': 0,
            'visible_cols': 0,
            'visible_rows': 0,
            'min_cols': 1,
            'min_rows': 1,
            'col_width': 2,
            'row_height': 2,
            'cascade': 'up',
            'min_width': 50,
            'min_height': 50,
            'fix_to_grid': false,
            'auto_style': true,
            'auto_resize': false,
            'maintain_ratio': false,
            'prefer_new': false,
            'zoom_on_drag': false,
            'limit_to_screen': true
        };
        this.curItemCheck = 0;
        this.itemPositions = [];
        for (var i = 0; i < 4; i++) {
            var conf = this._generateDefaultItemConfig();
            conf.payload = 1 + i;
            this.boxes[i] = { id: i + 1, config: conf };
        }
    }
    Object.defineProperty(MyAppComponent.prototype, "ratioDisabled", {
        get: function () {
            return (this.gridConfig.max_rows > 0 && this.gridConfig.visible_cols > 0) ||
                (this.gridConfig.max_cols > 0 && this.gridConfig.visible_rows > 0) ||
                (this.gridConfig.visible_cols > 0 && this.gridConfig.visible_rows > 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyAppComponent.prototype, "itemCheck", {
        get: function () {
            return this.curItemCheck;
        },
        set: function (v) {
            console.log(v);
            this.curItemCheck = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyAppComponent.prototype, "curItem", {
        get: function () {
            return this.boxes[this.curItemCheck] ? this.boxes[this.curItemCheck].config : {};
        },
        enumerable: true,
        configurable: true
    });
    MyAppComponent.prototype.addBox = function () {
        var conf = this._generateDefaultItemConfig();
        conf.payload = this.curNum++;
        this.boxes.push({ id: conf.payload, config: conf });
    };
    MyAppComponent.prototype.removeBox = function () {
        if (this.boxes[this.curItemCheck]) {
            this.boxes.splice(this.curItemCheck, 1);
        }
    };
    MyAppComponent.prototype.updateItem = function (index, event) {
        // Do something here
    };
    MyAppComponent.prototype.onDrag = function (index, event) {
        // Do something here
    };
    MyAppComponent.prototype.onResize = function (index, event) {
        // Do something here
    };
    MyAppComponent.prototype._generateDefaultItemConfig = function () {
        return { 'dragHandle': '.handle', 'col': 1, 'row': 1, 'sizex': 1, 'sizey': 1 };
    };
    MyAppComponent.prototype._randomise = function () {
        for (var x in this.boxes) {
            this.boxes[x].config.col = Math.floor(Math.random() * 6) + 1;
            this.boxes[x].config.row = 1;
        }
    };
    MyAppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app.html',
            styleUrls: ['app.css', 'NgGrid.css'],
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [])
    ], MyAppComponent);
    return MyAppComponent;
}());
exports.MyAppComponent = MyAppComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDOUIsQ0FBQztJQUNGLENBQUM7SUFqR0Y7UUFBQyxnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLFVBQVU7WUFDdkIsU0FBUyxFQUFFLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQztZQUNwQyxhQUFhLEVBQUUsd0JBQWlCLENBQUMsSUFBSTtTQUNyQyxDQUFDOztzQkFBQTtJQTZGRixxQkFBQztBQUFELENBM0ZBLEFBMkZDLElBQUE7QUEzRlksc0JBQWMsaUJBMkYxQixDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0dyaWRDb25maWcsIE5nR3JpZEl0ZW1Db25maWcsIE5nR3JpZEl0ZW1FdmVudCB9IGZyb20gXCIuL2ludGVyZmFjZXMvSU5nR3JpZFwiO1xuXG5pbnRlcmZhY2UgQm94IHtcblx0aWQ6IG51bWJlcjtcblx0Y29uZmlnOiBOZ0dyaWRJdGVtQ29uZmlnO1xufVxuXG4vLyBBbm5vdGF0aW9uIHNlY3Rpb25cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ215LWFwcCcsXG5cdHRlbXBsYXRlVXJsOiAnYXBwLmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnYXBwLmNzcycsICdOZ0dyaWQuY3NzJ10sLy8gJ05nR3JpZF9GaXhTbWFsbC5jc3MnXSxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbi8vIENvbXBvbmVudCBjb250cm9sbGVyXG5leHBvcnQgY2xhc3MgTXlBcHBDb21wb25lbnQge1xuXHRwcml2YXRlIGJveGVzOiBBcnJheTxCb3g+ID0gW107XG5cdHByaXZhdGUgcmdiOiBzdHJpbmcgPSAnI2VmZWZlZic7XG5cdHByaXZhdGUgY3VyTnVtOiBudW1iZXIgPSA1O1xuXHRwcml2YXRlIGdyaWRDb25maWc6IE5nR3JpZENvbmZpZyA9IDxOZ0dyaWRDb25maWc+e1xuXHRcdCdtYXJnaW5zJzogWzVdLFxuXHRcdCdkcmFnZ2FibGUnOiB0cnVlLFxuXHRcdCdyZXNpemFibGUnOiB0cnVlLFxuXHRcdCdtYXhfY29scyc6IDAsXG5cdFx0J21heF9yb3dzJzogMCxcblx0XHQndmlzaWJsZV9jb2xzJzogMCxcblx0XHQndmlzaWJsZV9yb3dzJzogMCxcblx0XHQnbWluX2NvbHMnOiAxLFxuXHRcdCdtaW5fcm93cyc6IDEsXG5cdFx0J2NvbF93aWR0aCc6IDIsXG5cdFx0J3Jvd19oZWlnaHQnOiAyLFxuXHRcdCdjYXNjYWRlJzogJ3VwJyxcblx0XHQnbWluX3dpZHRoJzogNTAsXG5cdFx0J21pbl9oZWlnaHQnOiA1MCxcblx0XHQnZml4X3RvX2dyaWQnOiBmYWxzZSxcblx0XHQnYXV0b19zdHlsZSc6IHRydWUsXG5cdFx0J2F1dG9fcmVzaXplJzogZmFsc2UsXG5cdFx0J21haW50YWluX3JhdGlvJzogZmFsc2UsXG5cdFx0J3ByZWZlcl9uZXcnOiBmYWxzZSxcblx0XHQnem9vbV9vbl9kcmFnJzogZmFsc2UsXG5cdFx0J2xpbWl0X3RvX3NjcmVlbic6IHRydWVcblx0fTtcblx0cHJpdmF0ZSBjdXJJdGVtQ2hlY2s6IG51bWJlciA9IDA7XG5cdHByaXZhdGUgaXRlbVBvc2l0aW9uczogQXJyYXk8YW55PiA9IFtdO1xuXHRcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCA0OyBpKyspIHtcblx0XHRcdGNvbnN0IGNvbmYgPSB0aGlzLl9nZW5lcmF0ZURlZmF1bHRJdGVtQ29uZmlnKCk7XG5cdFx0XHRjb25mLnBheWxvYWQgPSAxICsgaTtcblx0XHRcdHRoaXMuYm94ZXNbaV0gPSB7IGlkOiBpICsgMSwgY29uZmlnOiBjb25mIH07XG5cdFx0fVxuXHR9XG5cdFxuXHRnZXQgcmF0aW9EaXNhYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gKHRoaXMuZ3JpZENvbmZpZy5tYXhfcm93cyA+IDAgJiYgdGhpcy5ncmlkQ29uZmlnLnZpc2libGVfY29scyA+IDApIHx8XG5cdFx0XHQodGhpcy5ncmlkQ29uZmlnLm1heF9jb2xzID4gMCAmJiB0aGlzLmdyaWRDb25maWcudmlzaWJsZV9yb3dzID4gMCkgfHxcblx0XHRcdCh0aGlzLmdyaWRDb25maWcudmlzaWJsZV9jb2xzID4gMCAmJiB0aGlzLmdyaWRDb25maWcudmlzaWJsZV9yb3dzID4gMCk7XG5cdH1cblx0XG5cdGdldCBpdGVtQ2hlY2soKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5jdXJJdGVtQ2hlY2s7XG5cdH1cblx0XG5cdHNldCBpdGVtQ2hlY2sodjogbnVtYmVyKSB7XG5cdFx0Y29uc29sZS5sb2codik7XG5cdFx0dGhpcy5jdXJJdGVtQ2hlY2sgPSB2O1xuXHR9XG5cdFxuXHRnZXQgY3VySXRlbSgpOiBOZ0dyaWRJdGVtQ29uZmlnIHtcblx0XHRyZXR1cm4gdGhpcy5ib3hlc1t0aGlzLmN1ckl0ZW1DaGVja10gPyB0aGlzLmJveGVzW3RoaXMuY3VySXRlbUNoZWNrXS5jb25maWcgOiB7fTtcblx0fVxuXHRcblx0YWRkQm94KCk6IHZvaWQge1xuXHRcdGNvbnN0IGNvbmY6IE5nR3JpZEl0ZW1Db25maWcgPSB0aGlzLl9nZW5lcmF0ZURlZmF1bHRJdGVtQ29uZmlnKCk7XG5cdFx0Y29uZi5wYXlsb2FkID0gdGhpcy5jdXJOdW0rKztcblx0XHR0aGlzLmJveGVzLnB1c2goeyBpZDogY29uZi5wYXlsb2FkLCBjb25maWc6IGNvbmYgfSk7XG5cdH1cblx0XG5cdHJlbW92ZUJveCgpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5ib3hlc1t0aGlzLmN1ckl0ZW1DaGVja10pIHtcblx0XHRcdHRoaXMuYm94ZXMuc3BsaWNlKHRoaXMuY3VySXRlbUNoZWNrLCAxKTtcblx0XHR9XG5cdH1cblx0XG5cdHVwZGF0ZUl0ZW0oaW5kZXg6IG51bWJlciwgZXZlbnQ6IE5nR3JpZEl0ZW1FdmVudCk6IHZvaWQge1xuXHRcdC8vIERvIHNvbWV0aGluZyBoZXJlXG5cdH1cblx0XG5cdG9uRHJhZyhpbmRleDogbnVtYmVyLCBldmVudDogTmdHcmlkSXRlbUV2ZW50KTogdm9pZCB7XG5cdFx0Ly8gRG8gc29tZXRoaW5nIGhlcmVcblx0fVxuXHRcblx0b25SZXNpemUoaW5kZXg6IG51bWJlciwgZXZlbnQ6IE5nR3JpZEl0ZW1FdmVudCk6IHZvaWQge1xuXHRcdC8vIERvIHNvbWV0aGluZyBoZXJlXG5cdH1cblx0XG5cdHByaXZhdGUgX2dlbmVyYXRlRGVmYXVsdEl0ZW1Db25maWcoKTogTmdHcmlkSXRlbUNvbmZpZyB7XG5cdFx0cmV0dXJuIHsgJ2RyYWdIYW5kbGUnOiAnLmhhbmRsZScsICdjb2wnOiAxLCAncm93JzogMSwgJ3NpemV4JzogMSwgJ3NpemV5JzogMSB9O1xuXHR9XG5cdFxuXHRwcml2YXRlIF9yYW5kb21pc2UoKTogdm9pZCB7XG5cdFx0Zm9yICh2YXIgeCBpbiB0aGlzLmJveGVzKSB7XG5cdFx0XHR0aGlzLmJveGVzW3hdLmNvbmZpZy5jb2wgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA2KSArIDE7XG5cdFx0XHR0aGlzLmJveGVzW3hdLmNvbmZpZy5yb3cgPSAxO1xuXHRcdH1cblx0fVxufSJdfQ==
