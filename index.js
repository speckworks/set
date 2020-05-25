function mySet(){
  //collection will hold the set
  let collection = [];
  //check whether collection contains element
  this.has = function(element){
    return (collection.indexOf(element) !== -1);
  }
  //return all values in function;
  this.values = function(){
    return collection;
  }
  //
  this.add = function(element){
    if(!this.has(element)){
      collection.push(element);
      return true;
    }
    return false;
  }

  this.remove = function(element){
    if(this.has(element)){
      index = collection.indexOf(element);
        collection.splice(index, 1);
        return true;
    }
  return false;
  }

  this.size = function(){
    collection.length;
  }
//this method returns the union of two sets
  this.union = function(otherSet){
    let unionSet = new mySet();
    let firstSet = this.values();
    let secondSet = otherSet.values();
    firstSet.forEach(function(e){
      unionSet.add(e);
    })
    secondSet.forEach(function(e){
      unionSet.add(e);
    })
  return unionSet
  }
//this method returns the intersection of two sets. 
  this.intersection = function(otherSet){
  let intersectionSet = new mySet();
  let firstSet = this.values();
  firstSet.forEach((e)=>{
    if(!otherSet.has(e)){
      intersectionSet.add(e);
    }
    return intersectionSet;
  })
  }
//this method returns the difference of two sets.
  this.difference = function(otherSet){
    let differenceSet = new mySet()
    let firstSet = this.values()
    firstSet.forEach(function(e){
      if(!otherSet.has(e)){
        differenceSet.add(e);
      }
    })
    return differenceSet;
  }
this.subset = function(otherSet){
  let firstSet = this.values();
  return firstSet.every(function(value){
    return otherSet.has(value)
  });
};
}

let setA = new mySet();
let setB = new mySet();
setA.add("b");
setB.add("b");
setB.add("c");
setB.add("d");

console.log(setA.subset(setB))

let setC = new mySet();
let setD = new mySet();
setC.add("a");
setD.add("b");
setD.add("c");
setD.add("a");
setD.add("d");
console.log(setD.values());
setD.remove("a")
console.log(setD.has("a"))
console.log(setD.add("d"))
console.log(setD.values())