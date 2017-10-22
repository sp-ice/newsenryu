<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        
        $faker = \Faker\Factory::create();
        
        $user = new \App\User();
        $user->name = $faker->name;
        $user->email = $faker->unique()->safeEmail;
        $user->password = bcrypt('password');
        $user->remember_token = str_random(10);
        $user->save();
        
        for ($i = 0; $i < 100; $i++) {
            $word5 = new \App\Word();
            $word5->news_id = 1;
            $word5->word = substr($faker->text(), 0, 5);
            $word5->len = 5;
            $word5->save();    
        }
        
        for ($i = 0; $i < 100; $i++) {
            $word7 = new \App\Word();
            $word7->news_id = 1;
            $word7->word = substr($faker->text(), 0, 7);
            $word7->len = 7;
            $word7->save();    
        }
        
        for ($i = 0; $i < 10; $i++) {
            $senryu = new \App\Senryu();
            $senryu->user_id = $user->id;
            $senryu->word_kami_id = $word5->id;
            $senryu->word_naka_id = $word7->id;
            $senryu->word_simo_id = $word5->id;
            $senryu->good = 0;
            $senryu->view = 0;
            $senryu->save();   
        }
                
    }
}
