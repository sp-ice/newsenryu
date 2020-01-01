<?php

namespace App\Http\Controllers;

use DB;
use App\Senryu;
use App\Like;
use Illuminate\Http\Request;
use Auth;

class SenryuController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {        
        // if( $request->user() ){
        //     print_r($request->user()->id);
        // } else {
        //     print_r("!!!2");
        // }
        // exit;

        //いいねカウント
        $likes_sql = DB::raw(
            '(SELECT senryu_id, COUNT(*) AS like_count'.
            ' FROM likes'.
            ' GROUP BY senryu_id'.
            ') AS good'
        );

        //ログインユーザーいいね済み川柳
        if( $request->user() ){
            $is_liked_sql = DB::raw(
                '(SELECT senryu_id, 1 as is_liked'.
                ' FROM likes'.
                ' WHERE user_id='.$request->user()->id.
                ') as liked'
            );
        }

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
                // 'news_kami.url as kami_url',
                // 'news_naka.url as naka_url',
                // 'news_simo.url as simo_url',
                'good.like_count'
            )
            ->join('users','users.id','=','senryu.user_id')
            ->join('words as words_kami','words_kami.id','=','senryu.word_kami_id')
            ->join('words as words_naka','words_naka.id','=','senryu.word_naka_id')
            ->join('words as words_simo','words_simo.id','=','senryu.word_simo_id')
            // ->join('news as news_kami','news_kami.id','=','words_kami.news_id')
            // ->join('news as news_naka','news_naka.id','=','words_naka.news_id')
            // ->join('news as news_simo','news_simo.id','=','words_simo.news_id')
            ->leftJoin($likes_sql,'good.senryu_id','=','senryu.id')
            ->orderby('senryu.created_at', 'desc');

        if( $request->user() ){
            $senryus = $senryus->addSelect('liked.is_liked');
            $senryus = $senryus->leftJoin($is_liked_sql,'liked.senryu_id','=','senryu.id');
        }

        if( $request->input('since_id') ){
            $senryus = $senryus->where('senryu.id', '<=', $request->input('since_id'));
        }
        switch( $request->input('mode') ){
            case 'mine':
                $senryus = $senryus->where('users.id', '=', $request->user()->id);
                break;
            case 'liked':
                $senryus = $senryus->where('liked.is_liked', '=', 1);
                break;
        }
        // print_r($senryus->toSql());
        // exit;
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
        //no use
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Senryu  $senryu
     * @return \Illuminate\Http\Response
     */
    public function show(Senryu $senryu)
    {
        $user = $senryu->user()->first();
        $kami_ku = $senryu->kami_ku()->first();
        $naka_ku = $senryu->naka_ku()->first();
        $simo_ku = $senryu->simo_ku()->first();
        $kami_news = $kami_ku->news()->first();
        $naka_news = $naka_ku->news()->first();
        $simo_news = $simo_ku->news()->first();
        $like_count = Like::where('senryu_id','=',$senryu->id)
                            ->count();
        // $is_liked = Like::where('senryu_id','=',$senryu->id)
        // ->where('user_id','=', $request->user()->id)
        // ->count();        
        
        $senryu->user_id = $user->id;
        $senryu->user_name = $user->name;
        $senryu->kami_ku = $kami_ku->word;
        $senryu->naka_ku = $naka_ku->word;
        $senryu->simo_ku = $simo_ku->word;
        $senryu->kami_id = $kami_ku->id;
        $senryu->naka_id = $naka_ku->id;
        $senryu->simo_id = $simo_ku->id;
        $senryu->kami_url = $kami_news->url;
        $senryu->naka_url = $naka_news->url;
        $senryu->simo_url = $simo_news->url;
        $senryu->kami_title = $kami_news->title;
        $senryu->naka_title = $naka_news->title;
        $senryu->simo_title = $simo_news->title;
        $senryu->like_count = $like_count;

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
        //no use
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Senryu  $senryu
     * @return \Illuminate\Http\Response
     */
    public function destroy(Senryu $senryu)
    {
    	//no use
    }
}
