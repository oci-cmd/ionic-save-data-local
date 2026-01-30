import { CommonModule } from '@angular/common';
import { Component, ChangeDetectorRef } from '@angular/core'; // <--- TAMBAH ChangeDetectorRef
import { RouterLink } from '@angular/router';
import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonTitle, IonToolbar, IonButtons, IonButton, IonFab, IonFabButton, IonIcon } from '@ionic/angular/standalone';

// 1. Import Icon
import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';

// 2. Import Service Data
import { DataMahasiswaService } from '../services/data-mahasiswa.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [CommonModule, RouterLink, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel,
    IonButtons, IonButton, IonFab, IonFabButton, IonIcon],
})
export class HomePage {

  // Array awal kosong
  dataMahasiswa: any[] = [];

  constructor(
    private dataService: DataMahasiswaService,
    private cdr: ChangeDetectorRef // <--- INJECT DI SINI
  ) {
    addIcons({ add });
  }

  // Jalan setiap kali masuk halaman
  async ionViewWillEnter() {
    await this.loadData();
  }

  // Fungsi muat data
  async loadData() {
    this.dataMahasiswa = await this.dataService.getData();
    this.cdr.detectChanges();
  }
}
