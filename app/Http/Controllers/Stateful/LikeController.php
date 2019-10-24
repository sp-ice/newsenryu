<?php

namespace App\Http\Controllers\Stateful;

use Illuminate\Http\Request;
use Auth;
use App\Like;
use DB;

class LikeController extends \App\Http\Controllers\Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $like = new Like();
        $like->user_id = $request->user()->id;
        $like->senryu_id = $request->input('senryu_id');
        if($request->input('flg_delete')){
            $like->delete();
        }else{
            $like->save();
        }
        return response($like, 201);
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Like  $like
     * @return \Illuminate\Http\Response
     */
    public function destroy(Like $like)
    {
        $like->delete();
        return response('{}');
    }
}
