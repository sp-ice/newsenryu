<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Senryu extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('senryu', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->UnsignedInteger('user_id');
            $table->UnsignedInteger('word_kami_id');
            $table->UnsignedInteger('word_naka_id');
            $table->UnsignedInteger('word_simo_id');
            $table->UnsignedInteger('good');
            $table->UnsignedInteger('view');
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('word_kami_id')->references('id')->on('words');
            $table->foreign('word_naka_id')->references('id')->on('words');
            $table->foreign('word_simo_id')->references('id')->on('words');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('senryu');
    }
}
