import { Component, OnInit } from "@angular/core";
import { SegmentChangeEventDetail } from "@ionic/core";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";

@Component({
  selector: "app-test",
  templateUrl: "./test.page.html",
  styleUrls: ["./test.page.scss"]
})
export class TestPage implements OnInit {
  // Number für Testaufgaben
  tasknumber = 1;
  // Variablen für RangeInput mit  "r"
  prevalence = 15;
  sensitivity = 99;
  specifity = 90;
  totalr = 500;
  trueposr = 74;
  truenegr = 383;
  falseposr = 42;
  falsenegr = 1;
  totaltestposr = 116;
  totaltestnegr = 384;
  totalillr = 75;
  totalwellr = 425;
  ppvr = 63;
  npvr = 99;
  fprr = 37;
  fnrr = 1;
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
  trueposn = 74;
  truenegn = 383;
  falseposn = 42;
  falsenegn = 1;
  totaln = 500;
  totaltestposn = 116;
  totaltestnegn = 384;
  totalilln = 75;
  totalwelln = 425;
  sensn: number;
  specn: number;
  prevn: number;
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
  // Ergebnbisse speichern
  result: any;
  results = [];
  frage: any;
  value: any;
  date: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  // Calculation für Regler
  calculationrange() {
    this.totalillr = Math.trunc(this.totalr * (this.prevalence / 100));
    this.totalwellr = Math.trunc(this.totalr - this.totalillr);
    this.trueposr = Math.trunc((this.sensitivity / 100) * this.totalillr);
    this.falsenegr = Math.trunc(this.totalillr - this.trueposr);
    this.truenegr = Math.trunc((this.specifity / 100) * this.totalwellr);
    this.falseposr = Math.trunc(this.totalwellr - this.truenegr);
    this.totaltestposr = Math.trunc(this.trueposr + this.falseposr);
    this.totaltestnegr = Math.trunc(this.falsenegr + this.truenegr);
    this.ppvr = Math.trunc((this.trueposr / this.totaltestposr) * 100);
    this.npvr = Math.trunc((this.truenegr / this.totaltestnegr) * 100);
    this.fprr = 100 - this.ppvr;
    this.fnrr = 100 - this.npvr;
  }
  // Calculation für NumerischenInput
  calculationnumber() {
    this.totaltestposn = this.trueposn + this.falseposn;
    this.totaltestnegn = this.falsenegn + this.truenegn;
    this.totalilln = this.trueposn + this.falsenegn;
    this.totalwelln = this.falseposn + this.truenegn;
    this.totaln = this.totalilln + this.totalwelln;
    this.ppvn = Math.trunc((this.trueposn / this.totaltestposn) * 100);
    this.npvn = Math.trunc((this.truenegn / this.totaltestnegn) * 100);
    this.fprn = 100 - this.ppvn;
    this.fnrn = 100 - this.npvn;
    this.sensn = Math.trunc((this.trueposn / this.totalilln)*100);
    this.specn = Math.trunc((this.truenegn / this.totalwelln)*100);
    this.prevn = Math.trunc((this.totalilln / this.totaln)*100);
  }
  // Prävalenzregler
  prevalencechange() {
    this.clearIcon();
    this.clearRect();
    this.calculationrange();
    this.forIconRangeLoop();
  }
  // Sensitivitätsregler
  sensitivitychange() {
    this.clearIcon();
    this.clearRect();
    this.calculationrange();
    this.forIconRangeLoop();
  }
  // Sepzifitätsregler
  specifitychange() {
    this.clearIcon();
    this.clearRect();
    this.calculationrange();
    this.forIconRangeLoop();
  }
  // TrueposEingabe
  trueposchange() {
    this.clearIcon();
    this.clearRect();
    this.calculationnumber();
    this.forIconNumberLoop();
  }
  // TruenegEingabe
  truenegchange() {
    this.clearIcon();
    this.clearRect();
    this.calculationnumber();
    this.forIconNumberLoop();
  }
  // FalseposEingabe
  falseposchange() {
    this.clearIcon();
    this.clearRect();
    this.calculationnumber();
    this.forIconNumberLoop();
  }
  // FalsenegEingabe
  falsenegchange() {
    this.clearIcon();
    this.clearRect();
    this.calculationnumber();
    this.forIconNumberLoop();
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
  // Images generieren mit Schiebern
  forIconRangeLoop() {
    for (this.tp = this.trueposr; this.tp > 0; this.tp--) {
      this.rediconr.push("assets/img/Imagered.svg");
      this.redrectr.push(this.trueposr);
    }
    for (this.fn = this.falsenegr; this.fn > 0; this.fn--) {
      this.blueiconr.push("assets/img/Imageblue.svg");
      this.bluerectr.push(this.falsenegr);
    }
    for (this.fp = this.falseposr; this.fp > 0; this.fp--) {
      this.yellowiconr.push("assets/img/Imageorange.svg");
      this.yellowrectr.push(this.falseposr);
    }
    for (this.tn = this.truenegr; this.tn > 0; this.tn--) {
      this.greeniconr.push("assets/img/Imagegreen.svg");
      this.greenrectr.push(this.truenegr);
    }
  }
  // Images generieren mit NumerikInput
  forIconNumberLoop() {
    for (this.tp = this.trueposn; this.tp > 0; this.tp--) {
      this.rediconn.push("assets/img/Imagered.svg");
      this.redrectn.push(this.trueposn);
    }
    for (this.fn = this.falsenegn; this.fn > 0; this.fn--) {
      this.blueiconn.push("assets/img/Imageblue.svg");
      this.bluerectn.push(this.falsenegn);
    }
    for (this.fp = this.falseposn; this.fp > 0; this.fp--) {
      this.yellowiconn.push("assets/img/Imageorange.svg");
      this.yellowrectn.push(this.falseposn);
    }
    for (this.tn = this.truenegn; this.tn > 0; this.tn--) {
      this.greeniconn.push("assets/img/Imagegreen.svg");
      this.greenrectn.push(this.truenegn);
    }
  }

  getNextTask() {
    this.tasknumber = this.tasknumber + 1;
    // console.log(this.tasknumber);
    this.results.push(this.result);
    console.log(this.results);
    this.prevalence = 15;
    this.sensitivity = 99;
    this.specifity = 90;
    this.trueposn = 74;
    this.truenegn = 383;
    this.falseposn = 42;
    this.falsenegn = 1;
  }
  getBackTask() {
    this.tasknumber = this.tasknumber - 1;
    console.log(this.tasknumber);
    this.prevalence = 15;
    this.sensitivity = 99;
    this.specifity = 90;
    this.trueposn = 10;
    this.truenegn = 10;
    this.falseposn = 10;
    this.falsenegn = 10;
  }

  uploadResults() {
    this.tasknumber = this.tasknumber + 1;
    this.results.push(this.result);
    console.log(this.results);
    this.http
      .post("https://ionic-e0cc9.firebaseio.com/Ergebnisse.json", {
        ...this.results
      })
      .subscribe(response => {
        console.log(response);
      });
  }

  Frage(event) {
    this.frage = "Frage" + this.tasknumber;
    this.value = event.target.value;
    this.date = new Date().toLocaleString();
    this.result = [this.frage, this.value, this.date];
  }
}
