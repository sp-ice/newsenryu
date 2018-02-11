<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        \App\Console\Commands\CollectNews::class,
        \App\Console\Commands\MakeWords::class,
        
    ];

    private $path_log_getnews = '/var/www/log/command_getnews.log';
    private $path_log_makewords = '/var/www/log/command_makewords.log';

    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        // $schedule->command('inspire')
        //          ->hourly();
        //$schedule->command('getnews')->everyMinute()->appendOutputTo($this->th_log);
	$schedule->command('getnews')->hourly()->appendOutputTo($this->path_log_getnews);
	$schedule->command('makewords')->daily()->appendOutputTo($this->path_log_makewords);
    }

    /**
     * Register the Closure based commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        require base_path('routes/console.php');
    }
}
