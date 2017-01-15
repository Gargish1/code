var rl = require('readline').createInterface(
  process.stdin, process.stdout
),
prompts = ['Name:'],

p = 1,
data = {};


var get = function() {
  rl.setPrompt(prompts[p] + '> ');
  rl.prompt();
  
p++
};

get();

rl.on('line', function(line) {
  data[prompts[p - 1]] = line;
  

var jan312009 = new Date(2009, 1-1, 20);
var oneMonthFromJan312009 = new Date(new Date(jan312009).setMonth(jan312009.getMonth()+1));
console.log(oneMonthFromJan312009);

if(p === prompts.length) {
    return rl.close();
  }
  
get();

}).on('close', function() {
  require('fs').writeFileSync('info4.txt', JSON.stringify(data));
  console.log('File Saved.');
  process.exit(0);
});
