git add .
set nomeUser= Anderson Grotto
set dataHora=%date:~0,2%/%date:~3,2%/%date:~6,4%
git commit -m "Commit de %nomeUser%. Data e Hora: %dataHora% - %time%"
git push -u origin main
timeout 5