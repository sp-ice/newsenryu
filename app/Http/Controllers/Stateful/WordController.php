<?php

namespace App\Http\Controllers\Stateful;

use App\Word;
use Illuminate\Http\Request;
use Auth;

class WordController extends \App\Http\Controllers\Controller
{   
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
    	$words = Word::select(
            'words.id',
            'news.id AS news_id',
            'news.title AS news_title',
            'news.url AS news_url',
            'words.word',
            'words.reading',
            'words.len',
            'words.created_at'
        )
        ->join('news','news.id','=','words.news_id')
        ->where('words.len', '=', $request->input('len', 5))
        ->orderby('words.created_at', 'desc');

        if( $request->input('since_id') ){
            $words = $words->where('words.id', '<=', $request->input('since_id'));
        }
        
        return response($words->paginate(50));
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
     * @param  \App\Word  $word
     * @return \Illuminate\Http\Response
     */
    public function show(Word $word)
    {
        return response($word);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Word  $word
     * @return \Illuminate\Http\Response
     */
    public function edit(Word $word)
    {
        //no use
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Word  $word
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Word $word)
    {
        //no use
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Word  $word
     * @return \Illuminate\Http\Response
     */
    public function destroy(Word $word)
    {
        //no use
    }
}
