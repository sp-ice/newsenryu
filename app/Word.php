<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Word extends Model
{
     /**
     * モデルに関連付けるデータベースのテーブルを指定
     *
     * @var string
     */
     protected $table = 'words';

     /**
     * createメソッド実行時に、入力を禁止するカラムの指定
     *
     * @var array
     */
     protected $guarded = array('id');
     
    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function news()
    {
        return $this->belongsTo(News::class);
    }
}
