<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Senryu extends Model
{
    /**
     * モデルに関連付けるデータベースのテーブルを指定
     *
     * @var string
     */
     protected $table = 'senryu';

     /**
     * createメソッド実行時に、入力を禁止するカラムの指定
     *
     * @var array
     */
     protected $guarded = array('id');
     
    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    
    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function kami_ku()
    {
        return $this->belongsTo(Word::class, 'word_kami_id');
    }
    
    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function naka_ku()
    {
        return $this->belongsTo(Word::class, 'word_naka_id');
    }
    
    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function simo_ku()
    {
        return $this->belongsTo(Word::class, 'word_simo_id');
    }
}
