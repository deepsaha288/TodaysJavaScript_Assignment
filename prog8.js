var items = [
    {
     "id": 165,
     "name": "a"},
    {
     "id": 236,
     "name": "b"},
    {
     "id": 376,
     "name": "c"},
    {
     "id": 253,
     "name": "d"},
    {
     "id": 235,
     "name": "e"},
    {
      "id": 24,
      "name": "f"}
    ];
    
    function dynamicSort(property) {
       return function(a, b) {
           return (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
       }
    }
    
    items.sort(dynamicSort('name')).sort(dynamicSort('id'));
    console.log(items);
    items.sort(dynamicSort('id')).sort(dynamicSort('name')); 