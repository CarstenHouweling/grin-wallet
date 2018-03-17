import {Component, OnInit} from "@angular/core";
import {grinLogo} from "../../animations/grinLogo.animation";
import {grinText} from "../../animations/grinText.animation";
import {WalletService} from "../../services/wallet.service";
import {fadeIn} from "../../animations/fadeIn.animation";
import {MatDialog} from "@angular/material";
import {DialogInfoComponent} from "../dialog_info/dialogInfo.component";

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [grinLogo, grinText, fadeIn]
})
export class MainComponent implements OnInit {

  loadingAnimationsDone: boolean = false;

  walletLocation: string = localStorage.getItem('walletLocation');

  walletLocationInput;
  loadingWalletInput: boolean = false;

  constructor(private walletService: WalletService,
              private dialog: MatDialog) {}

  ngOnInit() {
    if (this.walletLocation) {

      // TODO: Request wallet info
    }
  }

  isValidWalletLocation(walletLocation) {
    let valid = true;

    if (!walletLocation) {
      valid = false;
    } else {
      if (!new RegExp('(\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}):(\\d{1,5})').test(walletLocation)) {
        valid = false;
      }
    }

    return valid;
  }

  saveWalletLocation() {
    if (this.isValidWalletLocation(this.walletLocationInput)) {
      this.loadingWalletInput = true;

      // TODO: Try to get wallet data
      // TODO: this.walletService.get().subscribe()
      /*this.walletService.get().subscribe(
        data => console.log('ok'),
        error => console.log(error)
      );*/

      // TODO: Remove dummy timeout
      setTimeout(_ => {
        localStorage.setItem('walletLocation', this.walletLocationInput);
        this.walletLocation = this.walletLocationInput;

        this.loadingWalletInput = false;
      }, 2000);
    }
  }

  resetWalletLocation() {
    localStorage.removeItem('walletLocation');
    this.walletLocation = '';
  }

  openInfo() {
    this.dialog.open(DialogInfoComponent, {
      width: '700px'
    });
  }
}
