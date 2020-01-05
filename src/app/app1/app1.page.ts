import { SegmentChangeEventDetail } from '@ionic/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app1',
  templateUrl: './app1.page.html',
  styleUrls: ['./app1.page.scss']
})
export class App1Page implements OnInit {
  // 1. angezeigt Visualisierung -> Table mit numerischem Input
  selectedInput = 'range';
  selectedVis = 'table';
  // Variablen für RangeInput mit  "r"
  prevalence = 15.11;
  sensitivity = 99;
  specifity = 90;
  totalr = 500;
  trueposr = 75;
  truenegr = 764;
  falseposr = 85;
  falsenegr = 1;
  totaltestposr = 234;
  totaltestnegr = 766;
  totalillr = 151;
  totalwellr = 849;
  ppvr = 64;
  npvr = 100;
  fpr = 36;
  fnr = 0;
  tp: number;
  tn: number;
  fp: number;
  fn: number;
  redrectr = [];
  greenrectr = [];
  bluerectr = [];
  yellowrectr = [];
  rediconr = [];
  greeniconr = [];
  blueiconr = [];
  yellowiconr = [];
  // Variablen für NumberInput mit "n"
  trueposn = 10;
  truenegn = 10;
  falseposn = 10;
  falsenegn = 10;
  totaln = 40;
  totaltestposn = 20;
  totaltestnegn = 20;
  totalilln = 20;
  totalwelln = 20;
  ppvn: number;
  npvn: number;
  fnrn: number;
  fprn: number;
  redrectn = [];
  greenrectn = [];
  bluerectn = [];
  yellowrectn = [];
  rediconn = [];
  greeniconn = [];
  blueiconn = [];
  yellowiconn = [];

  constructor() {}

  ngOnInit() {}

