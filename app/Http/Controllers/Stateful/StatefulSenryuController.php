<?php

namespace App\Http\Controllers\Stateful;

use DB;
use App\Senryu;
use App\Like;
use Illuminate\Http\Request;
use Auth;
use Validator;

class StatefulSenryuController extends \App\Http\Controllers\SenryuController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return parent::index($request);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
//id           | bigint                         | not null default nextval('senryu_id_seq'::regclass)
// user_id      | integer                        | not null
// word_kami_id | integer                        | not null
// word_naka_id | integer                        | not null
// word_simo_id | integer                        | not null
// good         | integer                        | not null
// view         | integer                        | not null
 //created_at   | timestamp(0) without time zone | 
 //updated_at   | timestamp(0) without time zone |	

        $validator = Validator::make($request->all(), [
            'word_kami_id' => 'required'    ,
            'word_naka_id' => 'required',
            'word_simo_id' => 'required',
        ],
        [
            'word_kami_id.required' => '上の句を入力してください',
            'word_naka_id.required' => '中の句を入力してください',
            'word_simo_id.required' => '下の句を入力してください',
        ]);
        if ($validator->fails()) {
            return response($validator->errors()->toArray(), 400);
        }

        $senryu = new Senryu();
        $senryu->user_id = $request->user()->id;
        $senryu->word_kami_id = $request->input('word_kami_id');
        $senryu->word_naka_id = $request->input('word_naka_id');
        $senryu->word_simo_id = $request->input('word_simo_id');
        $senryu->good = 0;
        $senryu->view = 0;
        $senryu->save();
        return response($senryu, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Senryu  $senryu
     * @return \Illuminate\Http\Response
     */
    public function show(Senryu $senryu)
    {
        $is_liked = Like::where('senryu_id','=',$senryu->id)
                        ->where('user_id','=',Auth::user()->id)
                        ->count();
        $senryu->is_liked = $is_liked;
        return parent::show($senryu);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Senryu  $senryu
     * @return \Illuminate\Http\Response
     */
    public function edit(Senryu $senryu)
    {
        //no use
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Senryu  $senryu
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Senryu $senryu)
    {
    	if($request->input('word_kami_id')){
    		$senryu->word_kami_id = $request->input('word_kami_id');
    	}
    	if($request->input('word_naka_id')){
            	$senryu->word_naka_id = $request->input('word_naka_id');
    	}
    	if($request->input('word_simo_id')){
           		$senryu->word_simo_id = $request->input('word_simo_id');
    	}
    	if($request->input('good')){
            	$senryu->good = $request->input('good');
    	}
    	if($request->input('view')){
            	$senryu->view = $request->input('view');
    	}
        $senryu->save();
        return response($senryu);
 
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Senryu  $senryu
     * @return \Illuminate\Http\Response
     */
    public function destroy(Senryu $senryu)
    {
    	$senryu->delete();
    	return response('{}');
    }
}
