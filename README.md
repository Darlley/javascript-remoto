![JavaScript Ninja Capa](https://images-na.ssl-images-amazon.com/images/I/71WrXhOls9L.jpg)

Processo de simulação de domínios multplos (atualizado 2022)

1. Em **C:\xampp\apache\conf\httpd.conf**
> User USUARIODOPC
>
> Group Administradores

2. em **C:\xampp\apache\conf\extra\httpd-vhosts.conf** adicionar
> NameVirtualHost *:80
>
> <VirtualHost *:80>
>
  >  ServerAdmin postmaster@publisher.localhost
  >
  >  DocumentRoot "C:\xampp\htdocs\javascript-remoto\publisher"
  >
  >  ServerName publisher.localhost
  >
  >  ServerAlias www.publisher.localhost
  >
  >  ErrorLog "logs/publisher.localhost-error.log"
  >
  >  CustomLog "logs/publisher.localhost-access.log" combined
  >
  >> <Directory "C:\xampp\htdocs\javascript-remoto\publisher">
  >>
  >>    AllowOverride All
  >>
  >>    Order allow,deny
  >>
  >>    Allow from all
  >>
  >>    Require all granted
  >>
  >> </Directory>
>
> </VirtualHost>

e

> <VirtualHost *:80>
>    ServerAdmin postmaster@widget.localhost
>
>    DocumentRoot "C:\xampp\htdocs\javascript-remoto\widget"
>
>    ServerName widget.localhost
>
>    ServerAlias www.widget.localhost
>
>    ErrorLog "logs/widget.localhost-error.log"
>
>    CustomLog "logs/widget.localhost-access.log" combined
>
>    <Directory "C:\xampp\htdocs\javascript-remoto\widget">
>>
>>        AllowOverride All
>>
>>        Order allow,deny
>>
>>        Allow from all
>>
>>        Require all granted
>    </Directory>
> </VirtualHost>

3. No arquivo **C:\Windows\System32\drivers\etc\hosts** adicionar

> 127.0.0.1 publisher.localhost
>
> 127.0.0.1 widget.localhost