  // Calculation für Regler
  calculationrange() {
    this.totalillr = Math.round(this.totalr * (this.prevalence / 100));
    this.totalwellr = Math.round(this.totalr - this.totalillr);
    this.trueposr = Math.round((this.sensitivity / 100) * this.totalillr);
    this.falsenegr = Math.round(this.totalillr - this.trueposr);
    this.truenegr = Math.round((this.specifity / 100) * this.totalwellr);
    this.falseposr = Math.round(this.totalwellr - this.truenegr);
    this.totaltestposr = Math.round(this.trueposr + this.falseposr);
    this.totaltestnegr = Math.round(this.falsenegr + this.truenegr);
    this.ppvr = Math.round((this.trueposr / this.totaltestposr) * 100);
    this.npvr = Math.round((this.truenegr / this.totaltestnegr) * 100);
    this.fpr = 100 - this.ppvr;
    this.fnr = 100 - this.npvr;
  }
  // Calculation für NumerischenInput
  calculationnumber() {
    this.totaltestposn = this.trueposn + this.falseposn;
    this.totaltestnegn = this.falsenegn + this.truenegn;
    this.totalilln = this.trueposn + this.falsenegn;
    this.totalwelln = this.falseposn + this.truenegn;
    this.totaln = this.totalilln + this.totalwelln;
    this.ppvn = Math.round((this.trueposn / this.totaltestposn) * 100);
    this.npvn = Math.round((this.truenegn / this.totaltestnegn) * 100);
    this.fprn = 100 - this.ppvn;
    this.fnrn = 100 - this.npvn;
  }
  // Prävalenzregler
  prevalencechange() {
    this.clearIcon();
    this.clearRect();
    this.calculationrange();
    this.forIconRangeLoop();
    this.forRectRangeLoop();
  }
  // Sensitivitätsregler
  sensitivitychange() {
    this.clearIcon();
    this.clearRect();
    this.calculationrange();
    this.forIconRangeLoop();
    this.forRectRangeLoop();
  }
  // Sepzifitätsregler
  specifitychange() {
    this.clearIcon();
    this.clearRect();
    this.calculationrange();
    this.forIconRangeLoop();
    this.forRectRangeLoop();
  }
  // TrueposEingabe
  trueposchange() {
    this.clearIcon();
    this.clearRect();
    this.calculationnumber();
    this.forIconNumberLoop();
    this.forRectNumberLoop();
  }
  // TruenegEingabe
  truenegchange() {
    this.clearIcon();
    this.clearRect();
    this.calculationnumber();
    this.forIconNumberLoop();
    this.forRectNumberLoop();
  }
  // FalseposEingabe
  falseposchange() {
    this.clearIcon();
    this.clearRect();
    this.calculationnumber();
    this.forIconNumberLoop();
    this.forRectNumberLoop();
  }
  // FalsenegEingabe
  falsenegchange() {
    this.clearIcon();
    this.clearRect();
    this.calculationnumber();
    this.forIconNumberLoop();
    this.forRectNumberLoop();
  }
  // Löscht alte Icons
  clearIcon() {
    this.rediconr = [];
    this.rediconn = [];
    this.greeniconr = [];
    this.greeniconn = [];
    this.blueiconr = [];
    this.blueiconn = [];
    this.yellowiconr = [];
    this.yellowiconn = [];
  }
  // Löscht alle Rechtecke
  clearRect() {
    this.redrectr = [];
    this.greenrectr = [];
    this.bluerectr = [];
    this.yellowrectr = [];
    this.redrectn = [];
    this.greenrectn = [];
    this.bluerectn = [];
    this.yellowrectn = [];
  }
  // IconArray mit Schiebern
  forIconRangeLoop() {
    for (this.tp = this.trueposr; this.tp > 0; this.tp--) {
      this.rediconr.push('assets/img/Circlerot.svg');
    }
    for (this.fp = this.falseposr; this.fp > 0; this.fp--) {
      this.blueiconr.push('assets/img/Circleblau.svg');
    }
    for (this.fn = this.falsenegr; this.fn > 0; this.fn--) {
      this.yellowiconr.push('assets/img/Circlegelb.svg');
    }
    for (this.tn = this.truenegr; this.tn > 0; this.tn--) {
      this.greeniconr.push('assets/img/Circlegrün.svg');
    }
  }
  // IconArray mit NumerikInput
  forIconNumberLoop() {
    for (this.tp = this.trueposn; this.tp > 0; this.tp--) {
      this.rediconn.push('assets/img/Circlerot.svg');
    }
    for (this.fp = this.falseposn; this.fp > 0; this.fp--) {
      this.blueiconn.push('assets/img/Circleblau.svg');
    }
    for (this.fn = this.falsenegn; this.fn > 0; this.fn--) {
      this.yellowiconn.push('assets/img/Circlegelb.svg');
    }
    for (this.tn = this.truenegn; this.tn > 0; this.tn--) {
      this.greeniconn.push('assets/img/Circlegrün.svg');
    }
  }
  // RectSliders mit Schiebern
  forRectRangeLoop() {
    for (this.tp = this.trueposr; this.tp > 0; this.tp--) {
      this.redrectr.push(this.trueposr);
    }
    for (this.tn = this.truenegr; this.tn > 0; this.tn--) {
      this.greenrectr.push(this.truenegr);
    }
    for (this.fp = this.falseposr; this.fp > 0; this.fp--) {
      this.bluerectr.push(this.falseposr);
    }
    for (this.fn = this.falsenegr; this.fn > 0; this.fn--) {
      this.yellowrectr.push(this.falsenegr);
    }
  }
  // RectSliders mit NumerikInput
  forRectNumberLoop() {
    for (this.tp = this.trueposn; this.tp > 0; this.tp--) {
      this.redrectn.push(this.trueposn);
    }
    for (this.tn = this.truenegn; this.tn > 0; this.tn--) {
      this.greenrectn.push(this.truenegn);
    }
    for (this.fp = this.falseposn; this.fp > 0; this.fp--) {
      this.bluerectn.push(this.falseposn);
    }
    for (this.fn = this.falsenegn; this.fn > 0; this.fn--) {
      this.yellowrectn.push(this.falsenegn);
    }
  }
  // Zur Anzeige
  onInputChange(event: CustomEvent<SegmentChangeEventDetail>) {
    this.selectedInput = event.detail.value;
  }
  // Zur Anzeige
  onVisChange(event: CustomEvent<SegmentChangeEventDetail>) {
    this.selectedVis = event.detail.value;
  }
}
