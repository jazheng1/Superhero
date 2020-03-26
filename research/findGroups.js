
function findGroups(arrayOfHeroes) {
  const groups = [];
  for (let hero of arrayOfHeroes) {
    let connections = hero.connections;
    let groupAffiliations = connections['group-affiliation'].split('; ');
    for (let item of groupAffiliations) {
      if (!groups.includes(item)) {
        groups.push(item);
      }
    }
  }
  return groups.sort();
}

if (require.main === module) {
  console.log(findGroups());
}

module.exports = findGroups;
