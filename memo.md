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
 php artisan getnews

 ## cron設定
 * * * * * php artisan schedule:run >> /dev/null 2>&1