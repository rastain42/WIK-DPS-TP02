# TP2
this project contains 2 dockerfiles to run TP1 api : "stages.Dockerfile" and "run.dockerfile"

the difference between them is that "stages.Dockerfile" builds and run the api in two stages, helping to organise the code.

```powershell
 docker build -f .\stages.Dockerfile --tag tp2-devops .

 docker run -it -p 3000:3000 tp2-devops
```
