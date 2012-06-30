### heroku-cube
A boilerplate for deploying Square's Cube time-series visualizer to Heroku.

### Instructions

Clone this repository

    git clone https://github.com/partyio/heroku-cube.git

cd into the directory and install dependencies

    npm install

Create two Heroku apps - one for the evaluator and one for the collector. (make sure to substitute the names in these examples!)

    heroku create my-collector-app
    heroku create my-evaluator-app

Set up your git remotes to the Heroku apps, again one for the evaluator and one for the collector.

    git remote add my-collector-app git@heroku.com/my-collector-app.git
    git remote add my-evaluator-app git@heroku.com/my-evaluator-app.git

Add configuration variable so the apps know which is which.

    heroku config:add COLLECTOR_APP=1 -a my-collector-app
    heroku config:add EVALUATOR_APP=1 -a my-evaluator-app

Add the Mongolab add-on to your evaluator application.

    heroku addons:add mongolab:starter -a my-evaluator-app

Copy the MONGOLAB_URI config variable from the evaluator app to the config

    heroku config -a my-evaluator-app | grep MONGOLAB_URI #read the config
    heroku config:add MONGOLAB_URI=mongodb://herokuapp123:password@host.mongolab.com:12345/herokuapp123 -a my-collector-app

Deploy both apps

    git push my-collector-app master
    git push my-evaluator-app master

Visit the evaluator app

    heroku open -a my-evaluator-app

You should see the example time series displayed with Cubism.
Send some events to the collector app via any means Cube supports (pointing toward the
collector's Heroku app URL) and they should start showing up.

### Extras
Check out the aliases in .projectrc to get an idea for how to use this boilerplate locally.
In summary, just set a local MONGOLAB_URI variable locally and point it to something like
`mongodb://localhost:27017/cube_development`. Then use Heroku's foreman to start the apps.

### Credits
Josh Dzielak

A big thanks to Mike Bostock for creating Cube and Square for open sourcing it.

### License
MIT License
Copyright (c) 2012 Teethie, Inc.
