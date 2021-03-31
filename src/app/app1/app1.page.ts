import { SegmentChangeEventDetail } from "@ionic/core";
import { Component, OnInit } from "@angular/core";
import { AlertController } from "@ionic/angular";


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
      this.ShowErrorOverr();
      this.prevalence = 15;
    }
    if (event.detail.value < 0) {
      this.ShowErrorUnderr();
      this.prevalence = 15;
    }
    this.ChangeonInputr();
  }
  // Sensitivitätsregler
  sensitivitychange(event: CustomEvent<any>) {
    if (event.detail.value > 100) {
      this.ShowErrorOverr();
      this.sensitivity = 99;
    }
    if (event.detail.value < 0) {
      this.ShowErrorUnderr();
      this.sensitivity = 99;
    }
    this.ChangeonInputr();
  }

  // Sepzifitätsregler
  specifitychange(event: CustomEvent<any>) {
    if (event.detail.value > 100) {
      this.ShowErrorOverr();
      this.specifity = 90;
    }
    if (event.detail.value < 0) {
      this.ShowErrorUnderr();
      this.specifity = 90;
    }
    this.ChangeonInputr();
  }
  // TrueposEingabe
  trueposchange(event: CustomEvent<any>) {
    if (event.detail.value > 1000) {
      this.ShowErrorOvern();
      this.trueposn = 74;
    }
    if (event.detail.value < 0) {
      this.ShowErrorUnderr();
      this.trueposn = 74;
    }
    this.ChangeonInputn();
  }
  // TruenegEingabe
  truenegchange(event: CustomEvent<any>) {
    if (event.detail.value > 1000) {
      this.ShowErrorOvern();
      this.truenegn = 38;
    }
    if (event.detail.value < 0) {
      this.ShowErrorUnderr();
      this.truenegn = 38;
    }
    this.ChangeonInputn();
  }
  // FalseposEingabe
  falseposchange(event: CustomEvent<any>) {
    if (event.detail.value > 1000) {
      this.ShowErrorOvern();
      this.falseposn = 42;
    }
    if (event.detail.value < 0) {
      this.ShowErrorUnderr();
      this.falseposn = 42;
    }
    this.ChangeonInputn();
  }
  // FalsenegEingabe
  falsenegchange(event: CustomEvent<any>) {
    if (event.detail.value > 1000) {
      this.ShowErrorOvern();
      this.falsenegn = 1;
    }
    if (event.detail.value < 0) {
      this.ShowErrorUnderr();
      this.falsenegn = 1;
    }
    this.ChangeonInputn();
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

  setIconsRange() {
    this._setIcons(
      this.rediconr,
      "assets/img/Imagered.svg",
      Math.trunc(
        (this.sensitivity / 100) * Math.trunc(500 * (this.prevalence / 100))
      )
    );
    this._setIcons(
      this.yellowiconr,
      "assets/img/Imageorange.svg",
      Math.trunc(
        Math.trunc(500 * (this.prevalence / 100)) -
          Math.trunc(
            (this.sensitivity / 100) * Math.trunc(500 * (this.prevalence / 100))
          )
      )
    );
    this._setIcons(
      this.blueiconr,
      "assets/img/Imageblue.svg",
      Math.trunc(
        Math.trunc(500 - Math.trunc(500 * (this.prevalence / 100))) -
          Math.trunc(
            (this.specifity / 100) *
              Math.trunc(500 - Math.trunc(500 * (this.prevalence / 100)))
          )
      )
    );
    this._setIcons(
      this.greeniconr,
      "assets/img/Imagegreen.svg",
      Math.trunc(
        (this.specifity / 100) *
          Math.trunc(500 - Math.trunc(500 * (this.prevalence / 100)))
      )
    );
  }

  setIcons() {
    this._setIcons(this.rediconn, "assets/img/Imagered.svg", this.trueposn / 2);
    this._setIcons(
      this.yellowiconn,
      "assets/img/Imageorange.svg",
      this.falsenegn / 2
    );
    this._setIcons(
      this.blueiconn,
      "assets/img/Imageblue.svg",
      this.falseposn / 2
    );
    this._setIcons(
      this.greeniconn,
      "assets/img/Imagegreen.svg",
      this.truenegn / 2
    );
  }

  // Images generieren mit NumerikInput
  _setIcons(target, asset, howmany) {
    for (var i = 0; i < howmany; i++) target.push(asset);
  }

  // Alte Icons löschen und neue berechnen und anzeigen Zahlen
  ChangeonInputn() {
    this.clearIcon();
    this.calculationnumber();
    this.setIcons();
  }

  // ALte Icons löschen und neue berechnen und anzeigen Schieber
  ChangeonInputr() {
    this.clearIcon();
    this.calculationrange();
    this.setIconsRange();
  }

  // Fehlermeldung für Schieber
  ShowErrorOverr() {
    this.alertCtrl
      .create({
        header: "Ein Fehler ist aufgetreten!",
        message: "Der Wert muss kleiner oder gleich 100 sein!",
        buttons: ["Okay"],
      })
      .then((alertEl) => {
        alertEl.present();
      });
  }

  ShowErrorUnderr() {
    this.alertCtrl
      .create({
        header: "Ein Fehler ist aufgetreten!",
        message: "Der Wert muss größer oder gleich 0 sein!",
        buttons: ["Okay"],
      })
      .then((alertEl) => {
        alertEl.present();
      });
  }

  // Fehlermeldung für Zahl
  ShowErrorOvern() {
    this.alertCtrl
      .create({
        header: "Ein Fehler ist aufgetreten!",
        message: "Der Wert muss kleiner oder gleich 1000 sein!",
        buttons: ["Okay"],
      })
      .then((alertEl) => {
        alertEl.present();
      });
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
