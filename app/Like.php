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

     // プライマリキー設定
    protected $primaryKey = ['senryu_id', 'user_id'];
    // increment無効化
    public $incrementing = false;

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
