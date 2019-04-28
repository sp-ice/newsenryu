<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Socialite;
use Auth;
use App\User;

class OAuthLoginController extends Controller
{
  /**
   * OAuth認証 リクエスト
   * @return mixed
   */
  public function getAuth($provider) {
    return Socialite::driver($provider)->redirect();
  }

  /**
   * OAuth認証　コールバック
   */
  public function authCallback($provider) {
    // ユーザ属性を取得
    $user = Socialite::driver($provider)->user();

    // // // デバッグ（デモンストレーション用）
    // echo'<pre>'; print_r($user); echo'<pre>'; exit;
    $authUser = $this->findOrCreateUser($user, $provider);
        Auth::login($authUser, true);
        // return redirect($this->redirectTo);
        return redirect('/app');
  }

  public function findOrCreateUser($user, $provider)
    {
        $authUser = User::where('email', $user->email)->first();
        if ($authUser) {
            return $authUser;
        }
        return User::create([
            'name'     => $user->name,
            'email'    => $user->email,
            'provider' => $provider,
            'provider_id' => $user->id
        ]);
    }
}
