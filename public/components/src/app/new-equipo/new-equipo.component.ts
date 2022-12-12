import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EquipoService } from '../services/equipo.service';
import { EquiposComponent } from '../equipos/equipos.component';

@Component({
  selector: 'app-new-equipo',
  templateUrl: './new-equipo.component.html',
  styleUrls: ['./new-equipo.component.scss']
})

export class NewEquipoComponent implements OnInit {
  equipoId: any;
  equipo:any;
  equipos:any;

  constructor(private activerouter:ActivatedRoute, private router: Router, private equipoService: EquipoService ) { }

  ngOnInit(): void {
   const routeParams = this.activerouter.snapshot.paramMap;
   this.equipoId = Number(routeParams.get('id'));
    this.equipoService.find(this.equipoId).subscribe((data:any)=>{
      this.equipo = data;
      console.log(this.equipo)
    });

  }

update(id:number,gce_nombre_equipo:string, gce_board:string,gce_case:string,gce_procesador:string,gce_grafica:string,gce_ram:string,gce_disco_duro:string,gce_teclado:string,gce_mouse:string,gce_pantalla:string,gce_estado:string){
  this.equipo ={
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
  
  this.equipoService.update(id,this.equipo).subscribe((res)=>{
  this.router.navigateByUrl('/');  
  })
}






}
