onexecute bath_path/installer.js
           wait(5)
           get execute from installer.js
end;

if execute = need_update
   get.files from url(https://github.com/nativclient/nativclient-minecraft/)
end;