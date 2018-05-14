<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\News;
use App\Site;
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
     * ログキー
     */
    protected $log_key = '';

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
        $sites = Site::all();
        foreach ($sites as $site) {
            try{
                $this->log_key = $site->name;
                $this->echoLog("RSS取得開始($site->url)");
                $rss = simplexml_load_file($site->url);
                $this->echoLog("RSS取得完了");
                $this->echoLog("newsテーブル登録開始");
                $cnt_created = 0;
                foreach ($rss->item as $item) {
                    $data = json_decode(json_encode($item),TRUE);
                    if(!array_key_exists('pubDate', $data)){
                        $data['pubDate'] = date("Y-m-d H:i:s");
                    }

                    $validator = app("validator");
                    $v = $validator->make($data, [
                        'link' => 'required|unique:news,url',
                        'title' => 'required',
                        'pubDate' => 'required',
                    ]);
                    if ($v->fails()) {
                        $errors = $v->errors();
                        foreach ($errors->all() as $message) {
                            $this->echoLog("登録失敗($message)");
                        }
                        continue;
                    }

                    $news = $this->createNews($data,$site->id);
                    $cnt_created++;
                }
                $this->echoLog("newsテーブル登録完了($cnt_created件)");
            } catch (Exception $e) {
                $this->echoLog("予期せぬエラー($e->getMessage())");
                continue;
            }
        }
    }

    /**
     * Newsテーブル登録処理
     *
     * @param  array  $data
     * @param  integer  $site_id
     * @return \App\News
     */
    protected function createNews(array $data, string $site_id)
    {
        return News::create([
            'url' => $data['link'],
            'title' => $data['title'],
            'pub_date' => $data['pubDate'],
            'site_id' => $site_id,
            'flg_analyze' => 0,
        ]);
    }

    /**
     * ログ出力
     */
    protected function echoLog(string $msg){
        echo date("Y-m-d H:i:s.v")." [$this->log_key] $msg\n";
    }
}
