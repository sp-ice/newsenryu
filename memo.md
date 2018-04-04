# 環境構築

## docker
yum install -y yum-utils device-mapper-persistent-data lvm2
yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
yum makecache fast
yum install docker-ce
systemctl start docker
systemctl enable docker

## docker-compose
sudo curl -L https://github.com/docker/compose/releases/download/1.16.1/docker-compose-`uname -s`-`uname 
-m` -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
docker-compose --version

## laradock
git clone https://github.com/Laradock/laradock.git
cd path_project
cp env-example .env
vi .env
APPLICATION=laravelプロジェクトの相対パス

### コマンド
docker-compose up -d nginx postgres
docker-compose exec nginx bash
docker-compose exec workspace bash
docker-compose exec postgres bash
docker-compose down

## laravel
 git clone git@bitbucket.org:sp_ice/newsenryu.git
 cd path_project
 composer install #workspaceコンテナで実行
 chmod -R 777 ./storage/
 chmod -R 777 ./bootstrap/cache/
 .env 作成

 ## postgres
 createdb -Upostgres newsenryu
 psql -Upostgres newsenryu -c "create user ns_user with password '586SJdnZ'"
 
 psql newsenryu -c "create user ns_user with password 'ns_pass'"

 php artisan migrate #workspaceコンテナで実行


 ## 自作コマンド
 php artisan make:command CollectNews --command="getnews"
 php artisan make:command MakeWords --command="makewords"
 php artisan getnews
 php artisan makewords

 ## cron設定
 * * * * * php artisan schedule:run >> /dev/null 2>&1







cd /var/www/node
PORT=80 npm start








 ## mecabインストール
 docker-compose exec php−fpm bash

 ### mecab本体
 cd /var/www/src/mecab/mecab
 ./configure  --enable-utf8-only
make
make check
make install

### mecab辞書
echo '/usr/local/lib' >> /etc/ld.so.conf.d/local.conf
ldconfig
　　※makeが落ちるので対策（デフォルトで/usr/local/libが参照されないため）
　　参考：http://moznion.hatenadiary.com/entry/2013/08/23/105920

cd /var/www/src/mecab/mecab-ipadic
 ./configure  --enable-utf8-only
make
make install

### php-mecab
cd /var/www/src/php-mecab/mecab
phpize
./configure
make
make test
make install

cp /var/www/src/mecab.ini /usr/local/etc/php-fpm.d/mecab.conf

ここでコンテナ再起動で、動かなくなった。。。
docker-compose restart




577