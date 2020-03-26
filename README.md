# Superhero
profiles for superheroes


## API Reference to get JSON:
https://www.superheroapi.com/api.php/844687502666650/search/_


## Jesse's code from our talk:

```
curl https://www.superheroapi.com/api.php/10102073428564360/577/powerstats
```

```shell
curl https://www.superheroapi.com/api.php/10102073428564360/577/powerstats > 577.powerstats.json
```

```
for i in `seq 1 731`;do curl "https://www.superheroapi.com/api.php/10102073428564360/${i}/powerstats" > ${i}.powerstats.json;done
```
