import { SugerenciasService } from './../../services/sugerencias.service';
import { ExportsService } from './../../services/exports.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.css']
})
export class ExportComponent implements OnInit {


  constructor(private ExportsService:ExportsService) { }

  ngOnInit(): void {
  }

  exportExcel_suggestion(){
    this.ExportsService.exportSugerencias().subscribe({
      next: (data: any) => {
        let file = new Blob([data], {
          type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        });
        let fileURL = URL.createObjectURL(file);
        var anchor = document.createElement('a');
        anchor.download="suggestion_report.xlsx";
        anchor.href=fileURL;
        anchor.click();
      },
      error: (error: any) => {
        console.log("No se pudo exportar");
      }
    }
    );
  }

  //
  exportExcel_admin(){
    this.ExportsService.exportAdmin().subscribe({
      next: (data: any) => {
        let file = new Blob([data], {
          type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        });
        let fileURL = URL.createObjectURL(file);
        var anchor = document.createElement('a');
        anchor.download="admin_report.xlsx";
        anchor.href=fileURL;
        anchor.click();
      },
      error: (error: any) => {
        console.log("No se pudo exportar");
      }
    }
    );
  }

  //
  exportExcel_mall(){
    this.ExportsService.exportMall().subscribe({
      next: (data: any) => {
        let file = new Blob([data], {
          type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        });
        let fileURL = URL.createObjectURL(file);
        var anchor = document.createElement('a');
        anchor.download="mall_report.xlsx";
        anchor.href=fileURL;
        anchor.click();
      },
      error: (error: any) => {
        console.log("No se pudo exportar");
      }
    }
    );
  }

  //
  exportExcel_new(){
    this.ExportsService.exportNew().subscribe({
      next: (data: any) => {
        let file = new Blob([data], {
          type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        });
        let fileURL = URL.createObjectURL(file);
        var anchor = document.createElement('a');
        anchor.download="new_report.xlsx";
        anchor.href=fileURL;
        anchor.click();
      },
      error: (error: any) => {
        console.log("No se pudo exportar");
      }
    }
    );
  }

  //
  exportExcel_offer(){
    this.ExportsService.exportOffer().subscribe({
      next: (data: any) => {
        let file = new Blob([data], {
          type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        });
        let fileURL = URL.createObjectURL(file);
        var anchor = document.createElement('a');
        anchor.download="offer_report.xlsx";
        anchor.href=fileURL;
        anchor.click();
      },
      error: (error: any) => {
        console.log("No se pudo exportar");
      }
    }
    );
  }

  //
  exportExcel_product(){
    this.ExportsService.exportProduct().subscribe({
      next: (data: any) => {
        let file = new Blob([data], {
          type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        });
        let fileURL = URL.createObjectURL(file);
        var anchor = document.createElement('a');
        anchor.download="product_report.xlsx";
        anchor.href=fileURL;
        anchor.click();
      },
      error: (error: any) => {
        console.log("No se pudo exportar");
      }
    }
    );
  }

  //
  exportExcel_store(){
    this.ExportsService.exportStore().subscribe({
      next: (data: any) => {
        let file = new Blob([data], {
          type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        });
        let fileURL = URL.createObjectURL(file);
        var anchor = document.createElement('a');
        anchor.download="store_report.xlsx";
        anchor.href=fileURL;
        anchor.click();
      },
      error: (error: any) => {
        console.log("No se pudo exportar");
      }
    }
    );
  }

  //
  exportExcel_product_store(){
    this.ExportsService.exportProductStore().subscribe({
      next: (data: any) => {
        let file = new Blob([data], {
          type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        });
        let fileURL = URL.createObjectURL(file);
        var anchor = document.createElement('a');
        anchor.download="product_store_report.xlsx";
        anchor.href=fileURL;
        anchor.click();
      },
      error: (error: any) => {
        console.log("No se pudo exportar");
      }
    }
    );
  }

  //
  exportExcel_store_mall(){
    this.ExportsService.exportStore().subscribe({
      next: (data: any) => {
        let file = new Blob([data], {
          type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        });
        let fileURL = URL.createObjectURL(file);
        var anchor = document.createElement('a');
        anchor.download="store_mall_report.xlsx";
        anchor.href=fileURL;
        anchor.click();
      },
      error: (error: any) => {
        console.log("No se pudo exportar");
      }
    }
    );
  }

}
