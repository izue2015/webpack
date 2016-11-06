let login = (username, password) => {
  if(username !=='admin' || password !='1234') {
    console.log('incorrect login');
  }
};

//login('admin','admin');
export {login}
