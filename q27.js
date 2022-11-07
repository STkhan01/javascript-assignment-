//q31

let current_users = ["fatma","mannan","hannan","hamna","ali"]

let new_users = ["mama", "ali", "areeba","hannan","ainie"]

new_users.forEach((item) => {
    current_users.includes(item && item.toLocaleLowerCase())
      ? console.log(`"${item} is already registed, you need to chnage username".`)
      : console.log(`"${item} is avaialbe".`);
  });