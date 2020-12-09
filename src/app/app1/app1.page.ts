import { SegmentChangeEventDetail } from "@ionic/core";
import { Component, OnInit } from "@angular/core";
import { throwError } from "rxjs";
import { AlertController } from "@ionic/angular";
import { print } from "util";
import { THIS_EXPR, ThrowStmt } from "@angular/compiler/src/output/output_ast";

@Component({
  selector: "app-app1",
  templateUrl: "./app1.page.html",
  styleUrls: ["./app1.page.scss"],
})
export class App1Page implements OnInit {
  // 1. angezeigt Visualisierung -> Table mit numerischem Input
  selectedInput = "range";
  selectedVis = "table";
  // Variablen für RangeInput mit  "r"
  prevalence = 15;
  sensitivity = 99;
  specifity = 90;
  totalr = 1000;
  trueposr = 74;
  truenegr = 383;
  falseposr = 42;
  falsenegr = 1;
  totaltestposr = 116;
  totaltestnegr = 384;
  totalillr = 75;
  totalwellr = 425;

  sensr = 99;
  specr = 90;
  prevr = 15;
  ppvr = 63;
  npvr = 99;
  fprr = 10;
  fnrr = 1;
  tp: number;
  tn: number;
  fp: number;
  fn: number;
  rediconr = [];
  greeniconr = [];
  blueiconr = [];
  yellowiconr = [];
  // Variablen für NumberInput mit "n"
  trueposn = 74;
  truenegn = 383;
  falseposn = 42;
  falsenegn = 1;
  totaln = 1000;
  totaltestposn = 116;
  totaltestnegn = 384;
  totalilln = 75;
  totalwelln = 425;
  ppvn: number;
  npvn: number;
  fnrn: number;
  fprn: number;
  sensn: number;
  specn: number;
  prevn: number;
  rediconn = [];
  greeniconn = [];
  blueiconn = [];
  yellowiconn = [];

  smallscreen = false;

  constructor(private alertCtrl: AlertController) {}

  ngOnInit() {
    if (window.screen.width < 620) {
      this.smallscreen = true;
    }
  }

