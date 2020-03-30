server {
    root /var/www/ditta.io/html;
    index index.html index.htm index.nginx-debian.html;

    server_name ditta.io www.ditta.io;

    location / {
        try_files $uri $uri/ =404;
    }

    location /api {
        proxy_pass http://127.0.0.1:8080;
    }

    location /hellowinston/ {
        proxy_pass http://127.0.0.1:4000/;
    }
    
    listen [::]:443 ssl; # managed by Certbot
    listen 443 ssl; # managed by Certbot
    
    ssl_certificate /etc/letsencrypt/live/ditta.io/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/ditta.io/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot
}
	      
server {
    root /var/www/ditta.io/html;
    index index.html index.htm index.nginx-debian.html;
    server_name ditta.io www.ditta.io;
    listen 80;
    listen [::]:80;
    
#    if ($host = www.ditta.io) {
#        return 301 https://$host$request_uri;
#    } # managed by Certbot

#    if ($host = ditta.io) {
#        return 301 https://$host$request_uri;
#    } # managed by Certbot

    location / {
        try_files $uri $uri/ =404;
    }

    location /hellowinston/ {
        proxy_pass http://127.0.0.1:4000/;
    }
}
