npm run build
cd dist
git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:Behemyth/Behemyth.github.io.git master