<?php

namespace Tests\Feature;

use App\Senryu;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class SenryuTest extends TestCase
{
    public function testIndex()
    {
        $response = $this->get('/api/senryu');
 
        $response->assertStatus(200);
        $this->assertCount(15, $response->json()['data']);
    }
 
    public function testShow()
    {
        $response = $this->get('/api/senryu/1');
 
        $response->assertStatus(200);
    }

    public function testStore()
    {
        $data = ['word_kami_id' => 9441,
		        'word_naka_id' => 9431,
		        'word_simo_id' => 9429 ];
        $response = $this->post('/api/senryu', $data);
 
        $response->assertStatus(201);
        $response->assertJson($data);
        $senryu = Senryu::query()->find($response->json()['id']);
        $this->assertInstanceOf(Senryu::class, $senryu);

        $this->stored_id = $senryu->id;
    }

    public function testUpdateContent()
    {
    	$targetSenryu = Senryu::orderby('created_at', 'asc')->first();
        $data = ['word_kami_id' => 9445,
		        'word_naka_id' => 9452,
		        'word_simo_id' => 9459,	
		        'good' => $targetSenryu->good + 1,
		        'view' => $targetSenryu->view + 1 ];
        $response = $this->patch('/api/senryu/'.$targetSenryu->id, $data);
        
        $response->assertStatus(200);
        $response->assertJson($data);
        $senryu = Senryu::query()->find($targetSenryu->id);
        $this->assertSame(9445, $senryu->word_kami_id);
        $this->assertSame(9452, $senryu->word_naka_id);
        $this->assertSame(9459, $senryu->word_simo_id);
    }

    public function testDelete()
    {
    	$targetSenryu = Senryu::orderby('created_at', 'desc')->first();
        $response = $this->delete('/api/senryu/'.$targetSenryu->id);
        $response->assertStatus(200);
        $this->assertNull(Senryu::query()->find($targetSenryu->id));
    }


}
