import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EquipoService } from '../services/equipo.service';
import { Router } from '@angular/router';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.scss']
})
export class EquiposComponent implements OnInit {
  
  constructor(private equipoService:EquipoService, private router: Router,private renderer: Renderer2) { }
  
  

  

  equipos:any;
  Nuevoequipos:any;
  ngOnInit(): void {
    this.showEquipos();
  }
  showEquipos(){
    this.equipos = this.equipoService.listEquipos().subscribe(equipo=>{
      this.equipos = equipo;
      console.log(this.equipos)
    })
  }

  add(gce_board:string, gce_case:string, gce_disco_duro:string, gce_estado:string, gce_grafica:string, gce_mouse:string, gce_nombre_equipo:string, gce_pantalla:string, gce_procesador:string, gce_ram: string, gce_teclado:string ){
    this.equipos ={
      'gce_board': gce_board,
      'gce_case': gce_case,
      'gce_disco_duro': gce_disco_duro,
      'gce_estado': gce_estado,
      'gce_grafica':gce_grafica,
      'gce_mouse': gce_mouse,
      'gce_nombre_equipo': gce_nombre_equipo,
      'gce_pantalla': gce_pantalla,
      'gce_procesador': gce_procesador,
      'gce_ram': gce_ram,
      'gce_teclado' :gce_teclado
    };
    
    this.equipoService.addEquipo(this.equipos as any).subscribe(equipo=>{
      this.equipos = equipo;
    })
    this.showEquipos();
    console.log(this.equipos);
  }

  deleteEquipo(id:any){
    this.equipoService.deleteEquipo(id).subscribe(
      res => {
      this.equipos = this.equipos.filter((a:any) => a.id == id);
        this.showEquipos();
    }
    
    );
    this.router.navigateByUrl('/')
  }

 


  updateStatus(gce_id:number,estado:string){
    
    this.equipos = {
      gce_estado: estado
    }
    
    if(this.equipos.gce_estado == "1"){

      this.Nuevoequipos = {
        gce_estado:0
      }
    }else{
      this.Nuevoequipos = {
        gce_estado:1
      }
    }
    console.log(this.equipos.gce_estado);
    this.equipoService.updateStatus(gce_id ,this.Nuevoequipos).subscribe((res)=>{
    this.showEquipos();
    this.router.navigateByUrl('/');  

    }
  )}
  
}
