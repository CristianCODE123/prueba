<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class EquipoResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'gce_id' => $this->gce_id,
            'gce_nombre_equipo' => $this->gce_nombre_equipo,
            'gce_board' => $this->gce_board,
            'gce_case' => $this->gce_case,
            'gce_procesador' => $this->gce_procesador,
            'gce_grafica' => $this->gce_grafica,
            'gce_ram' => $this->gce_ram,
            'gce_disco_duro' => $this->gce_disco_duro,
            'gce_teclado' => $this->gce_teclado,
            'gce_mouse' => $this->gce_mouse,
            'gce_pantalla' => $this->gce_pantalla,
            'gce_estado' => $this->gce_estado
        ];
    }
}
