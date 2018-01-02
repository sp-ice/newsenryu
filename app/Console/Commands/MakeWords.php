<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\News;
use App\Word;
// use Illuminate\Validation\Validator;
use Illuminate\Validation\Factory;

class MakeWords extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'makewords';

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
        $clc_news = $this->getNews();
        foreach ($clc_news as $news) {
            try{
                $q = urlencode($news->title);
                $url = "http://127.0.0.1/kuromoji?s=$q";
		$ret_str = file_get_contents($url);
                $ret_obj = json_decode($ret_str);
                foreach($ret_obj as $keitaiso){
print_r($keitaiso);
                    if(property_exists($keitaiso, 'reading')){
                        $len_reading = iconv_strlen($keitaiso->reading);
print_r($len_reading);
                        if($len_reading == 5 || $len_reading == 7){
                            $word = $this->createWord($news->id, $keitaiso->reading);
                            echo 'OK:',$word->id,"\n";
                        }
                    }
                }
exit;

                $rss = simplexml_load_file($url);
                print_r($rss);
exit;
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
     * Wordテーブル登録処理
     *
     * @param  int  $news_id
     * @param  string  $str_word
     * @return \App\Word
     */
    protected function createWord(int $news_id, string $str_word)
    {
        return Word::create([
            'news_id' => $news_id,
            'word' => $str_word,
            'len' => iconv_strlen($str_word),
        ]);
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
    
    /**
     * Newsテーブル抽出処理
     *
     * @return Collection
     */
    protected function getNews()
    {
        return News::where('flg_analyze', 0)->get();
    }
}
