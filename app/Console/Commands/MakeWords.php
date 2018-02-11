<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\News;
use App\Word;

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
                //形態素解析
		$q = urlencode($news->title);
                $url = "http://127.0.0.1/kuromoji?s=$q";
		$ret_str = file_get_contents($url);
                $ret_obj = json_decode($ret_str);
		
		//5文字or7文字判定
		$pre_len_reading = 0;
		$pre_keitaiso="";
		foreach($ret_obj as $keitaiso){
                    if(property_exists($keitaiso, 'reading')){
                        $len_reading = $this->countReading($keitaiso->reading);
			$len_reading_seq = $len_reading + $pre_len_reading;
                        if($len_reading == 5 || $len_reading == 7){
                            $word = $this->createWord($news->id,
						      $len_reading,
						      $keitaiso->basic_form,
						      $keitaiso->reading,
						      array($keitaiso));
                            echo 'OK:',$word->id,"\n";
                        }else if($len_reading_seq == 5 || $len_reading_seq == 7){
                            $word = $this->createWord($news->id,
						      $len_reading_seq,
						      $pre_keitaiso->basic_form.$keitaiso->basic_form,
						      $pre_keitaiso->reading.$keitaiso->reading,
						      array($pre_keitaiso, $keitaiso));
			}
			$pre_keitaiso = $keitaiso;
			$pre_len_reading = $len_reading;
                    }
                }

		//newsを分析済みに更新
		$news->flg_analyze=1;
		$news->save();
		
            } catch (Exception $e) {
                echo 'ERR:',  $e->getMessage(), "\n";
                var_dump($e->getTrace());
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
    protected function createWord(int $news_id, int $len, string $str_word, string $str_reading, array $arr_keitaiso)
    {
        return Word::create([
            'news_id' => $news_id,
            'word' => $str_word,
            'reading' => $str_reading,
            'len' => $len,
            'analyze_data' => json_encode($arr_keitaiso)
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

    /**
     * 文字カウント
     */
    protected function countReading(string $reading)
    {
        $arr_exclude_char = array("ァ","ィ","ゥ","ェ","ォ","ャ","ュ","ョ",
                                  "、","。","！","？",",","・","/","／","…","!","?",
                                  "「","」","(",")","（","）","【","】",
                                  " ","　");
        $reading = str_replace($arr_exclude_char, "", trim($reading));
        return iconv_strlen($reading);
    }
}
