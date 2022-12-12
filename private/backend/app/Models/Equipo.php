<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Equipo extends Model
{
    use HasFactory;

    protected $primaryKey = 'gce_id';

    protected $fillable = [
     'gce_id','gce_nombre_equipo','gce_board','gce_case','gce_procesador','gce_grafica','gce_ram','gce_disco_duro','gce_teclado','gce_mouse','gce_pantalla'
    ];

    protected $table = 'gce_caracteristicas';
}
