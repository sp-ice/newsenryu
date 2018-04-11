<?php

namespace Tests\Feature;

use App\Word;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class WordTest extends TestCase
{
    public function testIndex()
    {
        $response = $this->get('/api/word');
 
        $response->assertStatus(200);
        $this->assertCount(15, $response->json()['data']);
    }
 
    public function testShow()
    {
        $response = $this->get('/api/word/18061');
 
        $response->assertStatus(200);
    }
}
