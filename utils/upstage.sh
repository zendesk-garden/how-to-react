#!/bin/sh

if [ $(git rev-parse --abbrev-ref HEAD) = 'stage-0' ]
then
  for i in {1..9}
  do
    git checkout stage-$i
    git merge stage-$(($i - 1))
    git push
  done

  git checkout master
  git merge stage-9
  git push
else
  echo Initiate upstage on branch \'stage-0\'.
fi