  // Calculation für Regler
  calculationrange() {
    this.totalillr = Math.trunc(this.totalr * (this.prevalence / 100));
    this.totalwellr = Math.trunc(
      this.totalr - Math.trunc(this.totalr * (this.prevalence / 100))
    );
    this.trueposr = Math.trunc((this.sensitivity / 100) * this.totalillr);
    this.falsenegr = Math.trunc(this.totalillr - this.trueposr);
    this.truenegr = Math.trunc((this.specifity / 100) * this.totalwellr);
    this.falseposr = Math.trunc(this.totalwellr - this.truenegr);
    this.totaltestposr = Math.trunc(this.trueposr + this.falseposr);
    this.totaltestnegr = Math.trunc(this.falsenegr + this.truenegr);

    this.sensr = Math.round((this.trueposr / this.totalillr) * 100);
    this.specr = Math.round((this.truenegr / this.totalwellr) * 100);
    this.prevr = Math.round((this.totalillr / this.totalr) * 100);
    this.ppvr = Math.round((this.trueposr / this.totaltestposr) * 100);
    this.npvr = Math.round((this.truenegr / this.totaltestnegr) * 100);
    this.fprr = Math.round(100 - this.specr);
    this.fnrr = Math.round(100 - this.sensr);
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
    this.sensn = Math.round((this.trueposn / this.totalilln) * 100);
    this.specn = Math.round((this.truenegn / this.totalwelln) * 100);
    this.prevn = Math.round((this.totalilln / this.totaln) * 100);
    this.fprn = Math.round(100 - this.specn);
    this.fnrn = Math.round(100 - this.sensn);
  }
  // Prävalenzregler
  prevalencechange(event: CustomEvent<any>) {
    if (event.detail.value > 100) {
      this.alertCtrl
        .create({
          header: "Ein Fehler ist aufgetreten!",
          message: "Der Wert muss kleiner oder gleich 100 sein!",
          buttons: ["Okay"],
        })
        .then((alertEl) => {
          this.prevalence = 15;
          alertEl.present();
        });
    }
    if (event.detail.value < 0) {
      this.alertCtrl
        .create({
          header: "Ein Fehler ist aufgetreten!",
          message: "Der Wert muss größer oder gleich 0 sein!",
          buttons: ["Okay"],
        })
        .then((alertEl) => {
          this.prevalence = 15;
          alertEl.present();
        });
    }
    this.clearIcon();
    this.calculationrange();
    this.forIconRangeLoop();
  }
  // Sensitivitätsregler
  sensitivitychange(event: CustomEvent<any>) {
    if (event.detail.value > 100) {
      this.alertCtrl
        .create({
          header: "Ein Fehler ist aufgetreten!",
          message: "Der Wert muss kleiner oder gleich 100 sein!",
          buttons: ["Okay"],
        })
        .then((alertEl) => {
          this.sensitivity = 99;
          alertEl.present();
        });
    }
    if (event.detail.value < 0) {
      this.alertCtrl
        .create({
          header: "Ein Fehler ist aufgetreten!",
          message: "Der Wert muss größer oder gleich 0 sein!",
          buttons: ["Okay"],
        })
        .then((alertEl) => {
          this.sensitivity = 99;
          alertEl.present();
        });
    }
    this.clearIcon();
    this.calculationrange();
    this.forIconRangeLoop();
  }
  // Sepzifitätsregler
  specifitychange(event: CustomEvent<any>) {
    if (event.detail.value > 100) {
      this.alertCtrl
        .create({
          header: "Ein Fehler ist aufgetreten!",
          message: "Der Wert muss kleiner oder gleich 100 sein!",
          buttons: ["Okay"],
        })
        .then((alertEl) => {
          this.specifity = 90;
          alertEl.present();
        });
    }
    if (event.detail.value < 0) {
      this.alertCtrl
        .create({
          header: "Ein Fehler ist aufgetreten!",
          message: "Der Wert muss größer oder gleich 0 sein!",
          buttons: ["Okay"],
        })
        .then((alertEl) => {
          this.specifity = 90;
          alertEl.present();
        });
    }
    this.clearIcon();
    this.calculationrange();
    this.forIconRangeLoop();
  }
  // TrueposEingabe
  trueposchange(event: CustomEvent<any>) {
    if (event.detail.value > 1000) {
      this.alertCtrl
        .create({
          header: "Ein Fehler ist aufgetreten!",
          message: "Der Wert muss kleiner oder gleich 1000 sein!",
          buttons: ["Okay"],
        })
        .then((alertEl) => {
          this.trueposn = 74;
          alertEl.present();
        });
    }
    if (event.detail.value < 0) {
      this.alertCtrl
        .create({
          header: "Ein Fehler ist aufgetreten!",
          message: "Der Wert muss größer oder gleich 0 sein!",
          buttons: ["Okay"],
        })
        .then((alertEl) => {
          this.trueposn = 74;
          alertEl.present();
        });
    }
    this.clearIcon();
    this.calculationnumber();
    this.forIconNumberLoop();
  }
  // TruenegEingabe
  truenegchange(event: CustomEvent<any>) {
    if (event.detail.value > 1000) {
      this.alertCtrl
        .create({
          header: "Ein Fehler ist aufgetreten!",
          message: "Der Wert muss kleiner oder gleich 1000 sein!",
          buttons: ["Okay"],
        })
        .then((alertEl) => {
          this.truenegn = 383;
          alertEl.present();
        });
    }
    if (event.detail.value < 0) {
      this.alertCtrl
        .create({
          header: "Ein Fehler ist aufgetreten!",
          message: "Der Wert muss größer oder gleich 0 sein!",
          buttons: ["Okay"],
        })
        .then((alertEl) => {
          this.truenegn = 383;
          alertEl.present();
        });
    }
    this.clearIcon();
    this.calculationnumber();
    this.forIconNumberLoop();
  }
  // FalseposEingabe
  falseposchange(event: CustomEvent<any>) {
    if (event.detail.value > 1000) {
      this.alertCtrl
        .create({
          header: "Ein Fehler ist aufgetreten!",
          message: "Der Wert muss kleiner oder gleich 1000 sein!",
          buttons: ["Okay"],
        })
        .then((alertEl) => {
          this.falseposn = 42;
          alertEl.present();
        });
    }
    if (event.detail.value < 0) {
      this.alertCtrl
        .create({
          header: "Ein Fehler ist aufgetreten!",
          message: "Der Wert muss größer oder gleich 0 sein!",
          buttons: ["Okay"],
        })
        .then((alertEl) => {
          this.falseposn = 42;
          alertEl.present();
        });
    }
    this.clearIcon();
    this.calculationnumber();
    this.forIconNumberLoop();
  }
  // FalsenegEingabe
  falsenegchange(event: CustomEvent<any>) {
    if (event.detail.value > 1000) {
      this.alertCtrl
        .create({
          header: "Ein Fehler ist aufgetreten!",
          message: "Der Wert muss kleiner oder gleich 1000 sein!",
          buttons: ["Okay"],
        })
        .then((alertEl) => {
          this.falsenegn = 1;
          alertEl.present();
        });
    }
    if (event.detail.value < 0) {
      this.alertCtrl
        .create({
          header: "Ein Fehler ist aufgetreten!",
          message: "Der Wert muss größer oder gleich 0 sein!",
          buttons: ["Okay"],
        })
        .then((alertEl) => {
          this.falsenegn = 1;
          alertEl.present();
        });
    }
    this.clearIcon();
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

  // Images generieren mit Schiebern
  forIconRangeLoop() {
    for (
      this.tp = Math.trunc(
        (this.sensitivity / 100) * Math.trunc(500 * (this.prevalence / 100))
      );
      this.tp > 0;
      this.tp--
    ) {
      this.rediconr.push("assets/img/Imagered.svg");
    }
    for (
      this.fn = Math.trunc(
        Math.trunc(500 * (this.prevalence / 100)) -
          Math.trunc(
            (this.sensitivity / 100) * Math.trunc(500 * (this.prevalence / 100))
          )
      );
      this.fn > 0;
      this.fn--
    ) {
      this.yellowiconr.push("assets/img/Imageorange.svg");
    }
    for (
      this.fp = Math.trunc(
        Math.trunc(500 - Math.trunc(500 * (this.prevalence / 100))) -
          Math.trunc(
            (this.specifity / 100) *
              Math.trunc(500 - Math.trunc(500 * (this.prevalence / 100)))
          )
      );
      this.fp > 0;
      this.fp--
    ) {
      this.blueiconr.push("assets/img/Imageblue.svg");
    }
    for (
      this.tn = Math.trunc(
        (this.specifity / 100) *
          Math.trunc(500 - Math.trunc(500 * (this.prevalence / 100)))
      );
      this.tn > 0;
      this.tn--
    ) {
      this.greeniconr.push("assets/img/Imagegreen.svg");
    }
  }
  // Images generieren mit NumerikInput
  forIconNumberLoop() {
    for (this.tp = this.trueposn / 2; this.tp > 0; this.tp--) {
      this.rediconn.push("assets/img/Imagered.svg");
    }
    for (this.fn = this.falsenegn / 2; this.fn > 0; this.fn--) {
      this.yellowiconn.push("assets/img/Imageorange.svg");
    }
    for (this.fp = this.falseposn / 2; this.fp > 0; this.fp--) {
      this.blueiconn.push("assets/img/Imageblue.svg");
    }
    for (this.tn = this.truenegn / 2; this.tn > 0; this.tn--) {
      this.greeniconn.push("assets/img/Imagegreen.svg");
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

  roundtoTwo(value: number) {
    return (value = +Math.round(value * 1000) / 1000);
  }
}
