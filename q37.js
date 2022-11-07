//q44

function make_sandwich(...sand) {
    for (let i = 0; i < make_sandwich.length; i++) {
      make_sandwich[i] = ` ${sand[i]}"`;
    }
  
  console.log(`Your sandwich is Ready`);
  console.log(`------------------------`);
}
make_sandwich("roast beef");
make_sandwich("turkey", "apple slices", "honey mustard");
make_sandwich("peanut", "butter");