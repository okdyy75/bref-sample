FROM composer:2 as composer2

FROM bref/php-81-fpm-dev:2

RUN yum update -y && yum install -y unzip

COPY --from=composer2 /usr/bin/composer /usr/bin/composer
