<?php

namespace App\Http\Controllers;

use DB;
use App\Senryu;
use Illuminate\Http\Request;

class SenryuController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //いいねカウント
        $likes_sql = DB::raw(
            '(SELECT senryu_id, COUNT(*) AS like_count'.
            ' FROM likes'.
            ' GROUP BY senryu_id'.
            ') AS good'
        );

        //ログインユーザーいいね済み川柳
        $is_liked_sql = DB::raw(
            '(SELECT senryu_id, 1 as is_liked'.
            ' FROM likes'.
            ' WHERE user_id='.\App\User::query()->first()->id.//todo
            ') as liked'
        );

        $senryus = Senryu::select(
                'senryu.id',
                'senryu.created_at',
                //'senryu.good',
                'senryu.view',
                'users.id as user_id',
                'users.name as user_name',
                'words_kami.word as kami_ku',
                'words_naka.word as naka_ku',
                'words_simo.word as simo_ku',
                'words_kami.id as kami_id',
                'words_naka.id as naka_id',
                'words_simo.id as simo_id',
                'news_kami.url as kami_url',
                'news_naka.url as naka_url',
                'news_simo.url as simo_url',
                'good.like_count',
                'liked.is_liked'
            )
            ->join('users','users.id','=','senryu.user_id')
            ->join('words as words_kami','words_kami.id','=','senryu.word_kami_id')
            ->join('words as words_naka','words_naka.id','=','senryu.word_naka_id')
            ->join('words as words_simo','words_simo.id','=','senryu.word_simo_id')
            ->join('news as news_kami','news_kami.id','=','words_kami.news_id')
            ->join('news as news_naka','news_naka.id','=','words_naka.news_id')
            ->join('news as news_simo','news_simo.id','=','words_simo.news_id')
            ->leftJoin($likes_sql,'good.senryu_id','=','senryu.id')
            ->leftJoin($is_liked_sql,'liked.senryu_id','=','senryu.id')
            ->orderby('senryu.created_at', 'desc');

        if( $request->input('since_id') ){
            $senryus = $senryus->where('senryu.id', '<=', $request->input('since_id'));
        }
        switch( $request->input('mode') ){
            case 'mine':
                // todo: ログインユーザのidが入るようにする
                $senryus = $senryus->where('users.id', '=', \App\User::query()->first()->id);
                break;
            case 'liked':
                $senryus = $senryus->where('liked.is_liked', '=', 1);
                break;
        }
        return response($senryus->paginate());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //no use
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
        $senryu = new Senryu();
        // todo: ログインユーザのidが入るようにする
        $senryu->user_id = \App\User::query()->first()->id;
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
        return response($senryu);
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
