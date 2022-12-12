<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Equipo;
class EquipoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Equipo::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return Equipo::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Equipo::find($id); 
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        
    if(Equipo::where("gce_id", $id)->exists()){
        $equipo = Equipo::find($id);
        $equipo->gce_estado = $request -> gce_estado;
        $equipo->gce_board = $request -> gce_board;
        $equipo->gce_case = $request -> gce_case;
        $equipo-> gce_disco_duro  = $request -> gce_disco_duro;
        $equipo->gce_grafica = $request->gce_grafica;
        $equipo->gce_mouse = $request->gce_mouse;
        $equipo->gce_nombre_equipo = $request->gce_nombre_equipo;
        $equipo->gce_pantalla = $request->gce_pantalla;
        $equipo->gce_procesador = $request->gce_procesador;
        $equipo->gce_ram = $request->gce_ram;
        $equipo->gce_teclado = $request->gce_teclado;
        $equipo->save();
        return response()->json([
            "message" => "record updated succesfully"
        ],200);

    }
    }

    public function updateStatus(Request $request, $id)
    {
        
    if(Equipo::where("gce_id", $id)->exists()){
        $equipo = Equipo::find($id);
        $equipo->gce_estado = $request -> gce_estado;

        $equipo->save();
        return response()->json([
            "message" => "record updated succesfully"
        ],200);

    }
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
         if(Equipo::where('gce_id', $id)->exists()){
        $equipo = Equipo::find($id);
        $equipo->delete();

        return response()->json([
            "message" => "record deleted succesfully"
        ],200);
        
    }
    }
}
