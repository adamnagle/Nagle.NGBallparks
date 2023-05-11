import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import * as Raphael from 'raphael';


@Component({
  selector: 'ballpark',
  templateUrl: './ballpark.component.html',
  styleUrls: ['./ballpark.component.scss']
})
export class BallparkComponent implements AfterViewInit {

  @Input() leftFieldLine: number = 360;
  @Input() centerFieldLine: number = 360;
  @Input() rightFieldLine: number = 360;

  @ViewChild('paper') paper!: ElementRef;

  constructor() { }

  //nice util: https://svg-path-visualizer.netlify.app/

  ngAfterViewInit(): void {
    let stadium = this.stadium(this.leftFieldLine, this.centerFieldLine, this.rightFieldLine);
  }

  stadium(leftFieldLine: number, centerFieldLine: number, rightFieldLine: number): Raphael.RaphaelPaper<"SVG" | "VML">  {

    let cfXY = 320; //todo trig
    let maxFieldLine = Math.max(cfXY, leftFieldLine, rightFieldLine);

    let field = Raphael.default(this.paper.nativeElement, maxFieldLine, maxFieldLine);

    let foulLines = field.path(`M0,0 L${leftFieldLine},0 M0,0 L0,${rightFieldLine}`)
                          .attr({stroke: "#000", "stroke-width": 4});


    let hrLines = field.path(`M${leftFieldLine},0 L${cfXY},${cfXY} L0,${rightFieldLine}`)
                        .attr({stroke: "#000", "stroke-width": 1});

    let outfieldArch = field.path('M0,135 Q175,175 135,0').attr({stroke: "#000", "stroke-width": 1});

    let grassLines = field.path(`M90,0 L90,90 L0,90`)
                        .attr({stroke: "#000", "stroke-width": 1});

    let baseFt = 8;
    let h = field.path(this.rectangle(0, 0, baseFt)).attr({stroke: "#000", "stroke-width": 1});
    let b1 = field.path(this.rectangle(0, 90-baseFt, baseFt)).attr({stroke: "#000", "stroke-width": 1});
    let b2 = field.path(this.rectangle(90-baseFt, 90-baseFt, baseFt)).attr({stroke: "#000", "stroke-width": 1});
    let b3 = field.path(this.rectangle(90-baseFt, 0, baseFt)).attr({stroke: "#000", "stroke-width": 1});

    return field;
  }

  rectangle(x: number, y: number, size: number): string
  {
    return `M${x},${y} L${x+size},${y} L${x+size},${y+size} L${x},${y+size} L${x},${y}`;
  }

}
