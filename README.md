# bref-sample

## 実行環境
```
sls -v
Framework Core: 3.33.0
Plugin: 6.2.3
SDK: 4.3.2

php -v
PHP 8.1.22 (cli) (built: Aug  6 2023 16:26:30) (NTS)
Copyright (c) The PHP Group
Zend Engine v4.1.22, Copyright (c) Zend Technologies
    with Zend OPcache v8.1.22, Copyright (c), by Zend Technologies

php artisan -V
Laravel Framework 10.18.0

node -v
v18.16.1
```


## 初期セットアップ

### 必要ツールインストール
```
# serverlessインストール
npm install -g serverless

# awsプロファイル作成
aws configure
```

### カスタムドメイン作成
1. Route53からホストゾーン作成
2. 作成したホストのNSレコードをドメイン管理画面に登録
3. ACMから先ほど作成したドメインの証明書をリクエスト（※`us-east-1`リージョン）
4. 証明書の検証が完了したら「Route53でレコードを作成」（Route53のホストにCNAMEが登録される）


## コマンド

```
# 初期ビルド
docker compose build

# コンテナ立ち上げ
docker compose up -d

# 初回立ち上げ時composer install
docker compose exec lambda composer install

# コンテナ内に入る
docker compose exec -it lambda bash

# コンテナ終了
docker compose down
```
