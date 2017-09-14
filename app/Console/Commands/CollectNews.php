<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\News;
// use Illuminate\Validation\Validator;
use Illuminate\Validation\Factory;

class CollectNews extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'getnews';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $ar_url = array(
            'yahoo' => 'https://news.yahoo.co.jp/pickup/rss.xml',
            'yahoo2' => 'https://news.yahoo.co.jp/pickup/domestic/rss.xml',
        );

        foreach ($ar_url as $src => $url) {
            try{
                $rss = simplexml_load_file($url);
                foreach ($rss->channel->item as $item) {
                    $data = json_decode(json_encode($item),TRUE);

                    $validator = app("validator");
                    $v = $validator->make($data, [
                        'link' => 'required|unique:news,url',
                        'title' => 'required',
                        'pubDate' => 'required',
                    ]);
                    if ($v->fails()) {
                        $errors = $v->errors();
                        foreach ($errors->all() as $message) {
                            echo $message, "\n";
                        }
                        continue;
                    }

                    $news = $this->createNews($data,$src);
                    echo 'OK:',$news->id,"\n";
                }
            } catch (Exception $e) {
                echo 'ERR:',  $e->getMessage(), "\n";
                continue;
            }
        }
    }

    /**
     * Newsテーブル登録処理
     *
     * @param  array  $data
     * @param  string  $src
     * @return \App\News
     */
    protected function createNews(array $data, string $src)
    {
        return News::create([
            'url' => $data['link'],
            'title' => $data['title'],
            'pub_date' => $data['pubDate'],
            'src' => $src,
            'flg_analyze' => 0,
        ]);
    }
}
