<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Equipo;
use App\Http\Controllers\EquipoController;
use App\Http\Resources\EquipoResource;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
route::get('/equipo/{id}',function($id){
    return new EquipoResource(Equipo::findOrfail($id));
});

route::get('/equipos', function(){
    return EquipoResource::collection(Equipo::all());
});

route::put('/equipo/{id}', [EquipoController::class, 'update']);
route::put('/equipoStat/{id}', [EquipoController::class, 'updateStatus']);
route::delete('/equipo/{id}', [EquipoController::class, 'destroy']);
route::post('/equipos', [EquipoController::class, 'store']);


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
