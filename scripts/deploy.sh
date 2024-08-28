#!/usr/bin/env sh
git checkout --orphan deploy

yarn run build

touch ./dist/CNAME
echo 'neuralwave.ch' > ./dist/CNAME

git --work-tree dist add .
git --work-tree dist commit -m "deploy"
git push origin HEAD:deploy --force
rm -r dist

git checkout -f main
git branch -D deploy
