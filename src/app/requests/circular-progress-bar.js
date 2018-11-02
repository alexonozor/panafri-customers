"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CircularProgressBarComponent = /** @class */ (function () {
    function CircularProgressBarComponent() {
        this.size = 100;
        this.progress = 0;
        this.textColor = "#bfbfc4";
        this.fillColor = "#FDA458";
        this.fillBackgroundColor = "#efeff4";
        this.offset = 0;
    }
    Object.defineProperty(CircularProgressBarComponent.prototype, "height", {
        get: function () {
            return Math.min(this.size, 250);
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(CircularProgressBarComponent.prototype, "value", {
        get: function () {
            return Math.min(this.progress, 100);
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(CircularProgressBarComponent.prototype, "text", {
        get: function () {
            return this.value.toFixed() + "%";
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(CircularProgressBarComponent.prototype, "textSize", {
        get: function () {
            return this.height / 3.5;
        },
        enumerable: true,
        configurable: true
    });
    ;
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], CircularProgressBarComponent.prototype, "size", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], CircularProgressBarComponent.prototype, "progress", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], CircularProgressBarComponent.prototype, "textColor", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], CircularProgressBarComponent.prototype, "fillColor", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], CircularProgressBarComponent.prototype, "fillBackgroundColor", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], CircularProgressBarComponent.prototype, "offset", void 0);
    CircularProgressBarComponent = __decorate([
        core_1.Component({
            selector: "circularProgressBar",
            template: "\n    <GridLayout [height]=\"height\" [width]=\"height\">\n        <RadRadialGauge>\n            <RadialScale tkRadialGaugeScales startAngle=\"-90\" sweepAngle=\"360\">\n                <ScaleStyle tkRadialScaleStyle ticksVisible=\"false\" labelsVisible=\"false\" lineThickness=\"0\">\n                </ScaleStyle>\n\n                <RadialBarIndicator tkRadialScaleIndicators minimum=\"0\" maximum=\"100\">\n                    <BarIndicatorStyle tkRadialBarIndicatorStyle [fillColor]=\"fillBackgroundColor\" cap=\"Round\" barWidth=\"0.1\">\n                    </BarIndicatorStyle>\n                </RadialBarIndicator>\n\n                <RadialBarIndicator tkRadialScaleIndicators minimum=\"0\" [maximum]=\"value\" isAnimated=\"true\">\n                    <BarIndicatorStyle tkRadialBarIndicatorStyle [fillColor]=\"fillColor\" cap=\"Round\" barWidth=\"0.1\">\n                    </BarIndicatorStyle>\n                </RadialBarIndicator>\n            </RadialScale>\n        </RadRadialGauge>\n        <Label [text]=\"text\" [color]=\"textColor\" [fontSize]=\"textSize\" class=\"m-x-auto m-y-auto\" [marginTop]=\"offset\"></Label>\n    </GridLayout>\n    ",
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        })
    ], CircularProgressBarComponent);
    return CircularProgressBarComponent;
}());
exports.CircularProgressBarComponent = CircularProgressBarComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2lyY3VsYXItcHJvZ3Jlc3MtYmFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2lyY3VsYXItcHJvZ3Jlc3MtYmFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBFO0FBMkIxRTtJQXpCQTtRQTBCYSxTQUFJLEdBQUcsR0FBRyxDQUFDO1FBQ1gsYUFBUSxHQUFHLENBQUMsQ0FBQztRQUNiLGNBQVMsR0FBRyxTQUFTLENBQUM7UUFDdEIsY0FBUyxHQUFHLFNBQVMsQ0FBQztRQUN0Qix3QkFBbUIsR0FBRyxTQUFTLENBQUM7UUFDaEMsV0FBTSxHQUFHLENBQUMsQ0FBQztJQWN4QixDQUFDO0lBWkcsc0JBQUksZ0RBQU07YUFBVjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDcEMsQ0FBQzs7O09BQUE7SUFBQSxDQUFDO0lBQ0Ysc0JBQUksK0NBQUs7YUFBVDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDeEMsQ0FBQzs7O09BQUE7SUFBQSxDQUFDO0lBQ0Ysc0JBQUksOENBQUk7YUFBUjtZQUNJLE1BQU0sQ0FBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxNQUFHLENBQUM7UUFDdEMsQ0FBQzs7O09BQUE7SUFBQSxDQUFDO0lBQ0Ysc0JBQUksa0RBQVE7YUFBWjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUM3QixDQUFDOzs7T0FBQTtJQUFBLENBQUM7SUFsQk87UUFBUixZQUFLLEVBQUU7OzhEQUFZO0lBQ1g7UUFBUixZQUFLLEVBQUU7O2tFQUFjO0lBQ2I7UUFBUixZQUFLLEVBQUU7O21FQUF1QjtJQUN0QjtRQUFSLFlBQUssRUFBRTs7bUVBQXVCO0lBQ3RCO1FBQVIsWUFBSyxFQUFFOzs2RUFBaUM7SUFDaEM7UUFBUixZQUFLLEVBQUU7O2dFQUFZO0lBTlgsNEJBQTRCO1FBekJ4QyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLHFCQUFxQjtZQUMvQixRQUFRLEVBQUUsK29DQW9CVDtZQUNELGVBQWUsRUFBRSw4QkFBdUIsQ0FBQyxNQUFNO1NBQ2xELENBQUM7T0FDVyw0QkFBNEIsQ0FvQnhDO0lBQUQsbUNBQUM7Q0FBQSxBQXBCRCxJQW9CQztBQXBCWSxvRUFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImNpcmN1bGFyUHJvZ3Jlc3NCYXJcIixcbiAgICB0ZW1wbGF0ZTogYFxuICAgIDxHcmlkTGF5b3V0IFtoZWlnaHRdPVwiaGVpZ2h0XCIgW3dpZHRoXT1cImhlaWdodFwiPlxuICAgICAgICA8UmFkUmFkaWFsR2F1Z2U+XG4gICAgICAgICAgICA8UmFkaWFsU2NhbGUgdGtSYWRpYWxHYXVnZVNjYWxlcyBzdGFydEFuZ2xlPVwiLTkwXCIgc3dlZXBBbmdsZT1cIjM2MFwiPlxuICAgICAgICAgICAgICAgIDxTY2FsZVN0eWxlIHRrUmFkaWFsU2NhbGVTdHlsZSB0aWNrc1Zpc2libGU9XCJmYWxzZVwiIGxhYmVsc1Zpc2libGU9XCJmYWxzZVwiIGxpbmVUaGlja25lc3M9XCIwXCI+XG4gICAgICAgICAgICAgICAgPC9TY2FsZVN0eWxlPlxuXG4gICAgICAgICAgICAgICAgPFJhZGlhbEJhckluZGljYXRvciB0a1JhZGlhbFNjYWxlSW5kaWNhdG9ycyBtaW5pbXVtPVwiMFwiIG1heGltdW09XCIxMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgPEJhckluZGljYXRvclN0eWxlIHRrUmFkaWFsQmFySW5kaWNhdG9yU3R5bGUgW2ZpbGxDb2xvcl09XCJmaWxsQmFja2dyb3VuZENvbG9yXCIgY2FwPVwiUm91bmRcIiBiYXJXaWR0aD1cIjAuMVwiPlxuICAgICAgICAgICAgICAgICAgICA8L0JhckluZGljYXRvclN0eWxlPlxuICAgICAgICAgICAgICAgIDwvUmFkaWFsQmFySW5kaWNhdG9yPlxuXG4gICAgICAgICAgICAgICAgPFJhZGlhbEJhckluZGljYXRvciB0a1JhZGlhbFNjYWxlSW5kaWNhdG9ycyBtaW5pbXVtPVwiMFwiIFttYXhpbXVtXT1cInZhbHVlXCIgaXNBbmltYXRlZD1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgPEJhckluZGljYXRvclN0eWxlIHRrUmFkaWFsQmFySW5kaWNhdG9yU3R5bGUgW2ZpbGxDb2xvcl09XCJmaWxsQ29sb3JcIiBjYXA9XCJSb3VuZFwiIGJhcldpZHRoPVwiMC4xXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvQmFySW5kaWNhdG9yU3R5bGU+XG4gICAgICAgICAgICAgICAgPC9SYWRpYWxCYXJJbmRpY2F0b3I+XG4gICAgICAgICAgICA8L1JhZGlhbFNjYWxlPlxuICAgICAgICA8L1JhZFJhZGlhbEdhdWdlPlxuICAgICAgICA8TGFiZWwgW3RleHRdPVwidGV4dFwiIFtjb2xvcl09XCJ0ZXh0Q29sb3JcIiBbZm9udFNpemVdPVwidGV4dFNpemVcIiBjbGFzcz1cIm0teC1hdXRvIG0teS1hdXRvXCIgW21hcmdpblRvcF09XCJvZmZzZXRcIj48L0xhYmVsPlxuICAgIDwvR3JpZExheW91dD5cbiAgICBgLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIENpcmN1bGFyUHJvZ3Jlc3NCYXJDb21wb25lbnQge1xuICAgIEBJbnB1dCgpIHNpemUgPSAxMDA7XG4gICAgQElucHV0KCkgcHJvZ3Jlc3MgPSAwO1xuICAgIEBJbnB1dCgpIHRleHRDb2xvciA9IFwiI2JmYmZjNFwiO1xuICAgIEBJbnB1dCgpIGZpbGxDb2xvciA9IFwiI0ZEQTQ1OFwiO1xuICAgIEBJbnB1dCgpIGZpbGxCYWNrZ3JvdW5kQ29sb3IgPSBcIiNlZmVmZjRcIjtcbiAgICBASW5wdXQoKSBvZmZzZXQgPSAwO1xuXG4gICAgZ2V0IGhlaWdodCgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgubWluKHRoaXMuc2l6ZSwgMjUwKTtcbiAgICB9O1xuICAgIGdldCB2YWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgubWluKHRoaXMucHJvZ3Jlc3MsIDEwMCk7XG4gICAgfTtcbiAgICBnZXQgdGV4dCgpIHtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMudmFsdWUudG9GaXhlZCgpfSVgO1xuICAgIH07XG4gICAgZ2V0IHRleHRTaXplKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oZWlnaHQgLyAzLjU7XG4gICAgfTtcbn0iXX0=