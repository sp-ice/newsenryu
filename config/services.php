<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Third Party Services
    |--------------------------------------------------------------------------
    |
    | This file is for storing the credentials for third party services such
    | as Stripe, Mailgun, SparkPost and others. This file provides a sane
    | default location for this type of information, allowing packages
    | to have a conventional place to find your various credentials.
    |
    */

    'mailgun' => [
        'domain' => env('MAILGUN_DOMAIN'),
        'secret' => env('MAILGUN_SECRET'),
    ],

    'ses' => [
        'key' => env('SES_KEY'),
        'secret' => env('SES_SECRET'),
        'region' => 'us-east-1',
    ],

    'sparkpost' => [
        'secret' => env('SPARKPOST_SECRET'),
    ],

    'stripe' => [
        'model' => App\User::class,
        'key' => env('STRIPE_KEY'),
        'secret' => env('STRIPE_SECRET'),
    ],
    
    /**
     * socialite Settings
     */
    'twitter' => [
      'client_id'     => env('TWITTER_API_KEY'),
      'client_secret' => env('TWITTER_API_SECRET'),
      'redirect'      => env('TWITTER_CALLBACKURL'),
    ],

    'facebook' => [
      'client_id'     => env('FACEBOOK_API_ID'),
      'client_secret' => env('FACEBOOK_API_SECRET'),
      'redirect'      => env('FACEBOOK_CALLBACKURL'),
    ],

    'google' => [
      'client_id'     => env('GOOGLEPLUS_API_ID'),
      'client_secret' => env('GOOGLEPLUS_API_SECRET'),
      'redirect'      => env('GOOGLEPLUS_CALLBACKURL'),
    ],
];
