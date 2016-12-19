angular.module('tree', [])

.controller('TreeCtrl', function ($scope) {

  $scope.tree = tree(3);

  function tree(tiers) {

    var tree = []
    var nodes = 0;

    angular.forEach(generate(tiers), function (tier) {
      var t = [];
      angular.forEach(generate(4), function (row) {
        nodes++;
        var r = generate(nodes + (nodes - 1));
        t.push(r);
      });
      tree.push(t);
      nodes = nodes - 2;
    });

    console.log(tree);

    return tree;
  }

  function generate(num) {
    var arr = [];
    for(var i = 1; i <= num; i++) {
      arr.push(i);
    }
    return arr;
  }
})
