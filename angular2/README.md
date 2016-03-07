# Running quickstart app #

```
$ cd ./angular2-quickstart
$ docker build -t ng2-quickstart .
$ docker run -it --rm --name ng2-quickstart -p 3000:3000 -p 3001:3001 ng2-quickstart
```

# Running demo app #

```
$ cd ./demo
$ docker build -t ng2-demo .
$ docker run -it --rm --name ng2-demo -p 3000:3000 -v /`pwd`/app://angular2/demo/app/ ng2-demo
```

