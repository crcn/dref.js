var Benchmark = require("benchmark"),
suite         = new Benchmark.Suite,
dref = require("..");

suite.add("get a", function() {
  dref.get({a:1}, "a");
})

suite.add("get a.b.c.d", function() {
  dref.get({a:{b:{c:{d:1}}}}, "a.b.c.d");
})


suite.on("cycle", function(event) {
  console.log(String(event.target));
});


suite.on("complete", function() {
  console.log("Fastest is '%s'", this.filter("fastest").pluck("name"));
});

suite.run({ async: true });