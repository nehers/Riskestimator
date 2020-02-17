import { Component, OnInit } from "@angular/core";
import { SegmentChangeEventDetail } from "@ionic/core";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";
import { saveAs } from "file-saver";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-test",
  templateUrl: "./test.page.html",
  styleUrls: ["./test.page.scss"]
})
export class TestPage implements OnInit {
  // Number für Testaufgaben
  tasknumber = 0;
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
  rediconn = [];
  greeniconn = [];
  blueiconn = [];
  yellowiconn = [];

  zahl: number;
  // Ergebnbisse erzeugen
  result: any;
  results = [];
  frage: any;
  value: any;
  date: any;
  datestart: any;
  Id: number;
  id: number;

  // Ergebnisse abspeichern
  fileName = "myData.json";
  filetoSave: Blob;

  // Feedback
  age: number;
  feed1: string;
  feed2: string;
  feed3: string;
  feed4: string;
  likert1: any;
  likert2: any;
  likert3: any;

  constructor(private alertCtrl: AlertController, private http: HttpClient) {}

  ngOnInit() {}

  // Calculation für Regler
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
    this.ppvr = this.round((this.trueposr / this.totaltestposr) * 100);
    this.npvr = this.round((this.truenegr / this.totaltestnegr) * 100);
    this.fprr = this.round(100 - this.ppvr);
    this.fnrr = this.round(100 - this.npvr);
  }
  // Calculation für NumerischenInput
  calculationnumber() {
    this.totaltestposn = this.trueposn + this.falseposn;
    this.totaltestnegn = this.falsenegn + this.truenegn;
    this.totalilln = this.trueposn + this.falsenegn;
    this.totalwelln = this.falseposn + this.truenegn;
    this.totaln = this.totalilln + this.totalwelln;
    this.ppvn = this.round((this.trueposn / this.totaltestposn) * 100);
    this.npvn = this.round((this.truenegn / this.totaltestnegn) * 100);
    this.fprn = this.round(100 - this.ppvn);
    this.fnrn = this.round(100 - this.npvn);
    this.sensn = this.round((this.trueposn / this.totalilln) * 100);
    this.specn = this.round((this.truenegn / this.totalwelln) * 100);
    this.prevn = this.round((this.totalilln / this.totaln) * 100);
  }
  // Prävalenzregler
  prevalencechange(event: CustomEvent<any>) {
    if (event.detail.value > 100) {
      this.alertCtrl
        .create({
          header: "Ein Fehler ist aufgetreten!",
          message: "Der Wert muss kleiner oder gleich 100 sein!",
          buttons: ["Okay"]
        })
        .then(alertEl => {
          this.prevalence = 15;
          alertEl.present();
        });
    }
    if (event.detail.value < 0) {
      this.alertCtrl
        .create({
          header: "Ein Fehler ist aufgetreten!",
          message: "Der Wert muss größer oder gleich 0 sein!",
          buttons: ["Okay"]
        })
        .then(alertEl => {
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
          buttons: ["Okay"]
        })
        .then(alertEl => {
          this.sensitivity = 99;
          alertEl.present();
        });
    }
    if (event.detail.value < 0) {
      this.alertCtrl
        .create({
          header: "Ein Fehler ist aufgetreten!",
          message: "Der Wert muss größer oder gleich 0 sein!",
          buttons: ["Okay"]
        })
        .then(alertEl => {
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
          buttons: ["Okay"]
        })
        .then(alertEl => {
          this.specifity = 90;
          alertEl.present();
        });
    }
    if (event.detail.value < 0) {
      this.alertCtrl
        .create({
          header: "Ein Fehler ist aufgetreten!",
          message: "Der Wert muss größer oder gleich 0 sein!",
          buttons: ["Okay"]
        })
        .then(alertEl => {
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
          buttons: ["Okay"]
        })
        .then(alertEl => {
          this.trueposn = 74;
          alertEl.present();
        });
    }
    if (event.detail.value < 0) {
      this.alertCtrl
        .create({
          header: "Ein Fehler ist aufgetreten!",
          message: "Der Wert muss größer oder gleich 0 sein!",
          buttons: ["Okay"]
        })
        .then(alertEl => {
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
          buttons: ["Okay"]
        })
        .then(alertEl => {
          this.truenegn = 383;
          alertEl.present();
        });
    }
    if (event.detail.value < 0) {
      this.alertCtrl
        .create({
          header: "Ein Fehler ist aufgetreten!",
          message: "Der Wert muss größer oder gleich 0 sein!",
          buttons: ["Okay"]
        })
        .then(alertEl => {
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
          buttons: ["Okay"]
        })
        .then(alertEl => {
          this.falseposn = 42;
          alertEl.present();
        });
    }
    if (event.detail.value < 0) {
      this.alertCtrl
        .create({
          header: "Ein Fehler ist aufgetreten!",
          message: "Der Wert muss größer oder gleich 0 sein!",
          buttons: ["Okay"]
        })
        .then(alertEl => {
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
          buttons: ["Okay"]
        })
        .then(alertEl => {
          this.falsenegn = 1;
          alertEl.present();
        });
    }
    if (event.detail.value < 0) {
      this.alertCtrl
        .create({
          header: "Ein Fehler ist aufgetreten!",
          message: "Der Wert muss größer oder gleich 0 sein!",
          buttons: ["Okay"]
        })
        .then(alertEl => {
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

  // Images generieren mit Schiebern
  forIconRangeLoop() {
    for (this.tp = this.trueposr; this.tp > 0; this.tp--) {
      this.rediconr.push("assets/img/Imagered.svg");
    }
    for (this.fn = this.falsenegr; this.fn > 0; this.fn--) {
      this.yellowiconr.push("assets/img/Imageorange.svg");
    }
    for (this.fp = this.falseposr; this.fp > 0; this.fp--) {
      this.blueiconr.push("assets/img/Imageblue.svg");
    }
    for (this.tn = this.truenegr; this.tn > 0; this.tn--) {
      this.greeniconr.push("assets/img/Imagegreen.svg");
    }
  }
  // Images generieren mit NumerikInput
  forIconNumberLoop() {
    for (this.tp = this.trueposn; this.tp > 0; this.tp--) {
      this.rediconn.push("assets/img/Imagered.svg");
    }
    for (this.fn = this.falsenegn; this.fn > 0; this.fn--) {
      this.yellowiconn.push("assets/img/Imageorange.svg");
    }
    for (this.fp = this.falseposn; this.fp > 0; this.fp--) {
      this.blueiconn.push("assets/img/Imageblue.svg");
    }
    for (this.tn = this.truenegn; this.tn > 0; this.tn--) {
      this.greeniconn.push("assets/img/Imagegreen.svg");
    }
  }

  // Abfrage welcher SchulungsPc benutzt wird
  IdInput() {
    if (this.Id > 12) {
      this.alertCtrl
        .create({
          header: "Ein Fehler ist aufgetreten!",
          message: "Der Wert muss kleiner oder gleich 12 sein!",
          buttons: ["Okay"]
        })
        .then(alertEl => {
          this.tasknumber = 0;
          alertEl.present();
        });
    }
    if (this.Id < 1) {
      this.alertCtrl
        .create({
          header: "Ein Fehler ist aufgetreten!",
          message: "Der Wert muss größer oder gleich 1 sein!",
          buttons: ["Okay"]
        })
        .then(alertEl => {
          this.tasknumber = 0;
          alertEl.present();
        });
    }
    this.tasknumber = this.tasknumber + 1;
    this.datestart = new Date().toLocaleString();
    this.id = this.Id;
  }

  // Ergebnisse speichern
  getNextTask() {
    this.tasknumber = this.tasknumber + 1;
    this.results.push(this.result);
    console.log(this.results);
    this.filetoSave = new Blob([JSON.stringify(this.results)], {
      type: "text/plain"
    });
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
    this.prevalence = 15;
    this.sensitivity = 99;
    this.specifity = 90;
    this.trueposn = 10;
    this.truenegn = 10;
    this.falseposn = 10;
    this.falsenegn = 10;
  }
  Frage(event) {
    this.frage = "Frage" + this.tasknumber;
    this.value = event.target.value;
    this.date = new Date().toLocaleString();
    this.result = [this.Id, this.datestart, this.frage, this.value, this.date];
  }

  // Download
  saveToFile() {
    this.results.push(
      this.age,
      this.likert3,
      this.feed1,
      this.feed2,
      this.feed3,
      this.feed4,
      this.likert1,
      this.likert2
    );
    console.log(this.results);
    this.filetoSave = new Blob([JSON.stringify(this.results)], {
      type: "text/plain"
    });

    saveAs(this.filetoSave, this.Id);
  }

  // Upload
  uploadResults() {
    this.tasknumber = this.tasknumber + 1;
    this.results.push(
      this.age,
      this.likert3,
      this.feed1,
      this.feed2,
      this.feed3,
      this.feed4,
      this.likert1,
      this.likert2,
      
    );
    // console.log(this.results);
    this.http
      .post("http://141.67.247.124:8081", {
        ...this.results
      })
      .subscribe(response => {
        console.log(response);
      });
  }

  Likert1(event) {
    this.likert1 = event.target.value;
  }
  Likert2(event) {
    this.likert2 = event.target.value;
  }
  Likert3(event) {
    this.likert3 = event.target.value;
  }

  Feedback() {
    console.log(this.age);
    console.log(this.likert3);
    console.log(this.feed1);
    console.log(this.feed2);
    console.log(this.feed3);
    console.log(this.feed4);
    console.log(this.likert1);
    console.log(this.likert2);
    
  }

  // Rundungsfunktion
  round(value: number) {
    return (value = +Math.round(value * 1000) / 1000);
  }
}
