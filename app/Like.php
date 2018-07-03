<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Like extends Model
{
    /**
     * モデルに関連付けるデータベースのテーブルを指定
     *
     * @var string
     */
     protected $table = 'likes';

     /**
     * createメソッド実行時に、入力を禁止するカラムの指定
     *
     * @var array
     */
     protected $guarded = array('id');

     /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
     public function senryus()
     {
         return $this->hasMany(Senryu::class);
     }

     /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
     public function users()
     {
         return $this->hasMany(User::class);
     }
}
